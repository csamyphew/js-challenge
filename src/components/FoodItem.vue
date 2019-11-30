<template>
  <div class="food-item">
    <h2>{{food.name}}</h2>
    <img :src="require('@/assets/'+food.image)" />
    <b-button v-b-modal="'food'+food.id+'detail-modal'">Show {{food.name}} Modal</b-button>
    <FoodDetail :food="food"/>
  </div>
</template>
<script>
import FoodDetail from './FoodDetail'

export default {
  name: 'FoodItem',
  props: ['food'],
  components: { FoodDetail }
}
</script>

<style scoped lang="scss">
</style>