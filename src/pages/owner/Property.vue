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
      </div>

      <div class="q-gutter-md">
        <q-select v-model="model" :options="options" label="Type"
                  @click="typeSelect" style="max-width: 300px"/>

        <div v-if="model === 'outre'" class="q-mt-md bg-grey-5">
          <q-input v-model="model" type="number" label="Nombre des chambres"/>
        </div>
      </div>






      <div class="q-pa-md bg-yellow">
        <div>{{model.rooms}}</div>
        <div v-for="room in model.rooms" :key="index">
          <room-component :data="room"></room-component>
        </div>

      </div>

    </div>
  </q-page>
</template>

<script>

import roomComponent from 'components/room.vue';

export default {
  components: {
    'room-component': roomComponent
  },
  methods: {
    typeSelect() {
    }
  },

  data() {
    return {
      name: "Property",
      model: null,
      app: {
        name: '',
        street: '',
        codePostal: '',
        town: '',
        country: 'France'
      },
      room:{
        door:"",
        window:"",
        roof:"",
        floor:"",
        wallA:"",
        wallB:"",
        wallC:"",
        wallD:""
      },
      options: [
        'Studio', 'T1', 'T2', 'T3', 'T4', 'T5', 'outre'
      ],
      plans: {
        data: [
          {id: 1, label: 'Room-1', color: 'bg-red'},
          {id: 2, label: 'Room-2', color: 'bg-green'},
          {id: 3, label: 'Room-3', color: 'bg-blue'}
        ],
        id: 0,
      }
    }
  }
}
</script>
