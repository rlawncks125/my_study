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
      const variable = `<span class='css-variable'>${splits[0]}</span>`;
      const value = `<span class='css-value'>${splits[1]}</span>`;

      resultText.push(`${tabString}${variable} : ${value}`);
      return;
    }

    resultText.push(text);
  });

  return resultText.join("<br />");
};

enum IJsTypes {
  "interface",
  "enum",
  "none",
  "returnContent",
}
// Javasciprt Convert
export const jsToCode = (code: string) => {
  const resultText = [] as any[];
  let jsType: keyof typeof IJsTypes = "none";

  const splits = splitsCode(code);

  splits.forEach((v) => {
    let text;
    let isExport = "";
    const { isTrue, text: refine, tabString } = commonConvert(v, resultText);

    if (isTrue) return;
    text = refine;
    text = text.trim();

    // js 공통 처리 export
    if (text.includes("export") && text.indexOf("export") === 0) {
      isExport = `<span class='js-export'>export</span> `;
      text = text.replace("export", "");
      text = text.trim();
    }

    // js 공통 끝('}') 처리
    if (jsType !== "none" && text.includes("}")) {
      const typeText = `<span class='js-${jsType}'>${text}</span>`;
      resultText.push(`${tabString}${typeText}`);
      jsType = "none";
      return;
    }

    // js return 처리
    if (
      jsType === "returnContent" ||
      (text.includes("return") && text.indexOf("return") === 0)
    ) {
      // return 첫문단
      if (text.includes("return")) {
        const splits = text.split("return");
        const textReturn = `<span class='js-return'>return</span> `;
        const content = `<span class='js-returnContent'>${splits[1]}</span>`;
        resultText.push(`${tabString}${textReturn}${content}`);
        text.includes(";") ? (jsType = "none") : (jsType = "returnContent");

        return;
      }

      const content = `<span class='js-returnContent'>${text}</span>`;
      resultText.push(`${tabString}${content}`);
      return;
    }

    // const 처리
    if (text.includes("const") && text.indexOf("const") === 0) {
      let putString = "";

      const splits = text.split("const");

      putString += `<span class='js-const'>const</span>`;

      const remain = splits[1];
      // 익명 함수
      if (remain.includes("=>")) {
        const vv = remain.split("=");
        let variableString = `<span class='js-variable'>${vv[0]}</span>`;
        let arrowFuncString = `<span class='js-arrowFnc'>${vv[1]}</span>`;

        // 변수 타입 캐스팅
        if (vv[0].includes(":")) {
          const s = vv[0].split(":");
          variableString = [
            `<span class='js-variable'>${s[0]}</span>`,
            ":",
            `<span class='js-variable-type'>${s[1]}</span>`,
          ].join(" ");
        }

        // 익명 함수 타입
        const params = vv[1]
          .slice(vv[1].indexOf("(") + 1, vv[1].indexOf(")"))
          .trim();
        let funcParams = "";

        if (params.length > 0) {
          const paramsSplits = params.split(",");
          const refine = paramsSplits.map((v) => {
            const value = `<span class='js-arrowFnc-variable'>${
              v.split(":")[0]
            }</span>`;
            const type = `<span class='js-arrowFnc-variable-type'>${
              v.split(":")[1]
            }</span>`;

            return [value, type].join(":");
          });

          funcParams = [
            "<span class='js-arrowFnc'>(</span>",
            refine.join(","),
            "<span class='js-arrowFnc'>)</span>",
          ].join(" ");
          arrowFuncString = funcParams;
          // 익명함수 타입 정의 캐스팅
          if (vv[1].replaceAll(" ", "").includes("):")) {
            const vvSplits = vv[1].split(":");
            const type = vvSplits[vvSplits.length - 1];
            arrowFuncString += [
              " :",
              `<span class='js-variable-type'>${type}</span>`,
            ].join(" ");
          }
        }

        putString += [variableString, "=", arrowFuncString, " => ", "{"].join(
          " "
        );
      }
      // 변수
      else if (remain.includes("=")) {
        let remainText = remain;
        remainText = remainText.replaceAll("<", "&lt");
        remainText = remainText.replaceAll(">", "&gt");

        const vv = remainText.split("=");
        let variableString = `<span class='js-variable'>${vv[0]}</span>`;
        let valueString = `<span class='js-value'>${vv[1]}</span>`;

        // 변수 타입 캐스팅
        if (vv[0].includes(":")) {
          const s = vv[0].split(":");
          variableString = [
            `<span class='js-variable'>${s[0]}</span>`,
            ":",
            `<span class='js-variable-type'>${s[1]}</span>`,
          ].join(" ");
        }

        // 값 타입 캐스팅
        if (vv[1].includes("&lt") || vv[1].includes("as")) {
          // <타입>
          if (vv[1].includes("&lt")) {
            const type = vv[1].slice(
              vv[1].indexOf("&lt") + 3,
              vv[1].indexOf("&gt")
            );
            const value = vv[1].split("&gt")[1];
            valueString = [
              "<span class='js-value-type'>&lt",
              type,
              "&gt</span>",
              `<span class='js-value'>${value}</span>`,
            ].join("");
            // as 타입
          } else if (vv[1].includes("as")) {
            const splits = vv[1].split("as");

            valueString = [
              `<span class='js-value'>${splits[0]}</span>`,
              "<span style='color : purple'>as</span>",
              `<span class='js-value-type'>${splits[1]}</span>`,
            ].join("");
          }
        }
        putString += [variableString, " = ", valueString].join(" ");
      }

      // resultText.push(`<span class='js-const'>${text}</span>`);
      resultText.push(`${tabString}${isExport}${putString}`);
      return;
    } else if (text.includes("interface")) {
      jsType = "interface";
      resultText.push(
        `${tabString}${isExport}<span class='js-interface'>${text}</span>`
      );
      return;
    } else if (text.includes("enum")) {
      jsType = "enum";
      resultText.push(
        `${tabString}${isExport}<span class='js-enum'>${text}</span>`
      );
      return;
    } else if (text.includes("import")) {
      resultText.push(
        `${tabString}${isExport}<span class='js-import'>${text}</span>`
      );
      return;
    }

    resultText.push(`${tabString}${text}`);
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
