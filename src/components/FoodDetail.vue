<template>
  <b-modal :id="'food'+food.id+'detail-modal'" :ref="'food'+food.id+'detail-modal'" hide-header hide-footer>
    <figure class="m-0">
      <img class="w-100" :src="imageUrl" alt="food.name+' image'"/>
      <figcaption>
        <h3 class="my-2">{{food.name}}</h3>
        <p>{{food.desc}}</p>
      </figcaption>
    </figure>
    <b-form @submit="addToBasket" inline>
     

      <div class="col-12 mt-3">
        <div class="row justify-content-between">
          <b-button variant="outline-secondary" @click="hideModal">Cancel</b-button>
          <b-button type="submit" variant="primary">Add to Order</b-button>
        </div>
      </div>
    </b-form>
    
  </b-modal>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'FoodDetail',
  props: ['food'],
  data: function(){
    return{
      form:{
        quantity: 1
      }
    }
  },
  computed:{
    imageUrl: function(){
      //need to be partial expression concat
      return require('@/assets/'+this.food.image)
    }
  },
  methods:{
    ...mapActions(['addFood']),
    addToBasket(){
      var item = {
        id: 2,
        name: "Coffee",
        price: 40,
        quantity: 10,
        attrs:[
          {
            name: {
              key: "temp",
              value: "Temperature"
            },
            options: [{
              key: "hot",
              value: "Hot"
            }]
          }
        ]
      }
      this.addFood(item);
    },
    hideModal() {
      this.$refs['food'+this.food.id+'detail-modal'].hide()
    },
  }

}
</script>

<style scoped lang="scss">
button{
  width: 48%;
}
</style>