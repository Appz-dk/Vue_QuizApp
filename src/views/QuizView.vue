<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import Question from "@/components/Question.vue"
  import QuizHeader from "@/components/QuizHeader.vue"
  import quizData from "@/assets/data.json"
  import { ref } from "vue";

  const route = useRoute()
  const quizId = route.params.quizId as string

  const currentQuestionIndex = ref(0)
  const currentQuiz = quizData.find(quiz => quiz.id === parseInt(quizId))
  const currentQuestion = currentQuiz?.questions[currentQuestionIndex.value]
</script>

<template>
  <div class="quiz-container">
    <QuizHeader />
    <Question v-if="currentQuestion" :question="currentQuestion" />
  </div>
</template>


<style scoped>

  .quiz-container {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

</style>