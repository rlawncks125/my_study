<template>
  <h1>
    <slot name="title"></slot>
  </h1>
  <p>
    <slot name="content"></slot>
  </p>
  <div class="code-warp" v-html="codeText"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ETag } from "@/assets/CssTag";

export default defineComponent({
  props: {
    codeText: String,
  },
  setup() {
    return {};
  },
});
export const Char_TAB = "&nbsp;&nbsp;";

// HTML Convert
export const htmlToCode = (code: string) => {
  const resultText = [] as any[];
  const splits = splitsCode(code);

  // 처리
  splits.forEach((v) => {
    let text;
    const { isTrue, text: refine, tabString } = commonConvert(v, resultText);

    if (isTrue) return;

    text = refine;

    text = text.trim();
    text = text.replaceAll("<", "&lt");
    text = text.replaceAll(">", "&gt");

    // 태그 구별
    if (
      text.indexOf("&lt") === 0 &&
      text.lastIndexOf("&gt") === text.length - 3
    ) {
      const classLt = "<span class=co-html-lt>&lt</span>";
      const classGt = "<span class=co-html-gt>&gt</span>";

      const firstGt = text.indexOf("&gt");
      const splits = text.split(text.slice(firstGt, firstGt + 3));

      let tagData = "";
      // 태그만있을경우
      if (splits.length === 2) {
        const tag = splits[0].split("&lt")[1];

        let tagName = "";
        let tagAtr = "";

        // 속성 있는경우
        if (tag.split(" ").length >= 2) {
          const tagSpilts = tag.split(" ");
          tagName = tagSpilts[0];

          tagSpilts.forEach((v, i) => {
            i > 0 && (tagAtr += `${v} `);
          });

          tagData = `<span class=co-html-tag>${tagName}</span> <span class=co-html-atr>${tagAtr}</span>`;
        }
        // 속성 없는경우
        else {
          tagData = `<span class=co-html-tag>${tag}</span>`;
        }

        resultText.push(`${tabString}${classLt}${tagData}${classGt}`);
        return;
      }
      // 태그사이에 문자도 있을경우
      else if (splits.length > 2) {
        const tag = splits[0].split("&lt")[1];

        let tagName = "";
        let tagAtr = "";
        let lastTag = "";
        // 속성 있는경우
        if (tag.split(" ").length >= 2) {
          const tagSpilts = tag.split(" ");
          tagName = tagSpilts[0];

          tagSpilts.forEach((v, i) => {
            i > 0 && (tagAtr += `${v} `);
          });

          tagData = `<span class=co-html-tag>${tagName}</span> <span class=co-html-atr>${tagAtr}</span>`;
          lastTag = `<span class=co-html-tag>/${tagName}</span>`;
        }
        // 속성 없는경우
        else {
          tagData = `<span class=co-html-tag>${tag}</span>`;
          lastTag = `<span class=co-html-tag>/${tag}</span>`;
        }

        const textData = splits[1].split("&lt")[0];

        resultText.push(
          `${tabString}${classLt}${tagData}${classGt} ${textData} ${classLt}${lastTag}${classGt}`
        );
        return;
      }
    }
    resultText.push(text);
  });

  return resultText.join("<br />");
};

// Css Convert
export const cssToCode = (code: string) => {
  const resultText = [] as any[];

  const splits = splitsCode(code);

  splits.forEach((v) => {
    let text;
    const { isTrue, text: refine, tabString } = commonConvert(v, resultText);

    if (isTrue) return;
    text = refine;
    text = text.trim();

    // 선택자 & 클래스 선언
    if (text.lastIndexOf("{") > 0) {
      const 선택자 = [] as string[];

      const splits = text.split(" ");
      console.log(splits);
      splits.forEach((v) => {
        if (v in ETag) {
          선택자.push(`<span class='type-tag'>${v}</span>`);
        } else if (v.includes(".")) {
          선택자.push(`<span class='type-class'>${v}</span>`);
        } else if (v.includes("#")) {
          선택자.push(`<span class='type-id'>${v}</span>`);
        } else {
          선택자.push(`<span>${v}</span>`);
        }
      });
      resultText.push(`${tabString}${선택자.join(" ")}`);
      return;
    }
    // 값 선언
    else if (text.includes(":")) {
      const splits = text.split(":");
      const cssValue = `<span class='css-value'>${splits[0]}</span>`;
      const variable = `<span class='css-variable'>${splits[1]}</span>`;

      resultText.push(`${tabString}${cssValue} : ${variable}`);
      return;
    }

    resultText.push(text);
  });

  return resultText.join("<br />");
};

// Javasciprt Convert
export const jsToCode = (code: string) => {
  const resultText = [] as any[];

  const splits = splitsCode(code);

  splits.forEach((v) => {
    let text;
    const { isTrue, text: refine, tabString } = commonConvert(v, resultText);

    if (isTrue) return;
    text = refine;

    resultText.push(text);
  });

  return resultText.join("<br />");
};

const splitsCode = (code: string) => {
  // 한줄 한줄 변환
  const split = code.split("\n");
  // const split = code.split("/n");
  return split;
};

const commonConvert = (
  text: string,
  buffArray: any[]
): { isTrue: boolean; text: string; tabString: string } => {
  let tabString = "";
  // 탭 처리
  if (text.includes("&nbsp;")) {
    const da = text.split("&nbsp;");
    tabString = "&nbsp;".repeat(da.length - 1);

    text = da[da.length - 1];
    text = text.replaceAll("&nbsp;", " ");
  }

  // 주석 처리
  if (text.slice(0, 2) === "//") {
    buffArray.push(`${tabString}<span class=footnote>${text}</span>`);
    return { isTrue: true, text, tabString };
  }

  // 설명 처리
  if (text.slice(0, 4) === "----") {
    // return `${tabString}<span class=co-설명>${text.slice(
    //   4,
    //   text.length
    // )}</span><br />`;
    return { isTrue: true, text, tabString };
  }

  // ex) 처리
  if (text.slice(0, 3) === "ex)") {
    // return `${tabString}<span class=co-ex>ex)</span>${text.slice(
    //   3,
    //   text.length
    // )}<br />`;
    return { isTrue: true, text, tabString };
  }

  return { isTrue: false, text, tabString };
};
</script>

<style scoped></style>
