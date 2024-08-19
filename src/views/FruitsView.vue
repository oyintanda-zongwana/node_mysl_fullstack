<template>
    <div>
        <h1>Fruits view</h1>
        <section v-for="fruit in $store.state.fruits" :key="fruit.id">
            <div><br>
              <h4>id: {{ fruit.id }}</h4>  
               <h4>name: {{ fruit.fruit_name }}</h4> 
               <h4>weight: {{ fruit.weight }}</h4>
               <h4>amount: {{ fruit.amount }}</h4> 
            </div><br>
            <button v-if="$cookies.get('token')" @click="addToCart(fruit.id)">Purchase {{ fruit.fruit_name }}</button>
        </section>
    </div>

</template>
<script>
export default {
    methods: {
        getFruits(){
            this.$store.dispatch('getFruits')
        }, 
        addToCart (fruit_id){
            this.$store.dispatch('addToCart', fruit_id)
        }
    },
    mounted() {
            this.getFruits()
    }
}
</script>
<style>
    
</style>