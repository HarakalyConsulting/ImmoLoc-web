<template class="Room">
  <section :class="data.color">
    <div>ROOM COMPONENT START</div>
    <div class="text-h6">Chambre {{data.id}} </div>
    <div v-for="value in data">
      <div>{{value}}</div>
    </div>
    <div>ROOM COMPONENT END</div>
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
