<template>
    <div class="fixed-top border-bottom top-bar text-center">
        <img @click="this.$router.go(-1)" src="../assets/icons/left-arrow.png" alt="" class="return-btn">
        <span>주문 확인</span>
        <div class="service-btn top-service-btn checkout-top-right qimo-css qimo-service"><i class="bi bi-chat-dots"></i></div>
    </div>
</template>

<style scoped>
.top-bar {
    padding: 3px 0;
    margin: auto;
    max-width: 640px;
    background: white;
    box-shadow: 0 -5px 5px -5px rgba(0,0,0,.3);
    cursor: pointer;
}
.return-btn {
    position: absolute;
    height: 10px;
    left: 10px;
    top: 8px;
}

.top-service-btn.checkout-top-right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

</style>