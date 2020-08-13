<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Appartement</div>
      <div class="q-gutter-md row items-start">
        <q-input label="Nom" v-model="app.name"/>
        <!--  TODO:      new line here .... -->
        <q-input label="Rue" v-model="app.street"/>
        <q-input label="Post Code" v-model="app.codePostal"/>
        <q-input label="Ville" v-model="app.town"/>
        <q-input label="Pays" v-model="app.country"/>

        <q-select label="Type" v-model="model" :options="options"
                  @click="typeSelect" style="min-width: 100px"/>

        <div v-if="model === 'outre'" class="q-mt-md bg-grey-2">
          <q-input v-model="model" type="number" label="Nombre des chambres"/>
        </div>
      </div>

      <div v-if="model != null" disabled="this.descriptionDisabled">
        <div class="text-h6">Description des lieux</div>

        <div class="q-pa-md bg-yellow" style="max-width: 350px">
          <div v-for="r in rooms(3)" :key="index">
            <room-component :data="r"></room-component>
          </div>
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
    </div>
  </q-page>
</template>

<script>

import roomComponent from 'components/room.vue'

export default {
  components: {
    'room-component': roomComponent
  },
  methods: {
    commit(r) {
      this.$axios.post('http://localhost:8888/api/v1/owner/property/add', r)
        .then(result => alert("Property succesfully stored"))
        .catch(err => alert(err))
    },
    typeSelect() {
    },
    rooms(n) {
      let i;
      let r = [];

      for (i = 1; i <= n; i++) {
        r.push({...roomComponent.room, name: "Chambre " + i});
      }
      r.push({...roomComponent.room, name: "Cuisine"});
      r.push({...roomComponent.room, name: "WC"});
      r.push({...roomComponent.room, name: "SdB/SdE"});
      r.push({...roomComponent.room, name: "Toilette"});
      r.push({...roomComponent.room, name: "Couloir"});
      return r;
    },
  },
  data() {
    return {
      name: "Property",
      model: null,
      descriptionDisabled: true,
      app: {name: '', street: '', codePostal: '', town: '', country: 'France'},
      options: ['Studio', 'Chambre', 'T1', 'T2', 'T3', 'T4', 'T5', 'outre'],
    }
  }
}
</script>
