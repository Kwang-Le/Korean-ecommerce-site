<template>
    <div class="wrapper-billing">
        <div class="card">
            <div class="card-body">
                <h5><span><i class="bi bi-receipt"></i></span>주문내역</h5>
                <div class="coupon">
                    <p>할인 코드</p>
                    <div class="mb-3 d-flex">
                        <input type="text" class="form-control coupon-input" placeholder="정확한 할인 코드 입력주세요.">
                        <input class="coupon-btn btn" type="button" value="확인">
                    </div>
                </div>

            </div>
            <div class="divider"></div>
            <div class="card-body">
                <div class="cart-toatal-item d-flex justify-content-between">
                    <span>수량：</span>
                    <span>1</span>
                </div>
                <div class="cart-toatal-item d-flex justify-content-between">
                    <span>합계금액： </span>
                    <span class="checkout-total">₩37,900</span>
                </div>
                <div class="cart-toatal-item d-flex justify-content-between">
                    <span>행사 할인：</span>
                    <span class="text-danger">-<span class="checkout-discount">₩0</span></span>
                </div>
                <div class="cart-toatal-item d-flex justify-content-between">
                    <span>운송비：</span>
                    <span>₩0</span>
                </div>
                <div class="cart-toatal-item d-flex justify-content-between discount-code">
                    <span>할인 코드：</span>
                    <span class="text-danger">₩ 0</span>
                </div>
                <div class="cart-toatal-item d-flex justify-content-between last-child">
                    <span>결제금액:</span>
                    <span class="text-danger checkout-amount">₩37,900</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.divider {
    height: 1px;
    width: auto;
    background-color: lightgray;
}

.coupon-input {
    margin-right: 10px;
}

.coupon-btn {
    background-color: #F51111;
    color: #fff !important;
}

.wrapper-billing {
    width: 640px;
}

@media only screen and (max-width: 640px) {
    .wrapper-billing {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}
</style>