<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h4">Etats des Lieux</div>
      <div class="q-gutter-md col items-start">
        <div class="text-h6">Nom: {{edl.name}}</div>
        <div class="text-h7">Date: {{edl.created}}</div>
        <div class="text-h7">Modifie: {{edl.lastChange}}</div>
        <div class="text-h7">Agent: {{edl.agent}}</div>
        <q-separator size="3pt"/>
        <div v-for="r in edl.findings" :key="r.name">
          <template>
            <div class="col">
              <div class="self-center text-h6 no-outline" :ref="r.name" tabindex="0" style="min-width: 100px">
                {{ r.name }}
              </div>
              <div v-for="l in r.findings" :key="l.name">
                <div class="row">
                  <div class="self-center text-weight-bold no-outline" tabindex="0" style="min-width: 100px">
                    {{ l.name }}
                  </div>

                  <q-select label="Etat" v-model="l.state" :options="options" @click="typeSelect"
                            style="min-width: 200px"/>
                  <q-input style="min-width: 400px" v-model="l.note" outlined/>
                  <q-btn round color="secondary" icon="edit"/>
                </div>
              </div>
            </div>
          </template>
          <q-btn round color="secondary" icon="add" @click="addDefect(r)"/>
          <q-separator/>
        </div>

        <q-btn label="Save"/>
        <q-btn label="Abandon"/>
        <div v-if="edl.state === 'saved'">
          <q-btn label="Owner signature"/>
          <q-btn label="Lodger signature"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

import roomComponent from 'components/room.vue'

// this.usertype = this.$route.params.id;

export default {
  name: "EdL",
  model: "",
  methods:{
    addDefect(ref)
    {
      for(let i in this.edl)
      {
        if(i.name == ref.name)
        {
          i.findings.push({name:'new'})
        }
      }
    },
    typeSelect()
    {
      alert('type select');
    }
  },
  data() {
    return {
      app: [],
      edl: [],
      avalue: '',
      options: ['Tres bon', 'Bon', 'Use', 'Sale', 'Tres sale']
    }
  },
  components: {
    'room-component': roomComponent
  },
  created() {
    let query = '';
    //  take appart id from the path
    this.apptId = this.$route.params.id;
    if (this.$route.query.last || false)
      query = "?last=true"
    this.$axios.get('http://localhost:8888/api/v1/edl/' + this.apptId + query)
      .then(response => {
        this.edl = response.data.edl;
      })
      .catch(err => {
        alert(err);
        this.edl = [];
      });
  }
}
</script>

<style scoped>

</style>
