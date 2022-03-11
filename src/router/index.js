import VueRouter from 'vue-router'
import Vue from 'vue'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/msite',
            component:MSite
        }
        , {
            path:'/order',
            component:Order
        }
        , {
            path:'/search',
            component:Search
        }
        , {
            path:'/profile',
            component:Profile
        },
        { 
            path:'/',
            redirect:'/msite'
        }
    ]
})