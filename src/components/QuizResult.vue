<script lang="ts" setup>
  import { useRouter } from "vue-router"

  const props = defineProps({
    quizLength: {
      required: true,
      type: Number
    },
    correctAnswers: {
      required: true,
      type: Number
    }
  })

  const router = useRouter()
  const navigateToQuizes = () => {
    router.push("/")
  }
</script>

<template>
  <div class="results">
    <h1>Quiz over!</h1>
    <p>{{ `You got ${props.correctAnswers} out of ${props.quizLength} questions correct` }}</p>
    <button @click="navigateToQuizes">Back to quizes</button>
  </div>
</template>

<style scoped>
  .results {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }

  h1 {
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    padding: .25rem .75rem;
    border-radius: 8px;
    border: none;
    background-color: bisque;
    font-size: 1rem;
  }

  button:hover {
    outline: 1px solid black;
  }
</style>