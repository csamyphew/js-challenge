<template>
  <b-modal :id="'food'+food.id+'detail-modal'" :ref="'food'+food.id+'detail-modal'" hide-footer title="Using Component Methods">
    <div class="d-block text-center">
      <h3>Hello {{food.name}}</h3>
    </div>
    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    <b-button variant="danger" @click="addToBasket">Button</b-button>
  </b-modal>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'FoodDetail',
  props: ['food'],
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
</style>