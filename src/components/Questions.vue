<script setup lang="ts">
// import { Questions } from "../interfaces/props";
defineProps({
  data: Object || undefined,
  questionsAnswered: Number,
});
const emit = defineEmits(["question-answered"]);

const selectAnswer = (is_correct: boolean) => {
  emit("question-answered", is_correct);
};
</script>

<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{
          width: `${(questionsAnswered! / data!.questions.length) * 100}%`,
        }"
      ></div>
      <div class="status">
        {{ questionsAnswered }} out of {{ data!.questions.length }} questions
        answered
      </div>
    </div>
    <Transition-group name="fade">
      <div
        class="single-question"
        v-for="(question, qi) in data!.questions"
        :key="question.q"
        v-show="questionsAnswered === qi"
      >
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div
            class="answer"
            v-for="answer in question.answers"
            :key="answer.text"
            @click.prevent="selectAnswer(answer.is_correct)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </Transition-group>
  </div>
</template>

<style scoped>
.questions-ctr {
  position: relative;
  width: 100%;
}
.question {
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #00ca8c;
  color: #fff;
  box-sizing: border-box;
}
.single-question {
  position: relative;
  width: 100%;
}
.answer {
  border: 1px solid #8e959f;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  background-color: #fff;
  transition: 0.2s linear all;
}
.answer span {
  display: inline-block;
  margin-left: 5px;
  font-size: 0.75em;
  font-style: italic;
}
.progress {
  height: 50px;
  margin-top: 10px;
  background-color: #ddd;
  position: relative;
}
.bar {
  height: 50px;
  background-color: #ff6372;
  transition: all 0.3s linear;
}
.status {
  position: absolute;
  top: 15px;
  left: 0;
  text-align: center;
  color: #fff;
  width: 100%;
}
.answer:not(.is-answered) {
  cursor: pointer;
}
.answer:not(.is-answered):hover {
  background-color: #8ce200;
  border-color: #8ce200;
  color: #fff;
}
</style>
