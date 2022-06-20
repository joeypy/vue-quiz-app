<template>
  <div class="ctr">
    <Transition name="fade" mode="out-in">
      <questions
        v-if="questionsAnswered < data.questions.length"
        :data="data"
        :questionsAnswered="questionsAnswered"
        @question-answered="questionAnswered"
      />
      <result v-else :totalCorrect="totalCorrect" :results="data.results" />
    </Transition>
    <button
      type="button"
      class="reset-btn"
      @click.prevent="reset"
      v-if="questionsAnswered === data.questions.length"
    >
      Reset
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Result from "./components/Result.vue";
import Questions from "./components/Questions.vue";

let questionsAnswered = ref(0);
let totalCorrect = ref(0);
let data = ref({
  questions: [
    {
      q: "What is 2 + 2?",
      answers: [
        {
          text: "4",
          is_correct: true,
        },
        {
          text: "3",
          is_correct: false,
        },
        {
          text: "Fish",
          is_correct: false,
        },
        {
          text: "5",
          is_correct: false,
        },
      ],
    },
    {
      q: 'How many letters are in the word "Banana"?',
      answers: [
        {
          text: "5",
          is_correct: false,
        },
        {
          text: "7",
          is_correct: false,
        },
        {
          text: "6",
          is_correct: true,
        },
        {
          text: "12",
          is_correct: false,
        },
      ],
    },
    {
      q: "Find the missing letter: C_ke",
      answers: [
        {
          text: "e",
          is_correct: false,
        },
        {
          text: "a",
          is_correct: true,
        },
        {
          text: "i",
          is_correct: false,
        },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 2,
      title: "Try again!",
      desc: "Do a little more studying and you may succeed!",
    },
    {
      min: 3,
      max: 3,
      title: "Wow, you're a genius!",
      desc: "Studying has definitely paid off for you!",
    },
  ],
});

const questionAnswered = (is_correct: boolean) => {
  if (is_correct) {
    totalCorrect.value++;
  }
  questionsAnswered.value++;
};

const reset = () => {
  questionsAnswered.value = 0;
  totalCorrect.value = 0;
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 20px;
  font-family: sans-serif;
  padding-top: 20px;
  background: #e6ecf1;
}

.ctr {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s linear;
}
.fade-leave-active {
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
}

.reset-btn {
  background-color: #ff6372;
  border: 0;
  font-size: 22px;
  color: #fff;
  padding: 10px 25px;
  margin: 10px auto;
  display: block;
}

.reset-btn:active,
.reset-btn:focus,
.reset-btn:hover {
  border: 0;
  outline: 0;
}
</style>
