<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Company - {{ usertype }}</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="purple-4" to="register"/>
            </div>
          </q-card-section>

          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="form.email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email"/>
                </template>
              </q-input>
              <q-input square clearable v-model="form.password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem"/>
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem"/>
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem"/>
              </q-btn>
            </div>
          </q-card-section>

          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Sign In" @click="login"/>
          </q-card-actions>

<!--          <q-card-section class="text-center q-pa-sm">-->
<!--            <a class="text-grey-6" href="register">Forgot your password?</a>-->
<!--          </q-card-section>-->
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      usertype: '',
      form: {}
    };
  },
  methods: {
    login() {
      this.$axios.post('http://localhost:8888/api/v1/auth/login', this.form)
        .then(response => {
          this.$store.commit('main/token', response.headers.Authorization);
          this.$store.commit('main/toolbarMessage', response.data.name);

          this.$router.push(this.usertype + '/../profile/' + response.data.id);
          // { "data": { "name": "Robert Harakaly", "id": 823754,
          // "token": "hskghfiruegbsmbsjhbir34y3hb" }, "status": 200, "statusText": "OK",
          // "headers": { "content-length": "76", "content-type": "application/json;
          // charset=utf-8" }, "config": { "url": "http://localhost:8888/api/v1/auth/login",
          // "method": "post", "data": "{\"email\":\"dd\",\"username\":\"\",\"password\":\"dd\"}",
          // "headers": { "Accept": "application/json, text/plain, */*", "Content-Type":
          // "application/json;charset=utf-8" }, "transformRequest": [ null ],
          // "transformResponse": [ null ], "timeout": 0, "xsrfCookieName": "XSRF-TOKEN",
          // "xsrfHeaderName": "X-XSRF-TOKEN", "maxContentLength": -1 }, "request": {} }
        }).catch(err => alert("User doesn't exist:" + err));
    },
  },
  created() {
    this.usertype = this.$route.params.usertype;
  }
}
</script>
