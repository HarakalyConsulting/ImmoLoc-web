<template>
  <q-page class="flex flex-center">
    <q-btn color="primary" icon="warning" label="Notify" @click="notify" class="q-ma-md"></q-btn>
    <q-btn color="red" icon="error" label="Error" @click="notify" class="q-ma-md"></q-btn>
    <q-date></q-date>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>