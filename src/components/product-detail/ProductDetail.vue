<script setup>
import BottomNavBar from './BottomNavBar.vue';
import ProductItems from './ProductItems.vue';
import ReviewCommentsSection from './ReviewCommentsSection.vue';
</script>

<script>
export default {
    setup() {
        const spaceBetween = 10;
        const onProgress = (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress)
        };

        const onSlideChange = (e) => {
            console.log('slide changed')
        }

        return {
            spaceBetween,
            onProgress,
            onSlideChange,
        };
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center">
        <div class="card">
            <div class="slider-wrapper">
                <swiper-container :slides-per-view="1" :space-between="spaceBetween" :centered-slides="true" :pagination="{
                    hideOnClick: true
                }" :breakpoints="{
    768: { slidesPerView: 1, },
}" @progress="onProgress" @slidechange="onSlideChange">
                    <swiper-slide><img src="https://picsum.photos/seed/picsum/209/209" class="card-img-top"
                            alt="..."></swiper-slide>
                    <swiper-slide><img src="https://picsum.photos/seed/picsum/209/209" class="card-img-top"
                            alt="..."></swiper-slide>
                    <swiper-slide><img src="https://picsum.photos/seed/picsum/209/209" class="card-img-top"
                            alt="..."></swiper-slide>
                </swiper-container>
            </div>
            <div class="card-body">
                <div class="price-box d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center price-block">
                        <span class="final-price gui-money" cur-data="37900" cur-saleid="MTAwMDI1MzU0NA==">₩ <span
                                class="format-price">37,900</span></span>
                    </div>
                    <span class="sale-off">50%할인 </span>
                </div>
                <div class="price-box" style="margin-top:5px;">
                    <div class="service-item d-flex align-items-start">
                        <span>무료배송</span>
                        <span>7일 시용 기간</span>
                    </div>
                </div>
                <p class="sale-title card-text">남성 배기핏 면 마 바지</p>
                <p class="promotion-text card-text" >프리미엄 면 마 혼방 원단으로 최고의 착용감 제공, 배기핏으로 다리라인 수식에 탁월합니다! 지금 추가 구매시 ₩9,900! </p>
            </div>
        </div>
        <ProductItems></ProductItems>
        <ReviewCommentsSection></ReviewCommentsSection>
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

.slider-wrapper {
    max-width: 640px;
}

.price-box .final-price {
    color: #F51111;
    font-size: 1.85rem;
    font-weight: 600;
}

.price-box .sale-off {
    color: #F51111;
    border: 1px solid #F51111;
    border-radius: 4px;
    height: 21px;
    line-height: 21px;
    padding: 0 3px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
}

.price-box .service-item span {
    color: #fff;
    background: #F51111;
    padding: 0 5px;
    border-radius: 6px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    -ms-border-radius: 6px;
    -o-border-radius: 6px;
    margin: 0 5px 5px 0;
}

p {
    max-width: 600px;
}
</style>