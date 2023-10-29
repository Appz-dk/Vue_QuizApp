<script lang="ts" setup>
import type { TQuestion } from '@/types/types';
import type { PropType } from 'vue';

  const emit = defineEmits<{
    (event: "selectOption", correct: boolean): void
  }>()
  
  const { question } = defineProps({
    question: {
      required: true,
      type: Object as PropType<TQuestion>
    }
  })

  const optionSelectedHandler = (isCorrect: boolean) => {
    emit("selectOption", isCorrect)
  }
</script>

<template>
  <div class="question-container">
      <h1>{{ question.text }}</h1>
  </div>
  <div class="options-container">
    <div 
    class="option" 
    role="option" 
    v-for="option in question.options" :key="option.id" 
    @click="optionSelectedHandler(option.isCorrect)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .question-container h1 {
    font-size: 2.5rem;
  }

  .option {
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;
    margin-bottom: 1.75rem;
  }

  .option-label {
    width: 40px;
    aspect-ratio: 1;
    background-color: bisque;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
  }
  .option-value {
    width: 100%;
    height: 40px;
    padding: 0 .5rem;
    background-color: #eee; 
    font-size: 1.5rem;
  }
</style>