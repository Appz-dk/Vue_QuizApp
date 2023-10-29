<script setup lang="ts">
  import type { TQuiz } from "@/types/types";
  import { defineProps, type PropType } from "vue"
  import { useRouter } from "vue-router"

  const { quiz } = defineProps({
    quiz: {
      required: true,
      type: Object as PropType<TQuiz>
    }
  })

  const router = useRouter()
</script>

<template>
  <div class="quiz-card" @click="router.push(`/quizes/${quiz.id}`)">
    <img :src="quiz.img" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style lang="postcss">

.quiz-card {
    width: 300px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    cursor: pointer;

    & img {
      display: block;
      width: 100%;
      height: 200px;
      margin: 0;
    }

    & .card-text {
      padding: .5rem 1rem
    }

    & p, h2 {
      margin-block: .5rem;
    }
  }

</style>