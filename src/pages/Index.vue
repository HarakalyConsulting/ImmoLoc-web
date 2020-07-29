<template>
  <q-page class="flex flex-center">
        <div class="row">
            <div class="col-12 bg-yellow text-center">
                <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
            </div>
            <div class="col-6 q-pa-lg bg-deep-purple-2">
                <div class="text-h4 text-weight-light">Proprietaire</div>
                <div class="text-body1">Suivi des candidates, payments, etats-des-lieux, 
                  en toute transparence et confiance</div>
                <q-btn unelevated color="primary" label="Enter" to="owner/login"></q-btn>
            </div>
            <div class="col-6 q-pa-lg bg-indigo-2">
                <div class="text-h4 text-weight-light">Locataire</div>
                <div class="text-body1">Trop de papraçe? Trop complications ? 
                  Choisisez ImmoLoc. On vous guider en toute trabnsparence travers le proces 
                  de location immobiliere en France</div>
                <q-btn unelevated color="primary" label="Enter" to="lodger/login"></q-btn>
            </div>
        </div>
  </q-page> 
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
