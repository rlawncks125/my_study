<script setup lang="ts">
import { Transition, ref } from "vue";
import { Icon } from "@iconify/vue";

const isOpen = ref(false);
</script>

<template>
  <h1>
    <slot name="header"></slot>
  </h1>
  <div>
    <slot name="html"></slot>
  </div>
  <div
    @click="isOpen = !isOpen"
    :style="{
      display: 'inline-block',
      cursor: 'pointer',
      padding: '0.2em',
      marginBottom: '0.4rem',
    }"
  >
    <div>
      <div class="arrow" :class="isOpen ? 'is-open' : ''">
        <Icon icon="material-symbols:play-arrow-rounded" />
      </div>
      <span>
        {{ isOpen ? "닫기" : "자세히" }}
      </span>
    </div>
  </div>

  <div class="wrap" :class="isOpen ? 'is-open' : ''">
    <div class="content">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.wrap {
  height: 0px;
  position: relative;
  overflow: hidden;
  transform: scaleY(0);
  transform-origin: top center;
  transition: transform 0.2s, height 0.2s;

  & .content {
    transform: translateY(-100%);
    transform-origin: top center;
    transition: transform 0.1s;
  }
}
.wrap.is-open {
  height: 100%;
  transform: scaleY(1);

  & .content {
    transform: translateY(0);
  }
}

.arrow {
  display: inline-block;
  transform: rotate(0);

  transition: transform 0.2s;
}
.arrow.is-open {
  transform: rotate(90deg);
}
</style>
