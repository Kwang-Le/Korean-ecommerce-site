<script>
import articles from '../../articles.js'
export default {
    data() {
        return {
            article: articles[this.$route.params.id]
        }
    }
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <div class="wrapper-footer-article">
            <div class="card">
                <div class="card-body">
                    <h3 class="py-3 text-center">{{ article.title }}</h3>
                    <p>{{ article.text }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper-footer-article {
    width: 640px;
}

@media only screen and (max-width: 640px) {
    .wrapper-footer-article {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}
</style>