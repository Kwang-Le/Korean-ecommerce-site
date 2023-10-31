<script>
import articles from '../../articles.js'
export default {
    data() {
        return {
            articlesList: articles
        }
    }
}
</script>
<template>
    <div class="wrapper-product-detail-footer">
        <div class="card">
            <div class="article text-center">
                <router-link v-for="(item, index) in articlesList" :key="index" class="article-item" :to="`/article/${index}`">{{ item.title }} </router-link>
                <!-- <a href="col-4"> example </a> -->
            </div>
        </div>
    </div>
</template>


<style scoped>
.article-item {
    padding: 5px;
}
.wrapper-product-detail-footer {
    width: 640px;
}

@media only screen and (max-width: 640px) {
    .wrapper-product-detail-footer {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}

.article {
    padding: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
}
</style>