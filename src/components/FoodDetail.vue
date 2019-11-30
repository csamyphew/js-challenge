<template>
  <b-modal :id="'food'+food.id+'detail-modal'" :ref="'food'+food.id+'detail-modal'" hide-header hide-footer>
    <figure class="m-0">
      <img class="w-100" :src="imageUrl" alt="food.name+' image'"/>
      <figcaption>
        <div class="row justify-content-between align-items-center my-2">
          <h3 class="col">{{food.name}}</h3>
          <h5 class="col text-right">{{food.price | currency}}</h5>
        </div>
        <p>{{food.desc}}</p>
      </figcaption>
    </figure>
    <b-form @submit="addToBasket">
      <b-form-group id="input-group-1" label="Qty" label-for="input-1">
        <b-form-input id="input-1" v-model="form.quantity" required type="number" min="1" step="1" />
      </b-form-group>
      <b-form-group :id="'input-group-'+index+1" :key="index" v-for="(item,index) in this.attrOptions" :label="item.title.text">
        <b-form-checkbox-group  v-if="item.multiple" :required="item.mandatory"
          v-model="form.attrs[index]['options']" :options="item.inputOptions" :name="'input-group-'+index+1">
        </b-form-checkbox-group>
        <b-form-radio-group v-else :required="item.mandatory"
          v-model="form.attrs[index]['options'][0]" :options="item.inputOptions" :name="'input-group-'+index+1">
        </b-form-radio-group>
      </b-form-group>

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
      form: this.initialistForm()
    }
  },
  computed:{
    imageUrl: function(){
      //need to be partial expression concat
      return require('@/assets/'+this.food.image)
    },
    attrOptions: function(){
      return this.food.attr.map((item)=>{
        var inputOptions = item.item.map((option)=>{
          return{
            value: option,
            text: option.text
          }
        });
        return {
          ...item,
          inputOptions: inputOptions
        }
      });
    }
  },
  methods:{
    ...mapActions(['addFood']),
    addToBasket(evt){
      evt.preventDefault()
      console.log(JSON.stringify(this.form));
      var item = {
        id: this.food.id,
        name: this.food.name,
        price: this.food.price,
        quantity: this.form.quantity,
        attrs: this.form.attrs
      }
      this.addFood(item);
      this.hideModal();
      this.form = this.initialistForm();
    },
    hideModal() {
      this.$refs['food'+this.food.id+'detail-modal'].hide()
    },
    initialistForm(){
      var form = { quantity: 1, attrs: [] };
      this.food.attr.forEach((item,index)=>{
        if(item.multiple){
          form.attrs.push({
            name: item.title,
            options: []
          });
        }else{
          form.attrs.push({
            name: item.title,
            options: ['']
          });
        }
      })
      return form;
    }
  }

}
</script>

<style lang="scss">
*:focus{
  outline: none;
}
form{
  button{
    width: 48%;
  }
  label{
    padding-right: 10px;
  }
}

</style>