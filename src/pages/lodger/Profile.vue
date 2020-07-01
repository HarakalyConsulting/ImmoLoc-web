<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h6">Profile Locataire</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="lastName" label="Nom"/>
        <q-input v-model="firstName" label="Prenom"/>
      </div>

      <div class="text-h6">Address</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="rue" label="Rue"/>
        <q-input v-model="codePostal" label="Code Postal"/>
        <q-input v-model="ville" label="Ville"/>
        <q-input v-model="pays" label="Pays"/>
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
      firstName: '',
      lastName: '',
      rue: '',
      codePostal: '',
      ville: '',
      pays: 'France',
      iban:""
    }
  },
  methods: {
    save: function() {
      alert(this.firstName)
    },
    abandon: function() {
    },
    notify: function() {
      alert('notify clicked')
    },
    register ({commit}, form) {
      return axios.post('api/auth/register', form)
      .then(response => {
        commit('login', {token: response.data.token, user: response.data.user})
        setAxiosHeaders(response.data.token)
      })
    }
  }
}
</script>
