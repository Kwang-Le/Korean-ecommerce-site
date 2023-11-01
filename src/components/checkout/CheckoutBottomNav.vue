<script>
export default {
    data() {
        return {
            price: [37900, 55900, 71900],
        }
    },
    props: {
        quantity: Number,
    },
    methods: {
        getPrice() {
            if (this.$props.quantity == 1){
                return this.$data.price[0]
            } else if (this.$props.quantity == 2){
                return this.$data.price[1]
            } else if (this.$props.quantity == 3){
                return this.$data.price[2]
            }
        }
    }
}

</script>

<template>
    <div class="bottom-nav fixed-bottom nav d-flex justify-content-center align-items-center">
        <div class="service-btn col-3 ">
            <h3 style="color: red;margin-left: 4px;">₩ {{ getPrice().toLocaleString() }}</h3>
        </div>
        <div class="order-track-btn col-3 d-flex justify-content-end ">
            <p style="font-size: 14px;margin-right: 8px;">총 {{ quantity }} 개</p>
        </div>
        <router-link to="/checkout-detail" class="buy-btn col-6 d-flex align-items-center justify-content-center">
            <p style="font-size: 16px;font-weight: normal;">구매하기</p>
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
    background-color: #ec4f2a;
    border-radius: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 55px;
}
p {
    margin-bottom: 0;
}
</style>