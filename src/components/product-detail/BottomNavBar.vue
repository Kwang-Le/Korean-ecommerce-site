<script setup>
import TopFixedBar from '../TopFixedBar.vue';


</script>
<script>
export default {
    methods: {
        activateMess() {
            FB.CustomerChat.show()
        }
    }
}
</script>
<template>
<div class="bottom-nav fixed-bottom nav d-flex justify-content-center align-items-center">
    <div class="service-btn col-3 d-flex justify-content-center flex-column align-items-center " @click="activateMess">
        <i class="bi bi-chat-dots"></i>
        <p>서비스센터</p>
    </div>
    <router-link to="/check-order" class="order-track-btn col-3 d-flex justify-content-center flex-column align-items-center ">
        <i class="bi bi-file-text"></i>
        <p>주문 조회</p>
    </router-link>
    <router-link to="/checkout-detail" class="buy-btn col-6 d-flex align-items-center justify-content-center">
        <p ><i class="bi bi-cart" style="transform: scaleX(-1);"></i>즉시구매</p>
    </router-link>
</div>
</template>

<style scoped>
@media only screen and (max-width: 640px) {
    .order-track-btn {
        font-size: 17px;
    }
    .service-btn {
        font-size: 17px;
    }
}
.bottom-nav {
    padding: 3px 0;
    margin: auto;
    max-width: 640px;
    background: white;
    box-shadow: 0 -5px 5px -5px rgba(0,0,0,.3);
    cursor: pointer;
}
.buy-btn {
    background: red;
    border-radius: 45px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 55px;
}
p {
    margin-bottom: 0;
}
</style>