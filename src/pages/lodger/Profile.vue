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
    </div>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated>
        <q-step
          :name="1"
          title="Select campaign settings"
          icon="settings"
          :done="step > 1">
          For each ad campaign that you create, you can control how much you're willing to
          spend on clicks and conversions, which networks and geographical locations you want
          your ads to show on, and more.

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Create an ad group"
          caption="Optional"
          icon="create_new_folder"
          :done="step > 2"
        >
          An ad group contains one or more ads which target a shared set of keywords.

          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Ad template"
          icon="assignment"
          disable
        >
          This step won't show up because it is disabled.
        </q-step>

        <q-step
          :name="4"
          title="Create an ad"
          icon="add_comment"
        >
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.

          <q-stepper-navigation>
            <q-btn color="primary" label="Finish" />
            <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
export default {
  step: 1,
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
