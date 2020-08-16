<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div class="col">
      <div class="text-h4">Dossier de locataire</div>
      <div class="text-h5">Documents a telecharger</div>

      <q-uploader
        url="http://localhost:4444/upload"
        color="teal"
        flat
        bordered
        style="max-width: 300px"
      />

      <q-uploader
        label="Auto Uploader"
        auto-upload
        url="http://localhost:4444/upload"
        multiple
      />

      <q-btn label="Enregistrer"/>
      <q-btn label="Confirmer dossier"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LodgerFile",
  data(){
    return {
      dossier:{}
    }
  }
}
</script>

<style scoped>

</style>
