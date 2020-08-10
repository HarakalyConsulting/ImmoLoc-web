<template>
  <section :class="data.id" style="max-width: 350px">
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Etats des Lieux</div>
      <div class="q-gutter-md row items-start">
        <q-input label="Nom" v-model="app.name"/>
        <!--  TODO:      new line here .... -->
        <q-input label="Rue" v-model="app.street"/>
        <q-input label="Post Code" v-model="app.codePostal"/>
        <q-input label="Ville" v-model="app.town"/>
        <q-input label="Pays" v-model="app.country"/>

        <q-select label="Type" v-model="model" :options="options"
                  @click="typeSelect" style="min-width: 100px"/>
      </div>
    </div>
  </q-page>
  </section>
</template>

<script>
// this.usertype = this.$route.params.id;
load: {

}
save: {

}
export default {
  name: "EdL",
  model: "",
  props: {
    data: {type: Object, required: true}
  }
}
</script>

<style scoped>

</style>
