<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h6">Profile proprietaire</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="a.lastName" label="Nom"/>
        <q-input v-model="a.firstName" label="Prenom"/>
      </div>

      <div class="text-h6">Address</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="a.rue" label="Rue"/>
        <q-input v-model="a.codePostal" label="Code Postal"/>
        <q-input v-model="a.ville" label="Ville"/>
        <q-input v-model="a.pays" label="Pays"/>
      </div>

      <div class="text-h6">Details Bancaires</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="iban" label="IBAN" mask="#### #### #### ####"/>
      </div>

      <div class="q-py-md">
        <q-table title="Proprietes" :data="tabledata" :columns="columns" row-key="name"/>
      </div>

      <q-btn color="primary" icon="warning" label="Abandon" @click="abandon" class="q-ma-md"></q-btn>
      <q-btn color="red" icon="error" label="Enregister" @click="register" class="q-ma-md"></q-btn>

      <!-- <div class="q-gutter-sm">
        <q-checkbox v-model="teal" label="Teal"/>
      </div>

      <q-date></q-date>-->
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data: function() {
    return {
      a: {
        firstName: '',
        lastName: '',
        rue: '',
        codePostal: '',
        ville: '',
        pays: 'France',
        iban: ''
      },
      columns: [
        { name: 'name', field: 'name', required: true, label: 'Nom', align: 'left', sortable: true},
        { name: 'contract', field: 'contract', align: 'center', label: 'Contrat', sortable: true },
        { name: 'loue', field: 'loue', align: 'center', label: 'Loue', sortable: true }
      ],
      tabledata: [{ name: 'aaa', contract: 'A1234432', loue: 'no' }]
    }
  },
  methods: {
    // save: function() {
    //   alert(this.a.firstName)
    // },
    // notify: function() {
    //   alert('notify clicked')
    // },

    //  Send filled in structure 'a' to backend for registration
    abandon: function() {},
    register({ commit }, a) {
      return axios.post('api/auth/register', form).then(response => {
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
