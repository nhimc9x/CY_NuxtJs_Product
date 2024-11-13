export const routes = [
    {
        name: 'login',
        path: '/login',
        file: '~/custom-pages/auth/login.vue'
    },
    {
        name: 'signup',
        path: '/signup',
        file: '~/custom-pages/auth/signup.vue'
    },
    {
        name: 'product',
        path: '/product',
        file: '~/custom-pages/product/index.vue'
    },
    {
        name: 'product_detail',
        path: '/product/:id',
        file: '~/custom-pages/product/productDetail/index.vue'
    },
    {
        name: 'cart',
        path: '/cart',
        file: '~/custom-pages/cart/index.vue'
    },
    {
        name: 'checkout',
        path: '/checkout',
        file: '~/custom-pages/checkout/index.vue'
    },
    {
        name: 'order',
        path: '/order',
        file: '~/custom-pages/order/index.vue'
    },
    {
        name: 'profile',
        path: '/profile',
        file: '~/custom-pages/profile/index.vue'
    }
]