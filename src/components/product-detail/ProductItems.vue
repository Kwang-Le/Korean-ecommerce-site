<template>
    <div class="card my-5" style="width: 640px;">
        <div class="nav-wrapper sticky-top" st>
            <ul class="nav nav-underline justify-content-evenly">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">상품설명</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">제품규격</a>
                </li>
            </ul>
        </div>
        <!-- <img v-for="n in 14" style=""
            :src={ "../../../public/umbrella-product/item_n.jpg":}
        > -->
        <img style="" src="../../../public/umbrella-product/item_1.gif">
        <img style="" src="../../../public/umbrella-product/item_2.jpg">
        <img style="" src="../../../public/umbrella-product/item_3.jpg">
        <img style="" src="../../../public/umbrella-product/item_4.jpg">
        <img style="" src="../../../public/umbrella-product/item_5.jpg">
        <img style="" src="../../../public/umbrella-product/item_6.jpg">
        <img style="" src="../../../public/umbrella-product/item_7.jpg">
        <img style="" src="../../../public/umbrella-product/item_8.jpg">
        <img style="" src="../../../public/umbrella-product/item_9.jpg">
        <img style="" src="../../../public/umbrella-product/item_10.gif">
        <img style="" src="../../../public/umbrella-product/item_11.gif">
        <img style="" src="../../../public/umbrella-product/item_12.gif">
        <img style="" src="../../../public/umbrella-product/item_13.gif">
        <!-- <img style="" title="1621510649632900.jpg"
            data-original="https://pic.compgoo.com/ueditor/image/20210520/1621510649632900.jpg?_t=1697876982&amp;_s=c46e238ed48c2a910c4221aa23508e37&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=e42639ec4ed2358e813e48365e9a187c"
            src="https://pic.compgoo.com/ueditor/image/20210520/1621510649632900.jpg?_t=1697876982&amp;_s=c46e238ed48c2a910c4221aa23508e37&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=e42639ec4ed2358e813e48365e9a187c"
            data-loaded="true">
        <img style="" title="1621510649567386.gif"
            data-original="https://pic.compgoo.com/ueditor/image/20210520/1621510649567386.gif?_t=1697876982&amp;_s=a30cbf504d497ca49cdf57f44eae37de&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=f77b60756527e19f30196ce05951906a"
            src="https://pic.compgoo.com/ueditor/image/20210520/1621510649567386.gif?_t=1697876982&amp;_s=a30cbf504d497ca49cdf57f44eae37de&amp;_token=103cecea93c0b367d8be7fe03cc0f585&amp;_e=10&amp;_c=f77b60756527e19f30196ce05951906a"
            data-loaded="true"> -->
    </div>
</template>

<style>
@media only screen and (max-width: 640px) {
    .nav-wrapper {
        max-width: 100%;
    }

    .card {
        max-width: 100%;
    }
}

.nav-wrapper {
    max-width: 640px;
    background: white;
}

.nav {
    --bs-nav-link-color: black;
    --bs-nav-link-hover-color: #F51111;
}

.nav-link.active {
    color: #F51111 !important;
}
</style>