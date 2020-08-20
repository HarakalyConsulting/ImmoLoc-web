<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Profile Locataire</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="user.lastName" label="Nom" readonly/>
        <q-input v-model="user.firstName" label="Prenom" readonly/>
      </div>

      <div class="text-h6">Address</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="user.rue" label="Rue"/>
        <q-input v-model="user.codePostal" label="Code Postal"/>
        <q-input v-model="user.ville" label="Ville"/>
        <q-input v-model="user.pays" label="Pays"/>
      </div>

      <div class="text-h6">Dossier</div>
      <div class="q-pa-sm">
        <q-stepper
          v-model="step"
          vertical
          color="primary"
          animated>
          <q-step
            :name="1"
            title="Situation sociale"
            icon="settings"
            :done="step > 1">
            <template>
              <div class="q-pa-md">
                <div class="q-gutter-sm">
                  <q-radio v-model="user.statut" val="salarie" label="Salarie" />
                  <q-radio v-model="user.statut" val="non-salarie" label="Non-salarie" />
                  <q-radio v-model="user.statut" val="etudiant" label="Etudiant" />
                  <q-radio v-model="user.statut" val="retraite" label="Retraite" />
                  <q-radio v-model="user.statut" val="autre" label="Autre" />
                </div>
              </div>
            </template>
            <q-stepper-navigation>
              <q-btn @click="step = 2" color="primary" label="Continue"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Documents a fournir"
            icon="assignment"
            :done="step > 2">
            Vous etes {{user.statut}}, les documents a fournir sont:

            <q-stepper-navigation>
              <q-btn @click="step = 3" color="primary" label="Continue"/>
              <q-btn @click="step = 1" class="q-ml-sm" color="primary" flat label="Back"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Gurantee"
            icon="assignment"
            :done="step > 3">
            This step won't show up because it is disabled.
            <q-stepper-navigation>
              <q-btn color="primary" label="Finish"/>
              <q-btn @click="step = 4" class="q-ml-sm" color="primary" flat label="Back"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="4"
            title="Create an ad"
            icon="add_comment"
            :done="step > 4">
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.

            <q-stepper-navigation>
              <q-btn color="primary" label="Finish"/>
              <q-btn @click="step = 2" class="q-ml-sm" color="primary" flat label="Back"/>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>

        <q-btn color="primary" icon="warning" label="Abandon" @click="abandon" class="q-ma-md"></q-btn>
        <q-btn color="red" icon="error" label="Enregister" @click="register" class="q-ma-md"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
// https://serversideup.net/drag-and-drop-file-uploads-with-vuejs-and-axios/
export default {
  name: 'PageIndex',
  data: function () {
    return {
      step: 1,
      user: {
        firstName: '',
        lastName: '',
        rue: '',
        codePostal: '',
        town: '',
        pays: 'France',
        iban: "",
        statut :"salarie",
        files: []
      },
      dragAndDropCapable: false,
    }
  },
  created() {
    //  take id from the path
    let userId = this.$route.params.id;
    this.$axios.get('http://localhost:8888/api/v1/user/' + userId)
      .then(response => {
        this.user.firstName = response.data.name;
        this.user.lastName = response.data.lastName;

      })},

  methods: [{
    determineDragAndDropCapable() {
      var div = document.createElement('div');
      return (('draggable' in div)
        || ('ondragstart' in div && 'ondrop' in div))
        && 'FormData' in window
        && 'FileReader' in window;
    },

    upload(e) {
      this.dragAndDropCapable = this.determineDragAndDropCapable();
      if (this.dragAndDropCapable) {
        // ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (evt) {
        //   this.$refs.fileform.addEventListener(evt, function (e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //   }.bind(this), false);
        // }.bind(this));
        this.$refs.fileform.addEventListener('drop', function (e) {
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            this.files.push(e.dataTransfer.files[i]);
          }
        }.bind(this));
      }
      this.files.forEach(function (file){
        this.$axios.post('http://localhost:8888/api/v1/upload', file)
        .catch(err => console.log(err));
      })
    },

    save: function () {
      alert(this.firstName);
    },

    abandon: function () {
    },
    notify: function () {
      alert('notify clicked')
    }
  }]
}
</script>
