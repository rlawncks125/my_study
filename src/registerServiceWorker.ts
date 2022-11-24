/* eslint-disable no-console */

import axios from "axios";
import { register } from "register-service-worker";
import { ref } from "vue";

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
    // console.log(Worker.insatce.register);
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

  #isSubscribe = ref<boolean>();
  constructor() {}

  get register() {
    return this.#regist;
  }

  get getterIsSubscribe() {
    return this.#isSubscribe.value;
  }

  async setRegist(regist: ServiceWorkerRegistration) {
    this.#regist = regist;
    this.isSubscribe();

    // 알람 권한 변경으로 기존 구독이 삭제안됐을시 삭제
    if (!this.getterIsSubscribe) {
      await deleteRegisterLocalStorege();
    }
  }

  installing() {
    return this.#regist.installing;
  }

  /** 구독 상태 여부 */
  async isSubscribe() {
    const status = (await this.#regist.pushManager.getSubscription()) !== null;
    this.#isSubscribe.value = status;
    return status;
  }

  /** 구독 하기 */
  async subscribe() {
    if (Notification.permission !== "granted") {
      alert("알림 권한 요청을 수락해 주세요.");

      // 알림 권한 요청
      return;
    }
    if (await this.isSubscribe()) {
      alert("이미 구독하였습니다.");
      return;
    }

    return await this.#regist.pushManager
      .subscribe({
        userVisibleOnly: true,
        // 백엔드에서 키받아오기
        applicationServerKey: await getPublickey(),
      })
      .then(async (subscription) => {
        console.log(JSON.stringify(subscription));
        // 백엔드 구독 등록

        const id = await registerNotification(subscription);
        console.log(id);

        // 알림 차단을 했을시 이전 구독 정보를 저장하기위한 용도
        localStorage.setItem("subscription", JSON.stringify(subscription));
        alert("구독하였습니다.");

        return this.isSubscribe();
      })
      .catch((err) => {
        console.log("Failed to subscribe the user: ", err);
      });
  }

  /** 구독 취소 */
  async unSubcribe() {
    if ((await this.isSubscribe()) === null) return;
    return await this.#regist.pushManager
      .getSubscription()
      .then(async (subscription) => {
        // 백엔드 구독 삭제
        await deleteRegister();

        await subscription?.unsubscribe();

        return this.isSubscribe();
      })
      .catch((err) => {
        console.log("Failed to unSubscribe the user: ", err);
      });
  }

  async getSubcribeAuth() {
    return this.#regist.pushManager.getSubscription().then((subscription) => {
      if (!subscription) return null;
      const {
        keys: { auth },
      } = JSON.parse(JSON.stringify(subscription));

      return auth;
    });
  }

  /** 유저 아이디 등록 */
  async registerByUser(userId: number) {
    const auth = await Worker.insatce.getSubcribeAuth();

    if (!auth) return;

    return await axios
      .post("https://myapi.kimjuchan97.xyz/notification/register-user", {
        auth,
        userId,
      })
      .then((res) => res.data as number);
  }

  /** 유저 아이디 제거 */
  async removeRegisterByUser() {
    const auth = await Worker.insatce.getSubcribeAuth();

    if (!auth) return;

    return await axios
      .post("https://myapi.kimjuchan97.xyz/notification/register-user-remove", {
        auth,
      })
      .then((res) => res.data as number);
  }
}

/** 공개키 받아오기 */
async function getPublickey() {
  return await axios
    .get("https://myapi.kimjuchan97.xyz/notification/publicKey")
    .then((res) => res.data.key as string);
}

/** 알람 등록 */
async function registerNotification(subscription: any) {
  return await axios
    .post("https://myapi.kimjuchan97.xyz/notification/register", {
      subscription,
    })
    .then((res) => res.data.id as number);
}

/** 알람 삭제 */
async function deleteRegister() {
  // const {
  //   keys: { auth },
  // } = JSON.parse(JSON.stringify(subscription));

  const auth = await Worker.insatce.getSubcribeAuth();

  if (!auth) return;

  // return await fetch(`${ApiServer.url}/notification/${auth}`, {
  //   method: "DELETE",
  // });
  return await axios.delete(
    `https://myapi.kimjuchan97.xyz/notification/${auth}`
  );
}

/** 로컬스토리지 구독 삭제 */
async function deleteRegisterLocalStorege() {
  const subscription = localStorage.getItem("subscription");

  if (!subscription) return;
  const {
    keys: { auth },
  } = JSON.parse(subscription);

  if (!auth) return;

  const ok = await axios.delete(
    `https://myapi.kimjuchan97.xyz/notification/${auth}`
  );

  localStorage.removeItem("subscription");
  return ok;
}
