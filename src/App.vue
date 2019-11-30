<template>
  <div id="app" class="container">
    <div class="row">
      <section class="col-12 col-sm-8 col-md-8 col-lg-9">
        <h1>Restaurant App</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="row">
          <FoodItem :key="food.id" v-for="food in foods" :food="food"/>
        </div>
      </section>    
      <Basket class="col-12 col-sm-4 col-md-4 col-lg-3"/>      
    </div>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
