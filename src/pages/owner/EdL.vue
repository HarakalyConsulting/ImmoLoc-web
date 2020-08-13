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

export default {
  name: "EdL",
  model: "",
  props: {
    data: {type: Object, required: true}
  },
  methods:{
    load: {

    },
    save: {

    }
  },
  created() {
    //  take EDL id from the path
    this.userId = this.$route.params.id;
    //  load user data at opening of the page ....
    this.$axios.get('http://localhost:8888/api/v1/user/' + id)
      .then(response => {
        //  get propertis list
        this.list = response.data;
        if (owner) {
          this.$axios.get('http://localhost:8888/api/v1/owner/property/list/' + id)
            .then(list => {
            })
            .catch(err => {
            })
        }
      })
      .catch(err => alert(err));
  }
}
</script>

<style scoped>

</style>
