const CustomerEdit = {
        template: `
    <div>

    <h1>Mettre à jour le client n°{{ $route.params.id }} </h1>

        <div v-if="loading" class="loading">
          Loading...
        </div>

        <div v-if="error" class="error">
          {{ error }}
        </div>



        <form>

            <div v-if="item">
                <label>Prénom</label>
                <input type="text" v-model="item.firstname" />
            </div>
            <div>
                <label>Nom</label>
                <input type="text" v-model="item.name" />
            </div>
            <div>
                <label>Adresse</label>
                <input type="text" v-model="item.adress" />
            </div>
            <div>
                <label>City</label>
                <input type="text" v-model="item.city" />
            </div>
            <div>
                <label>Code postal</label>
                <input type="text" v-model="item.zip_code" />
            </div>
            <div>
                <label>Pays</label>
                <input type="text" v-model="item.country" />
            </div>

        </form>

        <div>
            <button class="edit" @click.prevent='sendModif' v-on:keyup.enter="sendModif" >Modifier le client
            </button>

        <button class="return">
        <router-link class="return" to="/">Retour</router-link>
        </button>

        </div>

        {{message}}

    </div>

        `,

        data() {
            return {
                loading: true,
                item: {},
                error: null,
                message: '',
                id:null
            }
        },

        created() {
            this.fetchData();

        },


        methods: {

            fetchData() {
                this.loading = false;
                const params = new URLSearchParams();
                params.append('id', this.$route.params.id);
                //this.$route.params.id
                axios.post('http://api.sirius-school.be/product-v2/customer/detail',params).then(response => {
                    console.log(this.item);
                    this.item = response.data.customer;
                });
            },



            sendModif() {
                const params = new URLSearchParams();
                params.append('id', this.$route.params.id);
                params.append('firstname', this.item.firstname);
                params.append('name', this.item.name);
                params.append('adress', this.item.adress);
                params.append('city', this.item.city);
                params.append('zip_code', this.item.zip_code);
                params.append('country', this.item.country);

                axios.post('http://api.sirius-school.be/product-v2/customer/update', params).then(response => {
                    console.log(response);
                    this.loading = false;

                    //this.item = response.data.product;
                    //console.log(response);

                    if(response.data.status == 'success') {
                        this.message = 'Client mis à jour';
                    }
                    else
                    {
                        this.message = 'Veuillez, Reessayez plus tard svp';
                    }
                });
            }
        }
    }
