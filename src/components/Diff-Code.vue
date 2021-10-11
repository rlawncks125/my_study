<template>
  <div id="vue-diff">
    <div class="diff-warp" :style="style.left">
      <slot name="left"></slot>
    </div>
    <div class="diff-warp" :style="style.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: {
    left: Number,
    right: Number,
  },
  setup(props) {
    const style = reactive({
      left: {
        width: `${props.left}%`,
      },
      right: {
        width: `${props.right}%`,
      },
    });

    return { style };
  },
});
</script>

<style lang="scss">
#vue-diff {
  display: flex;

  & .diff-warp {
    flex: initial;
    width: 50%;
  }
}
</style>
