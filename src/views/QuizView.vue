<script lang="ts" setup>
  import { useRoute } from "vue-router";
  import Question from "@/components/Question.vue"
  import QuizHeader from "@/components/QuizHeader.vue"
  import quizData from "@/assets/data.json"
  import { ref, computed } from "vue";

  const route = useRoute()
  const quizId = route.params.quizId as string

  const currentQuestionIndex = ref(0)
  const quiz = quizData.find(quiz => quiz.id === parseInt(quizId))
  const currentQuestion = computed(() => quiz?.questions[currentQuestionIndex.value])
  const quizState = computed(() => `${currentQuestionIndex.value + 1}/${quiz?.questions.length}`)
  const completionProcent = computed(() => (currentQuestionIndex.value / (quiz?.questions?.length || 1)) * 100)
  const correctAnswers = ref(0)

  const optionSelectedHandler = (isCorrect: boolean) => {
    if (isCorrect) {
      correctAnswers.value += 1
    }
    currentQuestionIndex.value += 1
  }

</script>

<template>
  <div v-if="quiz" class="quiz-container">
    <QuizHeader :quizState="quizState" :completionProcent="completionProcent"/>
    <Question v-if="currentQuestion" :question="currentQuestion" @selectOption="optionSelectedHandler"/>
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