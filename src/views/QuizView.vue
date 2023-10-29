<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import Question from "@/components/Question.vue"
  import QuizHeader from "@/components/QuizHeader.vue"
  import quizData from "@/assets/data.json"
  import { ref, watch } from "vue";

  const route = useRoute()
  const quizId = route.params.quizId as string

  const currentQuestionIndex = ref(0)
  const currentQuiz = quizData.find(quiz => quiz.id === parseInt(quizId))
  const currentQuestion = ref(currentQuiz?.questions[currentQuestionIndex.value])
  const quizState = ref(`${currentQuestionIndex.value + 1}/${currentQuiz?.questions.length}`)

  watch(() => currentQuestionIndex.value, () => {
    quizState.value = `${currentQuestionIndex.value + 1}/${currentQuiz?.questions.length}`
    currentQuestion.value = currentQuiz?.questions[currentQuestionIndex.value]
  })
</script>

<template>
  <div v-if="currentQuiz" class="quiz-container">
    <QuizHeader :quizState="quizState" />
    <Question v-if="currentQuestion" :question="currentQuestion" />
  </div>
  <button @click="currentQuestionIndex++">Next Question</button>
</template>


<style scoped>

  .quiz-container {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

</style>