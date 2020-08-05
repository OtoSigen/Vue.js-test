<template>
  <div class="container">
    <div class="range__container">
      <p class="range__value">{{ rangeValue }} %</p>
      <label>
        <input
          class="range__input"
          type="range"
          min="0"
          max="100"
          step="0.1"
          v-model.number="rangeValue"
        />
      </label>
    </div>
    <div class="range__button-container">
      <button class="range__button" v-on:click="rangeValue = 25">25%</button>
      <button class="range__button" v-on:click="rangeValue = 50">50%</button>
      <button class="range__button" v-on:click="rangeValue = 75">75%</button>
      <button class="range__button" v-on:click="rangeValue = 100">100%</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rangeValue: 0,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 400px;
  margin: auto auto 100px;
  background-color: #212840;
  border-radius: 15px;
}

.range__container {
  width: 90%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: auto;
}

.range__value {
  align-self: flex-start;
  color: #fff;
  opacity: 0.5;
}

.range__input {
  -webkit-appearance: none;
  height: 30px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 15px;
  background: linear-gradient(to right, #03dfc9, #ffae51 70%, #ff6961);
}

.range__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 23px;
  width: 23px;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;
}

.range__input::-moz-range-thumb {
  -webkit-appearance: none;
  height: 23px;
  width: 23px;
  border-radius: 50px;
  background: #fff;
  cursor: pointer;
  border: none;
}

.range__input:focus {
  outline: none;
}

.range__button {
  width: 50px;
  padding: 5px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: #50618f;
  color: #fff;
  font-weight: bold;
  margin: 5px 5px 15px;
}

.range__button:focus {
  outline: none;
  background-color: #1d51d8;
}
</style>
