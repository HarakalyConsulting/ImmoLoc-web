<template>
  <section :class="edl" style="max-width: 350px">
    <q-page class="q-mt-lg q-pa-md bg-grey-2">
      <div>
        <div class="text-h6">Etats des Lieux</div>
        <div class="q-gutter-md row items-start">
          <!--          <q-input label="Nom" v-model="edl.name" readonly/>-->
          <!--          &lt;!&ndash;  TODO:      new line here .... &ndash;&gt;-->
          <!--          <q-input label="Rue" v-model="edl.street" readonly/>-->
          <!--          <q-input label="Post Code" v-model="edl.codePostal" readonly/>-->
          <!--          <q-input label="Ville" v-model="edl.town" readonly/>-->
          <!--          <q-input label="Pays" v-model=".country" readonly/>-->

          <div v-for="(value, name) in this.edl">
            <q-input v-bind:label="value" v-model="avalue" readonly/>
          </div>

        </div>
      </div>
    </q-page>
  </section>
</template>

<script>

import roomComponent from 'components/room.vue'

// this.usertype = this.$route.params.id;

export default {
  name: "EdL",
  model: "",
  data() {
    return {
      app: [],
      edl: [],
      avalue: ''
    }
  },
  // props: {
  //   edl: {type: Object, required: true}
  // },
  components: {
    'room-component': roomComponent
  },
  // methods: {
  //   edls() {
  //     this.apptId = this.$route.params.id;
  //     this.$axios.get('http://localhost:8888/api/v1/edl/' + this.apptId)
  //       .then(response => {
  //         this.edl = response.data.edl;
  //       })
  //       .catch(err => alert(err));
  //     return this.edl;
  //   }
  // },
  created() {
    //  take EDL id from the path
    this.apptId = this.$route.params.id;
    //this.$route.fullPath
    //  load user data at opening of the page ....
    this.$axios.get('http://localhost:8888/api/v1/edl/' + this.apptId)
      .then(response => {
        this.edl = response.data.edl;
      })
      .catch(err => {
        alert(err);
        this.edl = [];
      });
    console.dir(this.edl);
  }
}
</script>

<style scoped>

</style>
