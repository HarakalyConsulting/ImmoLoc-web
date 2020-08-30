<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="back" color="purple-4" to="login"/>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input square clearable v-model="user.email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>
<!--              <q-input square clearable v-model="user.username" type="username" label="Username">-->
<!--                <template v-slot:prepend>-->
<!--                  <q-icon name="person"/>-->
<!--                </template>-->
<!--              </q-input>-->
              <q-input square clearable v-model="user.password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn
              unelevated
              size="lg"
              color="purple-4"
              class="full-width text-white"
              label="Register"
              @click="register"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      usertype : '',
      user: {}
    }
  },
  methods:{
    register(){
      this.$axios.post('http://localhost:8888/api/v1/auth/register', this.form)
        .then(response => {
          this.$store.commit('main/token', response.headers.Authorization);
          this.$store.commit('main/toolbarMessage', response.data.name);

          this.$router.push(this.usertype + '/../profile/')
        }).catch(err => alert("User doesn't exist:" + err));
    }
  },
  created() {
    this.usertype = this.$route.params.usertype;
  }
}
</script>
