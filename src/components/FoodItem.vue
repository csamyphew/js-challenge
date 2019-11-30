<template>
  <div class="food-item col-12 col-md-6 col-lg-4">
    <b-card 
      :title="food.name" :sub-title="food.price|currency" tag="article" class="mb-2"
      :img-src="imageUrl" :img-alt="food.name+' image'" img-top
    >
      <b-card-text>{{food.desc}}</b-card-text>
      <b-button v-b-modal="'food'+food.id+'detail-modal'" class="w-100">Add to Order</b-button>
    </b-card>
    <FoodDetail :food="food"/>
  </div>
</template>
<script>
import FoodDetail from './FoodDetail'

export default {
  name: 'FoodItem',
  props: ['food'],
  components: { FoodDetail },
  computed:{
    title: function(){
      return this.food.name + this.food.price | currency
    },
    imageUrl: function(){
      //need to be partial expression concat
      return require('@/assets/'+this.food.image)
    }
  }
}
</script>