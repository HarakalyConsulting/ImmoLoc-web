<template class="Room">
  <section :class="data.color">
    <div>ROOM COMPONENT START</div>
    <div class="text-h6">Chambre {{data.id}} </div>
    <div>{{data}}</div>
    <div>ROOM COMPONENT END</div>
    <q-input label="Porte" v-model="data.id"/>
    <hr>
    <!--
    <div class="q-gutter-md row items-start">
      <q-input label="Porte" v-model="a.rue"/>
      <q-input label="Fenetre" v-model="a.codePostal"/>
      <q-input label="Plafond" v-model="a.ville"/>
      <q-input label="Sol" v-model="a.pays"/>
      <q-input label="Mur 1" v-model="a.pays"/>
      <q-input label="Mur 2" v-model="a.pays"/>
      <q-input label="Mur 3" v-model="a.pays"/>
      <q-input label="Mur 4" v-model="a.pays"/>
    </div>
    -->
  </section>
</template>

<script>
export default
{
  name: "room",
  props:
  {
      data:  { type: Object, required: true }
  },
}
</script>

<style scoped>

</style>
