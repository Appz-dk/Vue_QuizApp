<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import Question from "@/components/Question.vue"
  import QuizHeader from "@/components/QuizHeader.vue"
  import QuizResult from "@/components/QuizResult.vue"
  import quizData from "@/assets/data.json"
  import { ref, computed } from "vue";

  const route = useRoute()
  const quizId = route.params.quizId as string

  const currentQuestionIndex = ref(0)
  // TODO: Maybe show error if no quiz is found
  const quiz = quizData.find(quiz => quiz.id === parseInt(quizId))
  const currentQuestion = computed(() => quiz?.questions[currentQuestionIndex.value])
  const quizLength = computed(() => quiz?.questions.length || 0)
  const quizState = computed(() => `${currentQuestionIndex.value}/${quizLength.value}`)
  const completionProcent = computed(() => (currentQuestionIndex.value / quizLength.value) * 100)
  const quizOver = computed(() => currentQuestionIndex.value >= quizLength.value)
  const correctAnswers = ref(0)

  const optionSelectedHandler = (isCorrect: boolean) => {
    if (isCorrect) {
      correctAnswers.value += 1
    }

    if (currentQuestionIndex.value === quizLength.value) return
    currentQuestionIndex.value += 1
  }

</script>

<template>
  <div class="quiz-container">
    <QuizHeader :quizState="quizState" :completionProcent="completionProcent"/>
    <Question v-if="currentQuestion && !quizOver" :question="currentQuestion" @selectOption="optionSelectedHandler"/>
    <QuizResult v-else :quizLength="quizLength" :correctAnswers="correctAnswers" />
  </div>
</template>


<style scoped>

  .quiz-container {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

</style>