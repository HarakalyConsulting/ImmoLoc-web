<script>
  // https://serversideup.net/drag-and-drop-file-uploads-with-vuejs-and-axios/
  export default {
    name: 'PageIndex',
    data: function () {
      return {
        step: 1,
        firstName: '',
        lastName: '',
        rue: '',
        codePostal: '',
        town: '',
        pays: 'France',
        iban: "",
        dragAndDropCapable: false,
        files: []
      }
    },
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
          ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (evt) {
            this.$refs.fileform.addEventListener(evt, function (e) {
              e.preventDefault();
              e.stopPropagation();
            }.bind(this), false);
          }.bind(this));
          this.$refs.fileform.addEventListener('drop', function (e) {
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
              this.files.push(e.dataTransfer.files[i]);
            }
          }.bind(this));
        }
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


<template>
  <q-page class="q-mt-lg q-pa-md bg-grey-2">
    <div>
      <div class="text-h6">Profile Locataire</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="lastName" label="Nom"/>
        <q-input v-model="firstName" label="Prenom"/>
      </div>

      <div class="text-h6">Address</div>
      <div class="q-gutter-md row items-start">
        <q-input v-model="rue" label="Rue"/>
        <q-input v-model="codePostal" label="Code Postal"/>
        <q-input v-model="ville" label="Ville"/>
        <q-input v-model="pays" label="Pays"/>
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
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.

            <q-stepper-navigation>
              <q-btn @click="step = 2" color="primary" label="Continue"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Documents a fournir"
            icon="assignment"
            :done="step > 2">
            An ad group contains one or more ads which target a shared set of keywords.

            <q-stepper-navigation>
              <q-btn @click="step = 3" color="primary" label="Continue"/>
              <q-btn @click="step = 1" class="q-ml-sm" color="primary" flat label="Back"/>
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Ad template"
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

