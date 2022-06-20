<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  totalCorrect: Number,
  results: Object,
});

const resultIndex = computed(() => {
  let index = 0;
  props.results!.forEach((currentIndex: any, indexLoop: number) => {
    if (
      currentIndex.min <= props.totalCorrect! &&
      currentIndex.max >= props.totalCorrect!
    ) {
      index = indexLoop;
    }
  });

  return index;
});
</script>

<template>
  <div class="result">
    <div class="title">{{ results![resultIndex!].title }}</div>
    <div class="desc">{{ results![resultIndex!].desc }}</div>
  </div>
</template>

<style scoped>
.result {
  width: 100%;
}

.title {
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #12cbc4;
  color: #fff;
  box-sizing: border-box;
}

.desc {
  border: 1px solid #8e959f;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  background-color: #fff;
  transition: 0.4s linear all;
  text-align: center;
}
</style>
