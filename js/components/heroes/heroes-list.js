
const HeroesList = {
    template: `
    <div>

    <h1>Liste des héros</h1>

    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <button class="add">
    <router-link class="add"  to=/heroes/heroes-add>Ajouter héros</router-link>
    </button>

    <!-- on vérifie que heroes n'est pas vide, et puis on boucle avec v-for sur un tableau d'objet "item" -->

    <ul v-if="heroes" id="example-1">
        <li v-for="item in heroes">
            <router-link :to="{ name: 'heroes-detail', params: { id: item.id_superhero}}">{{ item.pseudo }} </router-link>
        </li>
    </ul>

  </div>
`,

    data() {
        return {
            loading: true,
            heroes:{},
            error: null
        }
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData();

    },

    methods: {

        fetchData() {
            axios.get('').then(response => {
                this.customers= response.data.heroes;
                this.loading = false;
                //this.heroes = response.data.heroes;
                //console.log(this.heroes);
                //alert("axiosok");
            });
        }
    }
};
