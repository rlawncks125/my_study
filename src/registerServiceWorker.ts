/* eslint-disable no-console */

import axios from "axios";
import { register } from "register-service-worker";

console.log(process.env.BASE_URL);

// if (process.env.NODE_ENV === "production") {
register(`${process.env.BASE_URL}sw.js`, {
  ready() {
    console.log(
      "App is being served from cache by a service worker.\n" +
        "For more details, visit https://study.kimjuchan97.xyz/"
    );
  },
  registered(regist) {
    Worker.insatce.setRegist(regist);

    console.log("Service worker has been registered.");
    console.log(Worker.insatce.register);
  },
  cached() {
    console.log("Content has been cached for offline use.");
  },
  updatefound() {
    console.log("New content is downloading.");
  },
  updated() {
    console.log("New content is available; please refresh.");
  },
  offline() {
    console.log(
      "No internet connection found. App is running in offline mode."
    );
  },
  error(error) {
    console.error("Error during service worker registration:", error);
  },
});
// }

export class Worker {
  // @ts-ignore
  #regist: ServiceWorkerRegistration;

  static insatce = new Worker();

  constructor() {}

  get register() {
    return this.#regist;
  }

  setRegist(regist: ServiceWorkerRegistration) {
    this.#regist = regist;
  }

  installing() {
    return this.#regist.installing;
  }

  async isSubscribe() {
    return (await this.#regist.pushManager.getSubscription()) !== null;
  }

  async subscribe() {
    // 백엔드에서 키받아오기

    return await this.#regist.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: await getPublickey(),
      })
      .then(async (subscriptuon) => {
        console.log(JSON.stringify(subscriptuon));
        // 백엔드 구독 등록

        const id = await registerNotification(subscriptuon);

        console.log(id);

        return this.isSubscribe();
      })
      .catch((err) => {
        console.log("Failed to subscribe the user: ", err);
      });
  }

  async unSubcribe() {
    if ((await this.isSubscribe()) === null) return;
    return await this.#regist.pushManager
      .getSubscription()
      .then(async (subscription) => {
        // 백엔드 구독 삭제
        await deleteRegister(subscription!);

        await subscription?.unsubscribe();

        return this.isSubscribe();
      })
      .catch((err) => {
        console.log("Failed to unSubscribe the user: ", err);
      });
  }
}

async function getPublickey() {
  // return await useFetch<{ key: string }>(
  //   `${ApiServer.url}/notification/publicKey`,
  //   {
  //     pick: ["key"],
  //   }
  // ).then((res) => res.data.value.key);
  return await axios
    .get("https://myapi.kimjuchan97.xyz/notification/publicKey")
    .then((res) => res.data.key as string);
}

async function registerNotification(subscription: any) {
  return await axios
    .post("https://myapi.kimjuchan97.xyz/notification/register", {
      endPoint: subscription,
    })
    .then((res) => res.data.id as number);
}

async function deleteRegister(subscription: PushSubscription) {
  const {
    keys: { auth },
  } = JSON.parse(JSON.stringify(subscription));

  // return await fetch(`${ApiServer.url}/notification/${auth}`, {
  //   method: "DELETE",
  // });
  return await axios.delete(
    `https://myapi.kimjuchan97.xyz/notification/${auth}`
  );
}
