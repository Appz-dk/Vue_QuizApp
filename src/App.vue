<script setup lang="ts">
  import qData from "@/assets/data.json"
  import { ref, watch } from "vue"

  const quizes = ref(qData)
  const searchStr = ref("")

  watch(searchStr, () => {
    quizes.value = qData.filter(q => q.name.toLowerCase().includes(searchStr.value.toLowerCase()))
  })

</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="searchStr" type="text" placeholder="Search..."/>
    </header>
    <main>
      <div class="quiz-container">
        <div v-for="quiz in quizes" :key="quiz.id" class="quiz-card">
          <img :src="quiz.img"/>
          <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
          </div>
        </div>
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

  /* Card styling */

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
