<script setup>
import ProductCard from './ProductCard.vue';


</script>

<script>
export default {
    data() {
        return {
            productsList: [{name: "iphone 10", price: "1000"}, {name: "iphone 11", price: "1500"}, {name: "iphone 12", price: "2000"}, {name: "iphone 15", price: "3000"}]
        }
    },
    props: {
        productsToDisplay: null,
    },
    mounted() {
        console.log(this.productsToDisplay)
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="product in this.productsToDisplay" class="col-md-3 col-6 my-2">
                <ProductCard :productTitle="product.title ? product.title : 'N/A'" :price="product.price"></ProductCard>
            </div>
        </div>
    </div>
</template>