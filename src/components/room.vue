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
export default
{
  name: "room",
  props:
  {
      data:  { type: Object, required: true }
  },
  types:[{name:'studio',rooms:1},
    {name:'T1',rooms:2},
    {name:'T2',rooms:3},
    {name:'T3',rooms:4},
    {name:'T4',rooms:5},
    {name:'T5',rooms:6}
  ]
}
</script>
