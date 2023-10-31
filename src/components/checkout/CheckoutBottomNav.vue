<script>
export default {
    props: {
        quantity: Number,
    }
}

</script>

<template>
    <div class="bottom-nav fixed-bottom nav d-flex justify-content-center align-items-center">
        <div class="service-btn col-3 ">
            <h3 style="color: red;">₩ {{ (37900 * quantity).toLocaleString() }}</h3>
        </div>
        <div class="order-track-btn col-3 d-flex justify-content-end ">
            <h3>총 {{ quantity }} 개</h3>
        </div>
        <router-link to="/checkout-detail" class="buy-btn col-6 d-flex align-items-center justify-content-center">
            <p>구매하기</p>
        </router-link>
    </div>
</template>

<style scoped>
.bottom-nav {
    padding: 3px 0;
    margin: auto;
    max-width: 640px;
    background: white;
    box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, .3);
    cursor: pointer;
}

.buy-btn {
    background: -webkit-linear-gradient(left, #FE7144, #FD4969);
    border-radius: 45px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 55px;
}
</style>