<script setup>

</script>
<template>
<div class="bottom-nav fixed-bottom nav d-flex justify-content-center align-items-center">
    <div class="service-btn col-2 d-flex justify-content-center flex-column align-items-center ">
        <i class="bi bi-chat-dots"></i>
        <p>서비스센터</p>
    </div>
    <div class="order-track-btn col-2 d-flex justify-content-center flex-column align-items-center ">
        <i class="bi bi-file-text"></i>
        <p>주문 조회</p>
    </div>
    <router-link to="/checkout-detail" class="buy-btn col-8 d-flex align-items-center justify-content-center">
        <p >즉시구매</p>
    </router-link>
</div>
</template>

<style scoped>
.bottom-nav {
    padding: 3px 0;
    margin: auto;
    max-width: 640px;
    background: white;
    box-shadow: 0 -5px 5px -5px rgba(0,0,0,.3);
    cursor: pointer;
}
.buy-btn {
    background: -webkit-linear-gradient(left,#FE7144,#FD4969);
    border-radius: 45px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 55px;
}
</style>