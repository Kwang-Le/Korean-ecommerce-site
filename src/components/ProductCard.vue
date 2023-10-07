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
        <a href="/products">
            <img src="https://picsum.photos/seed/picsum/209/209" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ productTitle }}</h5>
                <h2 class="card-content">$ {{ price }}</h2>
            </div>
        </a>
    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
</style>
