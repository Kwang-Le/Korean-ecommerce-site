<script setup>
import TopFixedBar from './TopFixedBar.vue';
</script>
<script>
export default {

}
</script>
<template>
    <TopFixedBar></TopFixedBar>
    <div class="fixed-top log-from d-flex justify-content-between align-items-center">
        <div class="search-input flex-grow-1">
            <input type="text" name="number" class="log-input" value="" placeholder="전화번호 입력 후에 검색하세요~">
            <i class="iconfont iconHOT-4del pa pointer" id="order-close" style="display: none;"></i>
        </div>
        <div class="search-btn theme-btn btn pointer ga-event" ga-src="logistics" ga-type="generalquery">검색</div>
    </div>
    <div class="load-box d-flex flex-column justify-content-center align-items-center">
        <img src="https://pic.compgoo.com/V3/common/assets/images/customer/wuliu2.png?_t=1698778253&amp;_s=ba8205210dd1395755721a7c1bfa1185&amp;_token=f575a3cda890d2e0c4a0e26d74820e01&amp;_e=10&amp;_c=d26413c56fa188621151b6d4ed7707fc"
            alt="">
        <p>전화번호 입력 후에 검색하세요~</p>

        도움말: 주문일로부터 상품 배송기간은 6-10일이며, 배송기간이 10일이 넘었는데도 물건을 받지 못하면 이메일에 이메일을 보내주십시오.
        <button type="button" class="btn to-home">홈페이지</button>
    </div>
</template>

<style scoped>
.log-from {
    margin: 0 auto;
    width: 100%;
    padding: 0.1rem 0.3rem;
    top: 39px;
    z-index: 10;
    background-color: #fff;
    max-width: 640px;
}

.log-input {
    width: 100%;
    height: 38px;
}

.log-from .search-btn {
    width: auto;
    border-radius: 3px;
    margin-left: 0.2rem;
}

.theme-btn {
    background-color: #85B839;
    color: #fff;
}

.load-box {
    margin: 100px auto;
    width: 640px;
}

.load-box img {
    width: 150px;
    margin: 0px;

}

.to-home {
    background: #85B839;
    color: #fff;
    font-size: 16px;
    line-height: 1;
    padding: 0.25rem 0.75rem;
    margin-top: 16px;
}

@media only screen and (max-width: 640px) {
    .load-box {
        max-width: 100%;
    }
}
</style>