<template>
  <button v-facebook-signin-button="appId" class="facebook-signin-button"><i class="facebook f icon white"></i> Continue with Facebook</button>
</template>

<script>
import FacebookSignInButton from 'vue-facebook-signin-button-directive'
export default {
  directives: {
    FacebookSignInButton
  },
  data: () => ({
    appId: 'Your_Facebook_App-Id'
  }),
  methods: {
    OnFacebookAuthSuccess (idToken) {
      alert("Sorry, this method is under maintenance :(");
      // Receive the idToken and make your magic with the backend
    },
    OnFacebookAuthFail (error) {
      alert("Sorry, this method is under maintenance :(");
      console.log(error)
    }
  }
}
</script>

<style>
.facebook-signin-button {
  color: white;
  background-color: #3B5797;
  width:240px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  margin:5px;
  font-weight: bold;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.white{
    color:white;
}
</style>