<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Appartement</div>
<!--      <div class="q-pa-md" >-->
        <div class="q-gutter-md" >
          <q-select v-model="model" :options="options" label="Type"
                    @click="typeSelect" style="max-width: 300px"/>
<!--        </div>-->

        <div v-if="model === 'outre'" class="q-mt-md bg-grey-5">
          <q-input v-model="text" label="Standard" />
        </div>
      </div>

        <div class="q-pa-md bg-yellow" style="max-width: 350px">
            <!--
            <q-list highlight bordered separator :padding="true">
              <q-item
                highlight
                v-for="plan in plans.data"
                :data="plan"
                :key="plan.id"
                clickable
                @click="btn"
                v-ripple
                active-class="text-orange-10 mnu_active"
                class="q-pb-md"
              ></q-item>
              <room/>
          </q-list>
          -->


          <div v-for="(room, index) in plans.data" :key="index">
              <room-component :data="room"></room-component>
          </div>


        </div>


      </div>
<!--    </div>-->
  </q-page>
</template>

<script>

import roomComponent from 'components/room.vue';

export default
{
  components:
  {
    'room-component': roomComponent
  },
  methods:{
    typeSelect(){}
  },

  data () {
    return {
      name: "Property",
      model: null,
      options: [
        'Studio', 'T1', 'T2', 'T3', 'T4', 'T5', 'outre'
      ],
      plans:{
        data: [
          {id: 1, label: 'Room-1', color: 'bg-red'},
          {id: 2, label: 'Room-2', color: 'bg-green'},
          {id: 3, label: 'Room-3', color: 'bg-blue'}
          ],
        id:0,
      }
    }
  }
}
</script>

<style scoped>

</style>
