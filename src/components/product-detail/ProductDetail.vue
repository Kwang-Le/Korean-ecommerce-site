<script setup>
import BottomNavBar from './BottomNavBar.vue';
import CustomNotice from './CustomNotice.vue';
import ProductItems from './ProductItems.vue';
import ReviewCommentsSection from './ReviewCommentsSection.vue';
import ProductDetailFooter from './ProductDetailFooter.vue';
import TopFixedBar from '../TopFixedBar.vue';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

</script>

<script>
export default {
    data() {
        return {
            spaceBetween: 10,
            modules: [Autoplay, Pagination, Navigation]
        }
    },
    methods: {
        onProgress(e) {
            const [swiper, progress] = e.detail;
            console.log(progress)
        },
        onSlideChange(e) {
            console.log('slide changed')
        }
    },
    // setup() {
    //     return {

    //     };
    // },
}
</script>

<template>
    <CustomNotice></CustomNotice>
    <!-- <TopFixedBar></TopFixedBar> -->
    <div class="d-flex flex-column align-items-center">
        <div class="card">
            <div class="slider-wrapper">
                <swiper-container :autoplay="{ delay: 2000, disableOnInteraction: false }" :slides-per-view="1"
                    :space-between="spaceBetween" :centered-slides="true" :pagination="{
                        hideOnClick: true
                    }" :breakpoints="{
    768: { slidesPerView: 1, },
}" @progress="onProgress" @slidechange="onSlideChange" :modules="modules">
                    <swiper-slide><img src="../../../public/umbrella-product/slider_1.jpg" class="card-img-top"
                            alt="..."></swiper-slide>
                    <swiper-slide><img src="../../../public/umbrella-product/slider_2.jpg" class="card-img-top"
                            alt="..."></swiper-slide>
                    <swiper-slide><img src="../../../public/umbrella-product/slider_3.jpg" class="card-img-top"
                            alt="..."></swiper-slide>
                    <swiper-slide><img src="../../../public/umbrella-product/slider_4.jpg" class="card-img-top"
                            alt="..."></swiper-slide>
                    <!-- <swiper-slide><img src="../../../public/umbrella-product/slider_5.jpg" class="card-img-top"
                            alt="..."></swiper-slide> -->
                    <!-- <swiper-slide><img src="../../../public/umbrella-product/slider_6.jpg" class="card-img-top"
                            alt="..."></swiper-slide> -->
                </swiper-container>
            </div>
            <div class="py-2 px-3 price-box d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center price-block">
                    <span class="final-price gui-money" cur-data="37900" cur-saleid="MTAwMDI1MzU0NA==">₩ <span
                            class="format-price">37,900</span></span>
                </div>
                <span class="promotion-flag px-3">2 개 ₩55,900 </span>
            </div>
            <p class="sale-title card-text p-2">신형 44공 로켓포 버블건</p>
            <div class="p-2 service-item d-flex align-items-center flex-wrap">
                <span><i class="bi bi-coin"></i>지급 보호</span>
                <span><i class="bi bi-truck"></i>무료배송</span>
                <span><i class="bi bi-7-circle"></i>7일 시용 기간</span>
            </div>
        </div>
        <ReviewCommentsSection></ReviewCommentsSection>
        <ProductItems></ProductItems>
        <div class="notice">
            <img class="notice-img"
                src="https://pic.compgoo.com/uploads/546b8ba4659b480393601963ab17a410.jpg?_t=1697876982&_s=2ed8813533314f1ea974632bef81f84f&_token=103cecea93c0b367d8be7fe03cc0f585&_e=10&_c=57209bbf72831121a02d0c990e48673a"
                alt="">
        </div>
        <ProductDetailFooter></ProductDetailFooter>
        <div class="spacing" style="height: 100px;"></div>
        <BottomNavBar></BottomNavBar>
    </div>
</template>


<style scoped>
@media only screen and (max-width: 640px) {
    .slider-wrapper {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}

.sale-title {
    margin-bottom: 4px;
    font-weight: 600;
}

.slider-wrapper {
    max-width: 640px;
}

.price-box {
    background: linear-gradient(to right, #fe8d01, #ff01fd);
}

.price-box .final-price {
    color: #fff;
    font-size: 1.85rem;
    font-weight: 600;
}

.price-box .promotion-flag {
    background: #fff;
    border-radius: 45px;
    color: #ff03f9;
    font-weight: bolder;
}

.service-item span {
    color: #666;
    margin-right: 15px;
}

p {
    max-width: 600px;
}

.notice-img {
    max-width: 640px;
}
</style>