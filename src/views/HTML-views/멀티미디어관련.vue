<template>
  <h1 class="div-line">멀티미디어 관련</h1>
  <code-convert>
    <template #title> video</template>
    <template #content>
      <video width="320" height="240" controls>
        <source src="../../assets/mov_bbb.mp4" type="video/mp4" />
      </video>
    </template>
    <template #code>{{ video }} </template>
  </code-convert>
  <code-convert>
    <template #title> audio</template>
    <template #content></template>
    <template #code>{{ audio }} </template>
  </code-convert>
  <code-convert>
    <template #title> canvas</template>
    <template #content>
      <canvas ref="canvasID"></canvas>
    </template>
    <template #code>{{ canvas }} </template>
  </code-convert>
  <br />
  <br />
  <h1 class="div-line">외부 페이지 삽입</h1>
  <code-convert>
    <template #title> object_embed</template>
    <template #content></template>
    <template #code>{{ object_embed }} </template>
  </code-convert>
  <br />
  <br />
  <h1 class="div-line">프레임</h1>
  <code-convert>
    <template #title> Iframe</template>
    <template #content>
      <iframe
        width="500"
        height="285"
        src="https://www.youtube.com/embed/mw6pCi1IluU?list=RDmw6pCi1IluU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
    <template #code>{{ iframe }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      video: codeProcess(`<video>: 비디오 재생
    
        // 코드 
        <video width="320" height="240" controls>
        /tt<source src="../../assets/mov_bbb.mp4" type="video/mp4" />
        </video>  
      `),
      audio: codeProcess(`<audio>: 오디오 재생`),
      canvas: codeProcess(
        `<canvas>: 스크립트를 통해 그래픽을 그리는 데 사용될 수 있다. 예를 들어, 그래프 그리기, 사진 합성, 애니메이션 제작, 실시간 비디오 처리, 렌더링에 쓰일 수 있다
        
        //코드
        // html
        <canvas ref="canvasID"></canvas>

        // script
        const canvasID = ref<HTMLCanvasElement>();

    watch(canvasID, () => {
      /ttconst ctx = canvasID.value?.getContext("2d");

      if (ctx) {
        /ttctx.fillStyle = "green";
        /ttctx.fillRect(10, 10, 150, 100);
      }
    });
        `
      ),
      object_embed:
        codeProcess(`<object>, <embed>: 웹 페이지 또는 외부 프로그램을 임베드한다.
HTML 4.01에서 <embed>가 삭제되고 <object>로 대체되었으나 <object> 태그의 사용법이 워낙 복잡하다는 문제점이 있어서 HTML 5 규격에서 다시 표준으로 들어갔다. <embed>의 경우 파이어폭스에서 웹 페이지를 첨부할 수 없는 문제가 있었다.`),
      iframe: codeProcess(
        `<iframe> : inline frame의 줄임말이다. <iframe>은 문서 전체가 프레임인 게 아니라 문서 안에 박스형으로 프레임을 넣을 때 쓴다. 이 태그는 HTML5에서도 계속 지원된다. 물론 iframe도 남용하면 웹 접근성 저하되는 건 똑같다.
        
        // 코드
        // 유투브 소스 코드 복사로 끌어옴
      <iframe
        /ttwidth="500"
        /ttheight="285"
        /ttsrc="https://www.youtube.com/embed/mw6pCi1IluU?list=RDmw6pCi1IluU"
        /tttitle="YouTube video player"
        /ttframeborder="0"
        /ttallow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        /ttallowfullscreen>
        </iframe>`
      ),
    });
    const canvasID = ref<HTMLCanvasElement>();

    watch(canvasID, () => {
      const ctx = canvasID.value?.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(10, 10, 150, 100);
      }
    });

    return { ...toRefs(data), canvasID };
  },
});
</script>

<style scoped></style>
