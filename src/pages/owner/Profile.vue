<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Profile proprietaire</div>
      <div class="q-gutter-md row items-start">
        <q-input label="Nom" v-model="a.lastName" readonly/>
        <q-input label="Prenom" v-model="a.firstName" readonly/>
      </div>

      <div class="text-h6">Address</div>
      <div class="q-gutter-md row items-start">
        <q-input label="Rue" v-model="a.rue"/>
        <q-input label="Code Postal" v-model="a.codePostal"/>
        <q-input label="Ville" v-model="a.ville"/>
        <q-input label="Pays" v-model="a.pays"/>
      </div>

      <div class="text-h6">Details Bancaires</div>
      <div class="q-gutter-md row items-start">
        <q-input label="IBAN" mask="#### #### #### ####" v-model="a.iban"/>
      </div>

      <!-- <div class="q-py-md"> -->
      <div class="q-pa-sm">
        <q-table
          title="Proprietes"
          :data="list"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense round flat color="grey" @click="editRow(props)" icon="edit">
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </div>

      <q-btn
        color="primary"
        icon="warning"
        label="Abandon"
        to="/"
        class="q-ma-md"
      ></q-btn>
      <q-btn
        color="red"
        icon="error"
        label="Enregister"
        @click="save"
        :loading="Submitting"
        class="q-ma-md"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      a: {
        firstName: '', lastName: '', rue: '', codePostal: '', ville: '', pays: 'France', iban: ''
      },
      columns: [
        {name: 'name', field: 'name', required: true, label: 'Nom', align: 'left', sortable: true},
        {name: 'contract', field: 'contract', align: 'center', label: 'Contrat', sortable: true},
        {name: 'loue', field: 'loue', align: 'center', label: 'Loue', sortable: true},
        {name: 'actions', label: 'Actions', field: '', align: 'center'},
      ],
      list: []
    }
  },
  methods: {
    editRow(props) {
      //  Call edl with parameter of line (type room) that was clicked
      let propertyId =  1;
      window.location.href = "/owner/property/" + propertyId;
    },

    save({commit}, a) {
      // this.$store.commit('main/toolbarMessage', 'NEW VALUE!');
      //
      // alert('Donnees enregistrees')

      this.$axios
        .post('http://localhost:8888/api/v1/auth/register', form)
        .then(response => {
          commit('login', {
            token: response.data.token,
            user: response.data.user
          })
          setAxiosHeaders(response.data.token)
        })
    }
  },
  debug(e) {
    console.log(e)
  },
  created() {
    //  take id from the path
    let userId = this.$route.params.id;

    //  load user data at opening of the page ....
    this.$axios.get('http://localhost:8888/api/v1/user/' + userId)
      .then(response => {

        this.a.firstName = response.data.name;
        this.a.lastName = response.data.lastName;

        //if (owner === 'owner') {
        //      if (true) {
        this.$axios.get('http://localhost:8888/api/v1/owner/property/list/' + userId)
          .then(list => {
            //  get propertis list
            this.list = list.data.list;
          })
      })
      .catch(err => {
        alert(err);
        this.list = [];
      });
  }
}
</script>
