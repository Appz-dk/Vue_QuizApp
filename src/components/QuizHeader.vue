<script lang="ts" setup>

  const { quizState } = defineProps({
    quizState: {
      required: true,
      type: String
    },
    completionProcent: {
      required: true,
      type: Number
    }
  })

</script>

<template>
  <header>
    <h4>Questions {{ quizState }}</h4>
    <div class="bar">
      <div class="completion" :style="{width: `${completionProcent}%`}"></div>
    </div>
  </header>
</template>

<style>
  header h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
  }

  .completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
  } 
</style>