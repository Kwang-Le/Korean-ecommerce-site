<script setup>
import CheckoutAddressForm from './CheckoutAddressForm.vue';
import CheckoutProductOptions from './CheckoutProductOptions.vue';
import CheckoutCartList from './CheckoutCartList.vue';
import CheckoutBilling from './CheckoutBilling.vue'
import CheckoutPayment from './CheckoutPayment.vue'
import CheckoutBottomNav from './CheckoutBottomNav.vue';
import TopFixedBar from '../TopFixedBar.vue';
import Timer from './Timer.vue';
</script>


<script>
export default {
        data() {
            return {
                chosenQuantity: 1,
                self: this,
            }
        },
        methods: {
            setQuantity(quantity, self) {
                self.chosenQuantity = quantity
                console.log(self.chosenQuantity)
            }
        }
}

</script>
<template>
    <TopFixedBar></TopFixedBar>
    <div class="spacing" style="height: 30px;"></div>
    <form action="" class="d-flex flex-column align-items-center">
        <div class="card">
            <div class="card-body">
                <Timer></Timer>
                <div class="product-detail d-flex flex-row">
                    <img class="pro-img" src="../../../public/umbrella-product/slider_2.jpg" alt="">
                    <div class="pro-info">
                        <div class="title ">남성 배기핏 면 마 바지</div>
                    </div>
                </div>
                <div class="description">프리미엄 면 마 혼방 원단으로 최고의 착용감 제공, 배기핏으로 다리라인 수식에 탁월합니다! 지금 추가 구매시 ₩9,900! </div>
                <div class="addcart-group-buttons">
                    <button @click="setQuantity(1, self)" :class="self.chosenQuantity == 1 ? 'active' : ''" class="btn-binding" type="button">1 개 ₩39,900</button>
                    <button @click="setQuantity(2, self)" :class="self.chosenQuantity == 2 ? 'active' : ''" class="btn-binding" type="button">2 개 ₩55,900</button>
                    <button @click="setQuantity(3, self)" :class="self.chosenQuantity == 3 ? 'active' : ''" class="btn-binding" type="button">3 개 ₩71,900</button>
                </div>
            </div>
        </div>
        <CheckoutProductOptions :quantity="chosenQuantity" :cartList="[null*chosenQuantity]"></CheckoutProductOptions>
        <CheckoutAddressForm></CheckoutAddressForm>
        <CheckoutCartList :quantity="chosenQuantity"></CheckoutCartList>
        <CheckoutBilling :quantity="chosenQuantity"></CheckoutBilling>
        <CheckoutPayment ></CheckoutPayment>
        <div class="spacing" style="height: 100px">

        </div>
        <CheckoutBottomNav :quantity="chosenQuantity"></CheckoutBottomNav>
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

.addcart-group-buttons .btn-binding {
    display: block;
    width: 100%;
    border-radius: 50px;
    margin: 10px auto;
    border: 1px solid #bbb;
    background: #eee;
    position: relative;
}

.addcart-group-buttons .btn-binding.active {
    background: #e94820;
    border-color: #e94820;
    color: #fff;
}
</style>