<script>
import MainLayout from '../../layouts/MainLayout.vue';
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
        {
          name: 'name',
          field: 'name',
          required: true,
          label: 'Nom',
          align: 'left',
          sortable: true
        },
        {
          name: 'contract',
          field: 'contract',
          align: 'center',
          label: 'Contrat',
          sortable: true
        },
        {
          name: 'loue',
          field: 'loue',
          align: 'center',
          label: 'Loue',
          sortable: true
        }
      ],
      tabledata: [{ name: 'aaa', contract: 'A1234432', loue: 'no' }]
      // build function with a call to blockchain to get list of contracts
    }
  },
  methods: {
    save({ commit }, a) {      alert('Donnees enregistrees')
      // <MainLayout name="llll"></MainLayout>

      axios.post('api/auth/register', form).then(response => {
        commit('login', {
          token: response.data.token,
          user: response.data.user
        })
        setAxiosHeaders(response.data.token)
      }) //.then(ret) => {if (ret == undefined) alert("Login failure"); else }
    }
  }
}
</script>


<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h6">Profile proprietaire</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="a.lastName" label="Nom" />
        <q-input v-model="a.firstName" label="Prenom" />
      </div>

      <div class="text-h6">Address</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="a.rue" label="Rue" />
        <q-input v-model="a.codePostal" label="Code Postal" />
        <q-input v-model="a.ville" label="Ville" />
        <q-input v-model="a.pays" label="Pays" />
      </div>

      <div class="text-h6">Details Bancaires</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="iban" label="IBAN" mask="#### #### #### ####" />
      </div>

      <!-- <div class="q-py-md"> -->
      <div class="q-pa-sm">
        <q-table
          title="Proprietes"
          :data="tabledata"
          :columns="columns"
          row-key="name"
        />
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

