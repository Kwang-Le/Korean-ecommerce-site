<script>
export default {
    props: {
        productTitle: String,
        price: Number
    }
}
</script>

<template>
    <div class="card">
        <router-link to="/product-detail">
            <img src="../../public/umbrella-product/slider_2.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ productTitle }}</h5>
                <h2 class="card-content">$ {{ price }}</h2>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
</style>
