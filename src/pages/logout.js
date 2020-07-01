// const actions = {
//
//   ...
//
//     [AUTH_LOGOUT]: ({commit, dispatch}) => {
//   return new Promise((resolve, reject) => {
//     commit(AUTH_LOGOUT)
//     localStorage.removeItem('user-token') // clear your user's token from localstorage
//     resolve()
//   })
// }
// }
//
// When clicking on the logout button in one of your components responsible for logout <<logout.js>>:
//
// methods: {
//   logout: function () {
//     this.$store.dispatch(AUTH_LOGOUT)
//       .then(() => {
//         this.$router.push('/login')
//       })
//   }
// },
