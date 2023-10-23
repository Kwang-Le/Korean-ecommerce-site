<template>
    <div class="wrapper-payment">
        <div class="card">
            <div class="card-body">
                <h5><span><i class="bi bi-credit-card"></i></span>결제방식</h5>
                <div class="form-check payment-option">
                    <input class="form-check-input" type="radio" name="payment-option-preferred" id="naverpay-option">
                    <label class="form-check-label d-flex justify-content-between" for="naverpay-option">
                        NaverPay
                        <img class="card-img" src="https://pic.compgoo.com/uploads/5269c5f0887cd3694de5867530a59b86.png?_t=1697822484&_s=59da691606924707b1d4b82bdd47b413&_token=103cecea93c0b367d8be7fe03cc0f585&_e=10&_c=1f3d7dbe31b3207b80258c5088c109a7"
                            alt="">
                    </label>
                </div>
                <div class="form-check payment-option">
                    <input class="form-check-input" type="radio" name="payment-option-preferred" id="samsungpay-option">
                    <label class="form-check-label d-flex justify-content-between" for="samsungpay-option">
                        SamsungPay
                        <img class="card-img" src="https://pic.compgoo.com/uploads/c197e0e5eb948a9e6514386c49bdc72d.png?_t=1697822484&_s=ef7ba4002567a125d9b86030c1c2e7a3&_token=103cecea93c0b367d8be7fe03cc0f585&_e=10&_c=1ae40b1e2d5fff93773e8a7d6d0b9fdf" alt="">
                    </label>
                </div>
                <div class="form-check payment-option">
                    <input class="form-check-input" type="radio" name="payment-option-preferred" id="creditcard-option">
                    <label class="form-check-label d-flex justify-content-between" for="creditcard-option">
                        카드 결제
                        <img class="card-img" src="https://pic.compgoo.com/uploads/d4ec2a4354cc3a5c011d379651490eb5.jpg?_t=1697822484&_s=c90f32c7906b6396d109591e23788f3c&_token=103cecea93c0b367d8be7fe03cc0f585&_e=10&_c=f478fd042849dbb750c7ab83b719bee5" alt="">
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.payment-option {
    border-bottom: 1px solid #f3f4f6;
    margin: 15px;
    height: 40px;
}
.card-img {
    width: 100px;
}
.wrapper-payment {
    width: 640px;
}

@media only screen and (max-width: 640px) {
    .wrapper-payment {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}
</style>