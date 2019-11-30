<template>
  <aside class="basket">
    <h5>Total: {{total}}</h5>
    <div :key="item.id" v-for="item in basketItems">
      <p class="mb-0">{{item.quantity}} x {{item.name}} {{item.subtotal | currency}}</p>
      <p :key="index" v-for="(attr, index) in item.displayAttrs" class="mb-0">{{attr}}</p>
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
          console.log("before",tempString);
          tempString = tempString.slice(0,-2) + ')';
          console.log("after",tempString);
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
}
</script>

<style scoped lang="scss">
</style>