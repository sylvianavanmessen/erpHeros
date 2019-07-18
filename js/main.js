
// 1. Define route components.
// These can be imported from other files

// files is loaded from js/components

// 2. Define some routes
const routes = [
  //path folder heroes
    {path: '/', name: 'heroes', component: HeroesList},
    {path: '/heroes/heroes-list', name: 'heroes-list', component: HeroesList},
    {path: '/heroes/heroes-detail/:id', name: 'heroes-detail', component:HeroesDetail},
    {path: '/heroes/heroes-add', name: 'heroes-add', component:HeroesAdd},
    {path: '/heroes/heroes-edit/:id', name: 'heroes-edit', component:HeroesEdit}

];


// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
const app = new Vue({
    router
}).$mount('#app');
