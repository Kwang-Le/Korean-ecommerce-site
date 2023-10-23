
import { VueElement, createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ProductList from './components/ProductList.vue';
import ProductDetail from './components/product-detail/ProductDetail.vue';
import CheckoutDetail from './components/checkout/CheckoutDetail.vue'
import Paginate from "vuejs-paginate-next";

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: HomePage },
    { path: '/home', component: HomePage },
    { path: '/products', component: ProductList },
    { path: '/product-detail', component: ProductDetail },
    { path: '/checkout-detail', component: CheckoutDetail }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})



const app = createApp(App)

app.use(router)
app.use(Paginate)
app.mount('#app')

// createApp(App).mount('#app')
