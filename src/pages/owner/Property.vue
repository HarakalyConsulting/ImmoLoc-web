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

        <div class="q-pa-md" style="max-width: 350px">
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


        </div>


      </div>
<!--    </div>-->
  </q-page>
</template>

<script>
export default {
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
        data:['q','w'],
        id:0,
      }
    }
  }
}
</script>

<style scoped>

</style>
