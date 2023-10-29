<script setup lang="ts">
  import qData from "@/assets/data.json"
  import { ref, watch } from "vue"
  import Card from "../components/Card.vue"
  
  const quizes = ref(qData) 
  const searchStr = ref("")

  watch(searchStr, () => {
    quizes.value = qData.filter(q => q.name.toLowerCase().includes(searchStr.value.toLowerCase()))
  })

</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="searchStr" type="text" placeholder="Search..."/>
    </header>
    <main>
      <div class="quiz-container">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
      </div>
    </main>
  </div>
</template>

<!-- Have to add lang="postcss" for no errors even though native css supports nesting -->
<style lang="postcss" scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 4rem
  }

  header {
    display: flex;
    align-items: center;
    gap: 1rem;

    & input {
      border-radius: 8px;
      padding: 8px;
      background-color: #eee;
      border: none;
    }
  }

  .quiz-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;    
    margin-top: 2rem;
  }

</style>
