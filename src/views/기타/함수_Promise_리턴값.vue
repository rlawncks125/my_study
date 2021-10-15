<template>
  <div>리턴값으로 함수호출</div>
  <input type="text" v-model.number="f.x" />
  <input type="text" v-model.number="f.y" />
  <button @click="f.click">클릭</button>
  <br />
  <p>Promise</p>
  <input type="text" v-model.number="p.x" />
  <input type="text" v-model.number="p.y" />
  <button @click="p.click">클릭</button>
  <br />
  <p>function & Promise</p>
  <input type="text" v-model.number="d.x" />
  <input type="text" v-model.number="d.y" />
  <button @click="d.click">클릭</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const { x: funX, y: funY, Func: Ffn } = functionReturn();
    const { x: proX, y: proY, Func: Pfn } = PromiseReturn();
    const { x: DX, y: DY, Func: Dfn } = DoubleReturn();
    const data = reactive({
      f: {
        x: funX,
        y: funY,
        click: () => {
          Ffn(({ sum, avg }) => {
            console.log(`sum : ${sum}, avg : ${avg}`);
          });
        },
      },
      p: {
        x: proX,
        y: proY,
        click: () => {
          Pfn().then(({ sum, avg }) =>
            console.log(`Promise , Sum : ${sum} Avg : ${avg}`)
          );
        },
      },
      d: {
        x: DX,
        y: DY,
        click: () => {
          Dfn(({ sum, avg }) => {
            console.log(`Function | sum : ${sum} avg : ${avg}`);
          }).then(({ sum, avg }) =>
            console.log(`promise | sum :${sum}, avg: ${avg}`)
          );
        },
      },
    });

    return { ...toRefs(data) };
  },
});

// 함수로 인자값 넘겨주기
const functionReturn = () => {
  const data = reactive({
    x: 0,
    y: 0,
  });

  interface IFuncParms {
    sum: number;
    avg: number;
  }
  type CallFunction = (parms: IFuncParms) => void;
  interface IFunc {
    (callFunc: CallFunction): void;
  }
  const Func: IFunc = (callFunc: CallFunction) => {
    const sum = data.x + data.y;
    const avg = data.x / data.y;
    callFunc({ sum, avg });
  };

  return { ...toRefs(data), Func };
};

// 프로미스로 값넘겨주기
const PromiseReturn = () => {
  const data = reactive({
    x: 0,
    y: 0,
  });

  interface IPromiseParms {
    sum: number;
    avg: number;
  }
  interface IFunc {
    (): Promise<IPromiseParms>;
  }
  const Func: IFunc = (): Promise<IPromiseParms> => {
    const sum = data.x + data.y;
    const avg = data.x / data.y;

    return new Promise<IPromiseParms>((resolve) => {
      setTimeout(() => {
        ///
        resolve({ sum, avg });
      }, 1000);
    });
  };

  return { ...toRefs(data), Func };
};

// 두개다 값넘겨주기
const DoubleReturn = () => {
  const data = reactive({
    x: 0,
    y: 0,
  });
  // type & interface 정의
  interface IFuncParms {
    sum: number;
    avg: number;
  }
  type CallFunction = (parms: IFuncParms) => void;
  interface IFunc {
    (callFunc: CallFunction): Promise<IFuncParms>;
  }

  // 넘겨줄 함수
  const Func: IFunc = (callFunc: CallFunction): Promise<IFuncParms> => {
    const sum = data.x + data.y;
    const avg = data.x / data.y;
    // 함수로 인자값 넘겨주기
    callFunc({ sum, avg });

    // 프로미스로 값넘겨주기
    return new Promise<IFuncParms>((resolve) => {
      setTimeout(() => {
        resolve({ sum, avg });
      }, 1000);
    });
  };
  return { ...toRefs(data), Func };
};
</script>

<style scoped></style>
