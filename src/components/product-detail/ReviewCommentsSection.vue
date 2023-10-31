<script setup>
import Comment from './Comment.vue';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>

<script>
import Paginate from 'vuejs-paginate-next';
export default {
    components: {
        paginate: Paginate,
    },
    data() {
        return {
            spaceBetween: 5,
            modules: [Pagination, Navigation, FreeMode]
        }
    },
    methods: {
        clickCallback(pageNum) {
            console.log(pageNum)
        },
        onProgress(e) {
            const [swiper, progress] = e.detail;
            console.log(progress)
        },
        onSlideChange(e) {
            console.log('slide changed')
        }
    },
};
</script>

<template>
    <div class="card" style="width: 640px;">
        <div class="show-title">
            <h3>프리미엄 상품평</h3><span class="view-more"><span>많은 상품을 보기</span><i
                    class="iconfont icon-chevron-right1"></i></span>
        </div>
        <div class="slider-wrapper">
            <swiper-container 
                :slides-per-view="5" 
                :space-between="spaceBetween" 
                :freeMode="true"
                :pagination="{
                    clickable: true
                }" 
                @progress="onProgress" 
                @slidechange="onSlideChange" 
                :modules="modules">
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
        <Comment></Comment>
    </div>
    <paginate :page-count="20" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'Prev'"
        :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'">
    </paginate>
    <div class="spacing" style="height: 100px;">

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
    height: 100px
}

.price-box {
    background: linear-gradient(to right, #fe8d01, #ff01fd);
}

.card-img-top {
    width: 100px;
}
</style>