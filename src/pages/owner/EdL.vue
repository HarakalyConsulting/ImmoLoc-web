<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h5">Etats des Lieux</div>
      <div class="q-gutter-md col items-start">
        <div class="text-h6">Date: {{this.edl.created}}</div>
        <div v-for="r in this.edl">
          <template>
            <div class="row">
              <div class="self-center full-width text-h6 no-outline" tabindex="0" style="min-width: 100px">{{
                  r.name }}
              </div>
              <div v-for="l in r.findings">
                <div class="row">
                  <div class="self-center no-outline" tabindex="0" style="min-width: 100px">{{ l.name }}</div>

                  <q-select label="Etat" v-model="l.state" :options="options" @click="typeSelect"
                            style="min-width: 200px"/>
                  <q-input v-model="l.note" outlined/>
                  <q-btn round icon-right="edit"/>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </q-page>
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
  components: {
    'room-component': roomComponent
  },
  created() {
    let query;
    //  take appart id from the path
    this.apptId = this.$route.params.id;
    if (this.$route.query.test || false)
      query = "?last=true"
    //this.$route.fullPath
    //  load user data at opening of the page ....
    this.$axios.get('http://localhost:8888/api/v1/edl/' + this.apptId + query)
      .then(response => {
        this.edl = response.data.edl.findings;
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
