<template class="Room">
  <div class="col">
    <div class="self-center text-h6 no-outline" :ref="r.name" tabindex="0" style="min-width: 100px">
      {{ r.name }}
    </div>
    <div v-for="l in r.findings" :key="l.name">
      <div class="row">
        <div class="self-center text-weight-bold no-outline" tabindex="0" style="min-width: 100px">
          {{ l.name }}
        </div>

        <q-select label="Etat" v-model="l.state" :options="options" @click="typeSelect"
                  style="min-width: 200px"/>
        <q-input style="min-width: 400px" v-model="l.note" outlined/>
        <q-btn round color="secondary" icon="edit"/>
      </div>
    </div>
  </div>
</template>

<script>

import { extend } from 'quasar'

export default {
  name: "room",
  room() {
    return [
    {"name": "porte", "state": "", "note": "", "media": []},
    {"name": "fenetre", "state": "", "note": "", "media": []},
    {"name": "plafond", "state": "", "note": "", "media": []},
    {"name": "sol", "state": "", "note": "", "media": []},
    {"name": "mur 1", "state": "", "note": "", "media": []},
    {"name": "mur 2", "state": "", "note": "", "media": []},
    {"name": "mur 3", "state": "", "note": "", "media": []},
    {"name": "mur 4", "state": "", "note": "", "media": []}
  ]},
  props: {
    r: {type: Object, required: true}
  },
  methods: {
  },
  data() {
    return {
      avalue: '',
      options: ['Tres bon', 'Bon', 'Use', 'Sale', 'Tres sale', 'N/A']
    }
  }
}
</script>
