<script setup>
import CheckoutAddressForm from './CheckoutAddressForm.vue';
import CheckoutProductOptions from './CheckoutProductOptions.vue'; 
import CheckoutCartList from './CheckoutCartList.vue';
import CheckoutBilling from './CheckoutBilling.vue'
import CheckoutPayment from './CheckoutPayment.vue'
import CheckoutBottomNav from './CheckoutBottomNav.vue';
</script>
<template>
    <form action="" class="d-flex flex-column align-items-center">
        <div class="card">
            <div class="card-body">
                <div class="product-detail d-flex flex-row">
                    <img class="pro-img"
                        src="../../../public/umbrella-product/slider_2.jpg" alt="">
                    <div class="pro-info">
                        <div class="title ">남성 배기핏 면 마 바지</div>
                        <div class="product-price"><span>₩37,900</span><del class="old-price">₩75,800</del></div>
                    </div>
                </div>
                <div class="description">프리미엄 면 마 혼방 원단으로 최고의 착용감 제공, 배기핏으로 다리라인 수식에 탁월합니다! 지금 추가 구매시 ₩9,900! </div>
            </div>
        </div>
        <CheckoutProductOptions></CheckoutProductOptions>
        <CheckoutAddressForm></CheckoutAddressForm>
        <CheckoutCartList></CheckoutCartList>
        <CheckoutBilling></CheckoutBilling>
        <CheckoutPayment></CheckoutPayment>
        <div class="spacing" style="height: 100px">

        </div>
        <CheckoutBottomNav></CheckoutBottomNav>
    </form>
</template>

<style>
.product-detail .pro-img {
    height: 60px;
    width: 60px;
}

.card-body {
    max-width: 640px;
}

.description {
    max-width: 640px;
    padding: 10px 0px;
    margin-bottom: 8px;
    color: #D20000;
    font-size: 14px;
    line-height: 22px;
}
</style>