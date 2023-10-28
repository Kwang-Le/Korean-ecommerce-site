<script>
export default {
    data() {
        return {
            isActiveList: [false, false, false],
            self: this
        }
    }
    ,
    props: {
        quantity: Number,
    },
    methods: {
        toggleActive(self, index) {
            self.isActiveList = self.isActiveList.map((val) => false)
            self.isActiveList[index] = true
            console.log(self.isActiveList)
        }
    }
}
</script>
<template>
    <div class="wrapper-options">
        <div class="card">
            <div class="card-body">
                <div class="addcart-specs-title d-flex">
                    <span class="addcart-specs-title-name text-space col-1">제1건</span>
                    <span class="addcart-single-sku col-1 flex-grow-1">(<span class="sku-title-hidden">컬러:</span>브라운
                        )</span>
                </div>
                <div v-for="(_, index) in quantity" :key="index" class="addcart-specs-content">
                    <div class="color">
                        <div class="header">컬러</div>
                        <div class="color-options d-flex flex-wrap">
                            <div @click="toggleActive(self, 0)" :class="isActiveList[0] ? 'active' : ''" id="0"  class="color-options-img d-flex flex-column align-items-center">
                                <img
                                    src="../../../public/umbrella-product/yellow.jpg">
                                <p>그레이</p>
                            </div>
                            <div @click="toggleActive(self, 1)" :class="isActiveList[1] ? 'active' : ''" class="color-options-img d-flex flex-column align-items-center">
                                <img
                                    src="../../../public/umbrella-product/red.jpg">
                                <p>그레이</p>
                            </div>
                            <div @click="toggleActive(self, 2)" :class="isActiveList[2] ? 'active' : ''" class="color-options-img d-flex flex-column align-items-center">
                                <img
                                    src="../../../public/umbrella-product/blue.jpg">
                                <p>그레이</p>
                            </div>
                        </div>

                    </div>
                    <div class="size">
                        <div class="header">사이즈</div>
                        <div class="size-options d-flex flex-wrap">
                            <span>
                                M
                            </span>
                            <span>
                                L
                            </span>
                            <span>
                                XL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.color-options-img {
    margin-left: 10px;
}
.color-options-img img {
    width: 100px;
}

.color-options-img.active img {
    border: 2px solid #ec4f2a;
}

.header {
    margin: 5px;
}

.wrapper-options {
    width: 640px;
}

@media only screen and (max-width: 640px) {
    .wrapper-options {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}

.size-options span {
    display: inline-block;
    border: 1px solid #a8a8a8;
    padding: 3px 10px;
    min-width: 35px;
    text-align: center;
    border-radius: 30px;
    font-size: 13px;
    margin: 0 2% 2% 0;
    color: #555;
    line-height: 16px;
    cursor: pointer;
}</style>