<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"></img>
    <br>
    <div class="row">
      <div class="col">
        <h3>Proprietaire</h3>
        jgfjhgejrfle
        <br>
        <q-btn color="primary" icon="warning" label="Join" @click="login" class="q-ma-md"></q-btn>

      </div>
      <div class="col">
        <h3>Locataire</h3>
        jbfkjgebjgkek
        <br>
        <q-btn color="primary" icon="warning" label="Join" @click="abandon" class="q-ma-md"></q-btn>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
