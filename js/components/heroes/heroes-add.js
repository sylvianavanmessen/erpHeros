
const HeroesAdd = {
        template: `

    <div>
        <h1>Héros n° {{ $route.params.id }}</h1>

    <div v-if="loading" class="loading">
        Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div>
        <div>
            <label>Prénom</label>
            <input type="text" v-model="item.firstname" />
        </div>
        <div>
            <label>Nom</label>
            <input type="text" v-model="item.name" />
        </div>
      
        <div>
            <label>Pseudo</label>
            <input type="text" v-model="item.pseudo" />
        </div>
        <div>
            <button class="valider" v-on:click="sendModif">Valider</button>

            <button class= "valider">
            <router-link class= "valider" to="/heroes/heroes-list">Retour</router-link>
            </button>
        </div>
    </div>

    {{ message }}
</div>
`,
    data() {
        return {
            loading: true,
            item: {},
            error: null,
            message: ''
        }
    },

    methods: {
        sendModif() {
            const params = new URLSearchParams();
            params.append('firstname', this.item.firstname);
            params.append('name', this.item.name);
            params.append('adress', this.item.pseudo);
            

            axios.post(' ', params).then(response => {
                console.log(response);
                this.loading = false;

                //this.item = response.data.heroes;
                //console.log(response);

                if(response.data.status == 'success') {
                    this.message = 'Heros ajouté';
                }
                else
                {
                    this.message = 'Veuillez, Reessayez plus tard svp';
                }
            });
        }
    }
}
