<template class="Room">
  <div class="text-h6">Chambre</div>
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
</template>

<script>
export default {
  name: "room"
}
</script>

<style scoped>

</style>
