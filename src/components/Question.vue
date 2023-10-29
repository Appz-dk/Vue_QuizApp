<template>
  <div class="question-container">
      <h1>What color is the sun ?</h1>
  </div>
  <div class="options-container">
    <div class="option" role="option">
      <p class="option-label">A</p>
      <div class="option-value">
        <p>Yellow</p>
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