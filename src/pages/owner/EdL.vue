<template>
  <!--  <section :class="edl" style="max-width: 350px">-->
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Etats des Lieux</div>
      <div class="q-gutter-md col items-start">
        <div v-for="r in this.edl">
          <div v-for="(value, name) in r">
            <q-select v-bind:label="name" v-model="r.value" :options="options"
                      @click="typeSelect" style="min-width: 100px"/>
          </div>
        </div>

      </div>
    </div>
  </q-page>
  <!--  </section>-->
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
      avalue: '',
      options: ['Tres bon', 'Bon', 'Use', 'Sale', 'Tres sale']
    }
  },
  // props: {
  //   edl: {type: Object, required: true}
  // },
  components: {
    'room-component': roomComponent
  },
  created() {
    //  take appart id from the path
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
