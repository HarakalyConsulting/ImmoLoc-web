<template class="Room">
  <section :class="data.id" style="max-width: 350px">
    <div class="text-h6" >Chambre {{data.name}} </div>
    <div v-for="(value, name) in data">
      <q-input v-bind:label="name" v-model="avalue"/>
    </div>
    <hr>
  </section>
</template>

<script>
export default {
  name: "room",
  props: {
      data:  { type: Object, required: true }
  }
}
</script>
