<template class="Room">
  <section :class="data.id" style="max-width: 350px">
    <div class="text-h6">{{ data.name }}</div>
    <div v-for="(value, name) in data">
      <q-input v-bind:label="name" v-model="avalue"/>
    </div>
    <hr>
  </section>
</template>

<script>
export default {
  name: "room",
  room: {
    name: "", door: "", window: "", plafond: "", floor: "",
    wallA: "", wallB: "", wallC: "", wallD: ""},
  props: {
    data: {type: Object, required: true}
  },
  methods: {
  }
}
</script>
