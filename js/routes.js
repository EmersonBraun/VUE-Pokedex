const routes = [
    { path: '/', component: Vue.component('home-page') },
    { path: '/:number', component: Vue.component('about-page') }
]

const router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
    if(to.path !== '/'){
        var pkmNumber = to.path.slice(1);

        if(!pkmNumber.match(/\D/g)){
            next();
        }else{
            next('/');
        }
    }else{
        next();
    }
})