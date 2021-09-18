<template>
  <div>
    <code-convert>
      {{ codeToht }}
    </code-convert>
  </div>
</template>

<script lang="ts">
import codeConvert, { codeProcess } from "../../components/codeConvert.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { codeConvert },
  setup() {
    // \n으로 하면 문자열로 인식안해서 /n로 줄바꿈함
    const codeToht = codeProcess(`
    <p class='className'> p태그 내용 </p> 
    <div>
        /t<a herf="url">위키피마갈까</a>
    </div>

    .code-warp {
    background: black; 
    color: white; 
    text-align: left; 
    margin: 2px; 
    padding: 10px 20px; 
    } 
     
    
    // ㅁㅇ
    // 주석테스트입니다.
     const data = reactive &lt;IBook&gt;({ 
     name,
     price,
     title,
     });
     

    
     
     `);

    return { codeToht };
  },
});
</script>

<style lang="scss"></style>
