<script setup>
import NavBar from './NavBar.vue';
import ProductList from './ProductList.vue';
import Footer from './Footer.vue';
</script>


<script>
export default {
    data() {
        return {
            productsToDisplay: null,
            fetchDataCompleted: false
        }
    },
    methods: {
        async fetchData() {
            const response = await fetch("https://e-commerce-be-xi.vercel.app/api/v1/product/");
            this.productsToDisplay = await response.json();
            console.log(this.productsToDisplay);
            this.fetchDataCompleted = await true
        }
    },
    created() {
        this.fetchData().then(() => this.fetchDataCompleted = true)
    },
}

</script>

<template>
    <div v-if="fetchDataCompleted">
        <div class="carousel-wrapper-custom">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/1024/480/?image=52" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1024/480/?image=54" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/1024/480/?image=53" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="home-cate d-flex align-items-center flex-wrap my-5">

            <div class="thumbnail pr">
                <a href="">
                    <img data-original="https://pic.compgoo.com/uploads/5bf195ad5f7c62bf9e3a9a21922fda2e.jpg?_t=1696433373&amp;_s=2510d2323f01cef166b92926b8c437b5&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=192ba41a843b8a907be5ff18eeccfe9e"
                        class="lazy"
                        src="https://pic.compgoo.com/uploads/5bf195ad5f7c62bf9e3a9a21922fda2e.jpg?_t=1696433373&amp;_s=2510d2323f01cef166b92926b8c437b5&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=192ba41a843b8a907be5ff18eeccfe9e"
                        style="display: inline;">
                    <h2 class="pa d-flex align-items-center justify-content-center">여성의류</h2>
                </a>
            </div>

            <div class="thumbnail pr">
                <a href="">
                    <img data-original="https://pic.compgoo.com/uploads/56ae71ddf8848c1be4aa0ebcb10dd126.jpg?_t=1696433373&amp;_s=71019b6abe75488744453e8917ceddfe&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=64ee444b6c3126375bcf9e7a1babc6d6"
                        class="lazy"
                        src="https://pic.compgoo.com/uploads/56ae71ddf8848c1be4aa0ebcb10dd126.jpg?_t=1696433373&amp;_s=71019b6abe75488744453e8917ceddfe&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=64ee444b6c3126375bcf9e7a1babc6d6"
                        style="display: inline;">
                    <h2 class="pa d-flex align-items-center justify-content-center">여성가방</h2>
                </a>
            </div>

            <div class="thumbnail pr">
                <a href="">
                    <img data-original="https://pic.compgoo.com/uploads/66ef945f7df76ba4d2708b236ceb0df1.jpg?_t=1696433373&amp;_s=f11fe4b0bbc046fc27799b0b0ccba9f9&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=ed043b520b28836771b0812b8504415d"
                        class="lazy"
                        src="https://pic.compgoo.com/uploads/66ef945f7df76ba4d2708b236ceb0df1.jpg?_t=1696433373&amp;_s=f11fe4b0bbc046fc27799b0b0ccba9f9&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=ed043b520b28836771b0812b8504415d"
                        style="display: inline;">
                    <h2 class="pa d-flex align-items-center justify-content-center">남성의류</h2>
                </a>
            </div>
        </div>
        <h2 style="text-align: center;">Best Seller</h2>
        <ProductList :productsToDisplay="productsToDisplay"></ProductList>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.carousel-inner {
    height: 25%;
}

.thumbnail {
    flex: 1;
    overflow: hidden;
    width: 100%
}

@media screen and (max-width: 639px) {
    .thumbnail {
        flex: auto;
        overflow: hidden;
        width: 100%
    }
}



.thumbnail img {
    transform: scale(1);
    transition: .5s;
}

.thumbnail:hover img {
    transform: scale(1.15);
}

.thumbnail h2 {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: .5rem;
    transition: .5s;
}

.thumbnail h2:hover {
    background: rgba(0, 0, 0, 0.6);
}

.pr {
    position: relative;
}

img {
    width: 100%;
}

.pa {
    position: absolute;
}
</style>