<template>
    <q-page class="flex flex-center">
        <div class="row">
            <div class="col-12 bg-yellow text-center">
                <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
            </div>
            <div class="col-6 q-pa-lg bg-green">
                <div class="text-h4 text-weight-light">Proprietaire</div>
                <p>Description</p>
                <q-btn unelevated color="primary" label="Enter" to="owner/login"></q-btn>
            </div>
            <div class="col-6 q-pa-lg bg-red">
                <div class="text-h4 text-weight-light">Locataire</div>
                <p>Description</p>
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
