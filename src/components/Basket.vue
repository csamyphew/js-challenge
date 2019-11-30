<template>
  <aside class="text-center">
    <div class="basket py-4">
      <h4 class="mb-3">Your Basket</h4>
      <ul>
        <li :key="item.id" v-for="item in basketItems" class="my-3">
          <p class="mb-0">{{item.quantity}} x {{item.name}} {{item.subtotal | currency}}</p>
          <p :key="index" v-for="(attr, index) in item.displayAttrs" class="mb-0">{{attr}}</p>
        </li>
      </ul>
      <h5 class="my-3">Total: {{total}}</h5>
      <b-button :disabled="allBaskets.length==0" @click="checkout" 
                class="col-12" variant="primary">Checkout</b-button>
    </div>
  </aside>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Basket',
  computed: {
    ...mapGetters(['allBaskets', 'total']),
    basketItems: function(){
      return this.allBaskets.map((item)=>{
        var displayAttrs = item.attrs.map((attr)=>{
          var tempString = "(" + attr.name.value + ": ";
          attr.options.forEach((option)=>{
            tempString += option.value + ", ";
          });
          tempString = tempString.slice(0,-2) + ')';
          return tempString;
        })
        return {
          name: item.name,
          subtotal: item.price * item.quantity,
          quantity: item.quantity,
          displayAttrs: displayAttrs
        }
      })
    }
  },
  methods:{
    checkout(){
      console.log(this.allBaskets);
    }
  }
}
</script>

<style scoped lang="scss">
aside{
  height: 100%;
}
.basket{
  background-color: #efefef;
  border-radius: 5px;
}
button:disabled{
  cursor: unset;
}
ul{
  list-style-type: none;
  padding: 0;
}
</style>