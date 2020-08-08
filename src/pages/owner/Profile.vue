<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Profile proprietaire</div>
      <div class="q-gutter-md row items-start">
        <q-input label="Nom" v-model="a.lastName"/>
        <q-input label="Prenom" v-model="a.firstName"/>
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
          :data="tabledata"
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
        { name: 'name', field: 'name', required: true, label: 'Nom', align: 'left', sortable: true},
        { name: 'contract', field: 'contract', align: 'center', label: 'Contrat', sortable: true},
        { name: 'loue', field: 'loue', align: 'center', label: 'Loue', sortable: true},
        { name: 'actions', label: 'Actions', field: '', align:'center' },
      ],
      tabledata: [{name: 'aaa', contract: 'A1234432', loue: 'no'}],
      // build function with a call to blockchain to get list of contracts
    }
  },
  methods: {
    editRow(props) {
      //  Call edl with parameter of line (type room) that was clocked
      window.location.href = "/edl"
    },


    save({commit}, a) {
      this.$store.commit('main/toolbarMessage', 'NEW VALUE!');

      alert('Donnees enregistrees')

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
  }
}
</script>
