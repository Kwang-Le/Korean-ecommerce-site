<script setup>
import Comment from './Comment.vue';
</script>

<script>
import Paginate from 'vuejs-paginate-next';
export default {
    components: {
        paginate: Paginate,
    },
    methods: {
        clickCallback(pageNum) {
            console.log(pageNum)
        }
    },
  };
</script>

<template>
    <div class="card" style="width: 640px;">
        <Comment></Comment>
    </div>
    <paginate :page-count="20" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'Prev'"
        :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'">
    </paginate>
    <div class="spacing" style="height: 100px;">

    </div>
</template>


<style scoped></style>