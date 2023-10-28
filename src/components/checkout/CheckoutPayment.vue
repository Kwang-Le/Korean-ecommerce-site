<template>
    <div class="wrapper-payment">
        <div class="card">
            <div class="card-body">
                <h5><span><i class="bi bi-credit-card"></i></span>결제방식</h5>
                <div class="form-check payment-option">
                    <input class="form-check-input" type="radio" name="payment-option-preferred" id="kakaopay-option">
                    <label class="form-check-label d-flex justify-content-between" for="kakaopay-option">
                        KakaoPay
                        <img class="card-img"
                            src="https://pic.compgoo.com/uploads/d6108a2fbc913bdf635b7c920c7eea3d.png?_t=1698328541&_s=5b59a3702505de9b14b4c943e6b67b8d&_token=f575a3cda890d2e0c4a0e26d74820e01&_e=10&_c=e838d4f706ff083a5a507ef88d454901"
                            alt="">
                    </label>
                </div>
                <div class="form-check payment-option">
                    <input class="form-check-input" type="radio" name="payment-option-preferred" id="naverpay-option">
                    <label class="form-check-label d-flex justify-content-between" for="naverpay-option">
                        NaverPay
                        <img class="card-img"
                            src="https://pic.compgoo.com/uploads/5269c5f0887cd3694de5867530a59b86.png?_t=1697822484&_s=59da691606924707b1d4b82bdd47b413&_token=103cecea93c0b367d8be7fe03cc0f585&_e=10&_c=1f3d7dbe31b3207b80258c5088c109a7"
                            alt="">
                    </label>
                </div>
                <div class="form-check payment-option">
                    <input class="form-check-input" type="radio" name="payment-option-preferred" id="samsungpay-option">
                    <label class="form-check-label d-flex justify-content-between" for="samsungpay-option">
                        SamsungPay
                        <img class="card-img"
                            src="https://pic.compgoo.com/uploads/c197e0e5eb948a9e6514386c49bdc72d.png?_t=1697822484&_s=ef7ba4002567a125d9b86030c1c2e7a3&_token=103cecea93c0b367d8be7fe03cc0f585&_e=10&_c=1ae40b1e2d5fff93773e8a7d6d0b9fdf"
                            alt="">
                    </label>
                </div>
                <div class="form-check payment-option">
                    <input class="form-check-input" type="radio" name="payment-option-preferred" id="creditcard-option">
                    <label class="form-check-label d-flex justify-content-between" for="creditcard-option">
                        카드 결제
                        <img class="card-img"
                            src="https://pic.compgoo.com/uploads/d4ec2a4354cc3a5c011d379651490eb5.jpg?_t=1697822484&_s=c90f32c7906b6396d109591e23788f3c&_token=103cecea93c0b367d8be7fe03cc0f585&_e=10&_c=f478fd042849dbb750c7ab83b719bee5"
                            alt="">
                    </label>
                </div>

                <div class="pay-bottom-serive">
                    <svg t="1690975634237" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="18199" width="200" height="200">
                        <path
                            d="M771.2 375l-275 266.3c-1.9 2.9-3.8 5.8-6.7 7.7-7.7 7.7-18.2 11.5-28.7 11.5-10.6 0-21.1-3.8-29.7-11.5-1.9-1.9-4.8-4.8-5.8-7.7L277.7 498.6c-15.3-15.3-15.3-39.3 0-54.6 15.3-15.4 41.2-15.4 56.5 0l126.5 121.7 253.9-245.3c16.3-15.3 41.2-15.3 56.5 0 16.4 14.4 16.4 39.3 0.1 54.6z m147.6-227.1c-12.5-11.5-28.8-17.3-45-17.3H869c-1 0-11.5 1-27.8 1-27.8 0-80.5-1.9-131.3-14.4-65.2-15.3-140.9-87.1-163-101.5-10.5-6.7-24-10.5-36.4-10.5S485.6 9 474.1 15.7C471.3 17.6 392.7 99 316 117.2c-50.8 12.4-105.4 14.4-132.2 14.4-17.3 0-27.8-1-28.7-1h-3.8c-17.3 0-32.6 5.8-45 17.3-13.4 11.5-21.1 28.7-21.1 46v159c0 586.4 397.6 662.1 413.9 665 3.8 1 7.7 1 11.5 1s7.7 0 11.5-1c17.2-2.9 416.8-78.6 416.8-665v-159c0-17.3-7.7-34.5-20.1-46z"
                            p-id="18200" fill="#26B514"></path>
                    </svg>
                    <div class="pay-securit">
                        <p class="title">결제 보안</p>
                        <p class="hint">귀하의 결제 정보는 안전하게 보관됩니다. 우리는 귀하의 정보를 어떤 형태로든 저장하지 않습니다</p>
                        <p class="safety">안전 인증서</p>
                        <div class="flex d-flex justify-content-between align-items-center">
                            <img class="pay-service-img"
                                src="https://pic.compgoo.com/front/res/img/payment/pay-img1.png?_t=1698328541&amp;_s=4462603ba11b3a94acebc248048d3433&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=f852437ceb3e1d9405be1f3838fa0f97"
                                alt="">
                            <img class="pay-service-img"
                                src="https://pic.compgoo.com/front/res/img/payment/pay-img2.png?_t=1698328541&amp;_s=91ee8e2b8a8d37114703e5545e3cb807&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=9a3367e7453ae170ca824ddfe13a07b3"
                                alt="">
                            <img class="pay-service-img"
                                src="https://pic.compgoo.com/front/res/img/payment/pay-img3.png?_t=1698328541&amp;_s=8be69e1908a9c6887388441ec9c19c05&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=3714883d8f988f45e38f3e1afacf6ef5"
                                alt="">
                            <img class="pay-service-img"
                                src="https://pic.compgoo.com/front/res/img/payment/pay-img4.png?_t=1698328541&amp;_s=9e523110ce131f8595e0da8c2754e9cf&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=b5c9d6b2121a1114e1b86915aa791265"
                                alt="">
                            <img class="pay-service-img"
                                src="https://pic.compgoo.com/front/res/img/payment/pay-img5.png?_t=1698328541&amp;_s=eb37badaa068299dbb2490d223907ae0&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=9daf65fdca43d33d4ad1180ec6e66042"
                                alt="">
                            <img class="pay-service-img"
                                src="https://pic.compgoo.com/front/res/img/payment/pay-img6.png?_t=1698328541&amp;_s=771c9c0b5efd9378df95ffd6634c967a&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=8a066f65d2e95089ec43865dddd719aa"
                                alt="">
                            <img class="pay-service-img"
                                src="https://pic.compgoo.com/front/res/img/payment/pay-img7.png?_t=1698328541&amp;_s=5e844437139dfc444c013fb7147ba22d&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=68325a803a3fbc1fd0b1e8f7e9713681"
                                alt="">
                        </div>
                    </div>
                </div>

                <div class="pay-bottom-serive">
                    <svg t="1690975912988" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="22415" width="200" height="200">
                        <path
                            d="M912.9 130.6c-26.1 4.5-52.8 6.9-80.2 6.9-115.4 0-221.1-41.9-302.6-111.2-10.6-9-26.2-9-36.8 0-81.5 69.4-187.2 111.2-302.6 111.2-27 0-53.5-2.3-79.2-6.7-17.2-2.9-32.9 10.4-33 27.9-0.2 109.1-0.4 238.1-0.4 242.5 0 471 394.5 592.7 431 603 1.8 0.5 3.6 0.5 5.4 0C550.9 994 943 873 945.5 405.7l0.4-247c0-17.6-15.8-31.1-33-28.1zM546 568.9v154.5c0 18.8-15.2 34-34 34s-34-15.2-34-34V568.9c-68.2-15.5-119.1-76.4-119.1-149.3 0-84.5 68.5-153.1 153.1-153.1S665.1 335 665.1 419.6c0 72.9-50.9 133.9-119.1 149.3z"
                            fill="#26B514" p-id="22416"></path>
                    </svg>
                    <div class="pay-privacy">
                        <p class="title">개인 정보 보호</p>
                        <p class="hint">귀하의 개인 정보를 보호하는 것은 우리에게 중요합니다! 귀하의 정보가 보호되고 공개되지 않으니 안심하십시오. 우리는 돈을 위해 귀하의 개인 정보를
                            판매하지 않을 것이며 개인 정보 및 쿠키 정책에 따라 귀하에게 서비스를 제공하고 개선하기 위해서만 귀하의 정보를 사용할 것입니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pay-bottom-serive>svg {
    width: 16px;
    height: 16px;
    margin-right: 3px;
}

.pay-bottom-serive {
    display: flex;
    align-items: flex-start;
    margin-top: 16px;
}

.pay-bottom-serive>div {
    flex: 1;
}

.pay-bottom-serive .title {
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 8px;
    font-weight: 700;
}

.pay-bottom-serive .hint {
    color: #999;
    font-weight: 400;
}

.pay-bottom-serive .safety {
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 4px;
}

.pay-bottom-serive .flex img {
    width: calc((100% - 36px)/ 7);
}

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
}</style>