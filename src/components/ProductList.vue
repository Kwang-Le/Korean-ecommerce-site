<script setup>
import ProductCard from './ProductCard.vue';
import NavBar from './NavBar.vue';


</script>

<script>
export default {
    data() {
        return {
            productsList: [{title: "umbrella", price: "37,900"}],
            path: this.$route.path
        }
    },
    props: {
        productsToDisplay: Object,
    },
}
</script>

<template>
    <NavBar v-if="path === '/products'"></NavBar>
    <div class="container">
        <div class="row">
            <!-- <div v-for="product in this.productsToDisplay" class="col-md-3 col-6 my-2">
                <ProductCard :productTitle="product.title ? product.title : 'N/A'" :price="product.price"></ProductCard>
            </div> -->
            <div class="col-md-3 col-6 my-2">
                <ProductCard :productTitle="'umbrella'" :price="'37,900'"></ProductCard>
            </div>
        </div>
    </div>
</template>