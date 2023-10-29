<script lang="ts" setup>
  import Question from "@/components/Question.vue"
  import QuizHeader from "@/components/QuizHeader.vue"

</script>

<template>
  <div class="quiz-container">
    <QuizHeader />
    <div>
      <Question />
    </div>
  </div>
</template>


<style scoped>

  .quiz-container {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

</style>