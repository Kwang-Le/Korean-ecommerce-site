<script setup>
import ProductCard from './ProductCard.vue';


</script>

<script>
export default {
    data() {
        return {
            productsList: [{title: "umbrella", price: "37,900"}]
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
            <!-- <div v-for="product in this.productsToDisplay" class="col-md-3 col-6 my-2">
                <ProductCard :productTitle="product.title ? product.title : 'N/A'" :price="product.price"></ProductCard>
            </div> -->
            <div v-for="product in this.productsList" class="col-md-3 col-6 my-2">
                <ProductCard :productTitle="product.title ? product.title : 'N/A'" :price="product.price"></ProductCard>
            </div>
        </div>
    </div>
</template>