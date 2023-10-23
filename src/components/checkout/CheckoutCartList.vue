<template>
    <div class="wrapper-cart">
        <div class="card">
            <div class="card-body">
                <h5>
                    선택한 상품 (총 0개 상품 )
                </h5>
                <p class="text-danger">위와 같이 옵션에 다시 선택해 주시기 바랍니다</p>
                <div class="icon-wrapper"><i class="bi bi-cart-x empty-icon"></i></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-wrapper {
    opacity: 15%;
    text-align: center;
    font-size: 53px;
}
.wrapper-cart {
    width: 640px;
}

@media only screen and (max-width: 640px) {
    .wrapper-cart {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}
</style>