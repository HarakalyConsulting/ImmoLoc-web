<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">address</div>
      <div class="q-gutter-md row items-start">
        <q-input label="Nom" v-model="address.name"/>
        <!--  TODO:      new line here .... -->
        <q-input label="Rue" v-model="address.street"/>
        <q-input label="Post Code" v-model="address.codePostal"/>
        <q-input label="Ville" v-model="address.town"/>
        <q-input label="Pays" v-model="address.country"/>

        <q-select label="Type" v-model="model" :options="options"
                  @click="typeSelect" style="min-width: 100px"/>

        <div v-if="model === 'outre'" class="q-mt-md bg-grey-2">
          <q-input v-model="model" type="number" label="Nombre des chambres"/>
        </div>
      </div>

      <div v-if="model != null" >
        <q-btn label="Creer description des lieux"
               @click="callFactory()"/>
      </div>

      <div v-if="inventory != null" >
        <div class="text-h6">Description des lieux</div>

        <div class="q-pa-md bg-yellow">
          <div v-for="r in inventory.premises" :key="index">
            <room-component v-bind:r.sync="r" ></room-component>
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
    callFactory(){
      let setup = {setup : {
        "propertyID":"13432",
        "propertyType":this.model
      }}
      this.$axios.post('http://localhost:8888/api/v1/inventory/factory', setup)
        .then(result => {
          this.inventory = result.data.inventory;
          console.dir(this.inventory);
        })
        .catch(err => alert(err))
    },
    commit(r) {
      this.$axios.post('http://localhost:8888/api/v1/inventory', this.inventory)
        .then(result => alert(result))
        .catch(err => alert(err))
    },
    typeSelect() {
    },
  },
  data() {
    return {
      name: "Property",
      inventory: null,
      model: null,
      descriptionDisabled: true,
      address: {name: '', street: '', codePostal: '', town: '', country: 'France'},
      options: ['Studio', 'Chambre', 'T1', 'T2', 'T3', 'T4', 'T5', 'outre'],
    }
  }
}
</script>
