<template>
  <div id="app">
    <section>
      Info
    </section>    
    <FoodItem :key="food.id" v-for="food in foods" :food="food"/>
    <Basket />      
  </div>
</template>

<script>
import FoodItem from './components/FoodItem'
import Basket from './components/Basket'
import { foods } from './data';

export default {
  name: 'app',
  components: {
    FoodItem, Basket
  },
  data(){
    return {
      foods: foods
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
