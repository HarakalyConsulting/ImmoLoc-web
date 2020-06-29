<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h6">Proprietaires details</div>
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

      <div class="q-pa-md">
        <q-table title="Proprietes" :data="data" :columns="b.columns" row-key="name"/>
      </div>

      <q-btn color="primary" icon="warning" label="Abandon" @click="abandon" class="q-ma-md"></q-btn>
      <q-btn color="red" icon="error" label="Enregister" @click="save" class="q-ma-md"></q-btn>

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
  columns: [
    { name: 'name', label: 'Name', field: 'name', sortable: true },
    { name: 'address', label: 'Address', field: 'address', sortable: true }
  ],
  data: function() {
    return [{ 
      a: {
        firstName: '',
        lastName: '',
        rue: '',
        codePostal: '',
        ville: '',
        pays: 'France'
     },
    b:{columns:''}
  }]},
  methods: {
    save: function () {
      alert(this.firstName)
    },
    abandon: function () {}
  }
}
</script>