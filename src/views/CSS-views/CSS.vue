<template>
  <div>
    <code-convert>
      {{ codeToht }}
    </code-convert>
  </div>
</template>

<script lang="ts">
import codeConvert from "../../components/codeConvert.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { codeConvert },
  setup() {
    // \n으로 하면 문자열로 인식안해서 /n로 줄바꿈함
    const codeToht = `
    <p class='className'> p태그 내용 </p> /n
     
     /n
    .code-warp { /n     
      background: black; /n
      color: white; /n
      text-align: left; /n
      margin: 2px; /n
      padding: 10px 20px; /n
    } 
     /n/n
    
    // ㅁㅇ
     // 주석테스트입니다. /n
     const data = reactive &lt;IBook&gt;({ /n
     name, /n
     price, /n
     title, /n
     });`
      .replaceAll("<", "&lt")
      .replaceAll(">", "&gt");

    return { codeToht };
  },
});
</script>

<style lang="scss"></style>
