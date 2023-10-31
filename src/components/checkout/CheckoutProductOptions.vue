<script>
export default {
    data() {
        return {
            isActiveList: [[false, false, false], [false, false, false], [false, false, false]],
            self: this,
        }
    }
    ,
    props: {
        quantity: Number,
        cartList: Array
    },
    methods: {
        toggleActive(self, optionIndex, optionGroupIndex) {
            self.isActiveList[optionGroupIndex] = self.isActiveList.map((val) => false)
            if (self.isActiveList[optionGroupIndex][optionIndex] == false){
                self.isActiveList[optionGroupIndex][optionIndex] = true
                self.addItemToCart(self, optionIndex, optionGroupIndex)
            } else{
                self.isActiveList[optionGroupIndex][optionIndex] = false
            }
        },
        addItemToCart(self, optionIndex, optionGroupIndex) {
            if (optionIndex == 0){
                self.cartList[optionGroupIndex] = 'yellow'
            }else if (optionIndex == 1){
                self.cartList[optionGroupIndex] = 'red'
            }else if (optionIndex == 2){
                self.cartList[optionGroupIndex] = 'blue'
            }
            console.log(self.cartList)
        },
        checkOptionToggled(self, optionIndex, optionGroupIndex) {
            if (self.isActiveList[optionGroupIndex][optionIndex] == true) {
                console.log(self.quantity, optionGroupIndex + 1)
                return 'active'
            }
            return ''
        }
    },
    computed: {
        
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
                <div v-for="(_, optionGroupIndex) in quantity" :key="optionGroupIndex" class="addcart-specs-content">
                    <div class="color">
                        <div class="header">컬러</div>
                        <div class="color-options d-flex flex-wrap">
                            <div @click="toggleActive(self, 0, optionGroupIndex)" :class="checkOptionToggled(self, 0, optionGroupIndex)" id="0"  class="color-options-img d-flex flex-column align-items-center">
                                <img
                                    src="../../../public/umbrella-product/yellow.jpg">
                                <p>그레이</p>
                            </div>
                            <div @click="toggleActive(self, 1, optionGroupIndex)" :class="checkOptionToggled(self, 1, optionGroupIndex)" class="color-options-img d-flex flex-column align-items-center">
                                <img
                                    src="../../../public/umbrella-product/red.jpg">
                                <p>그레이</p>
                            </div>
                            <div @click="toggleActive(self, 2, optionGroupIndex)" :class="checkOptionToggled(self, 2, optionGroupIndex)" class="color-options-img d-flex flex-column align-items-center">
                                <img
                                    src="../../../public/umbrella-product/blue.jpg">
                                <p>그레이</p>
                            </div>
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