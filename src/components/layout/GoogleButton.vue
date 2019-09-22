<template>
  <button v-google-signin-button="clientId" class="google-signin-button"><i class="google icon white"></i> Continue with Google</button>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: 'Your_Google_Client-Id'
  }),
  methods: {
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      alert("Sorry, this function is still under development :(");
      console.log(error)
    }
  }
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: #DE4B39;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  margin:5px;
  font-weight: bold;
  padding: 10px 20px 25px 20px;
  width:240px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
.white{
    color:white;
}
</style>