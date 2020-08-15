<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Profile bien</div>
      <div class="q-gutter-md col items-start">
        <div class="text-h7">Nom: {{this.property.name}}</div>
        <div class="text-h7">Contrat ID: {{this.property.contract}}</div>
        <div class="text-h7">Registered: {{this.property.registered}}</div>
        <div class="text-h7">lastChange: {{this.property.lastChange}}</div>
        <div class="text-h7">Addresse: {{this.property.address}}</div>
        <q-separator />
        <q-btn label="Open defects"/>
        <q-btn label="Etats des Lieux" @click="getEdls(true)"/>
      </div>
    </div>
  </q-page>

</template>

<script>
export default {
  name: "PropertyView",
  data() {
    return {
      property : {},
      edl : {},
      defects:[],
      apptId:''
  }},
  methods:{
    getEdls(last){
      this.apptId = this.$route.params.id;
      this.$router.replace('/owner/edl/' + this.apptId + '?last=true');
    }
  },
  created() {
    //  take appart id from the path
    this.apptId = this.$route.params.id;
    this.$axios.get('http://localhost:8888/api/v1/owner/property/' + this.apptId)
      .then(response => {
        this.property = response.data.property;
      })
      .catch(err => {
        alert(err);
        this.edl = [];
      });
  }
}
</script>

<style scoped>

</style>
