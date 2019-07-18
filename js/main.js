
// 1. Define route components.
// These can be imported from other files

// files is loaded from js/components

// 2. Define some routes
const routes = [
  //path folder heroes
    {path: '/', name: 'heroes', component: ProductList},
    {path: '/heroes/heroes-list', name: 'heroes-list', component: HeroesList},
    {path: '/heroes/heroes-detail/:id', name: 'heroes-detail', component:HeroesDetail},
    {path: '/heroes/heroes-add', name: 'heroes-add', component:HeroesAdd},
    {path: '/heroes/heroes-edit/:id', name: 'heroes-edit', component:HeroesEdit},
  //path folder producer
    {path: '/', name: 'producteurs', component: ProducerList},
    {path: '/producer/producer-list', name: 'producer-list', component: ProducerList},
    {path: '/producer/producer-detail/:id', name: 'producer-detail', component:ProducerDetail},
    {path: '/producer/producer-add', name: 'producer-add', component:ProducerAdd},
    {path: '/producer/producer-edit/:id', name: 'producer-edit', component:ProducerEdit}


];


// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
const app = new Vue({
    router
}).$mount('#app');
