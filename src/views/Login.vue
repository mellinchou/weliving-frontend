<template>
    <div >
        <section class="content center">
        <div class="container whiteForm">
            <h2>Login</h2>
      <hr/>
      <form action="#" @submit.prevent="login">
        <input type="text" id="account" placeholder="Email" v-model="email"/>
        <br />
        <input type="password" id="password" placeholder="Password" v-model="password"/><br>
        <button class="button loginButton" type="submit">Login</button>
        <!-- <router-link to="/"><button class="button loginButton" v-on:click="login">登入</button></router-link> -->
      </form>
      <div class="hr-sect">or</div>
      <GoogleButton/><br>
      <FacebookButton/>
      <p class="signup">Don't have and account? <router-link to="/signup" class="loginlink">Sign up</router-link></p>
        </div>  
    
        </section>
    </div>
</template>

<script>
import GoogleButton from "../components/layout/GoogleButton"
import FacebookButton from "../components/layout/FacebookButton"
export default {
    name:"login",
    components:{
        GoogleButton,
        FacebookButton
    },
    data() {
    return {
      email:"",
      password:""
    };
  },
    methods:{
      // login:function(){
      //   this.$http
      //     .post("http://3.227.148.97:3000/member/login", {
      //       email:this.email,
      //       password:this.password
      //     })
      //     .then(function(data) {
      //       alert("Login Success");
      //     });
      // }
      login:function(){
        this.$store.dispatch('retriveToken',{
          email:this.email,
          password:this.password
        })
      }
    }
}
</script>

<style scoped>
  .whiteForm{
    background: #f4f4f4;
    opacity: 0.9;
    width: 30%;
    border-radius:10px;
    padding: 3%;
  }
  @media only screen and (max-width: 1000px) {
    .whiteForm{
      width: 60%;
    }
  }
  @media only screen and (max-width: 400px) {
    .whiteForm{
      width: 90%;
    }
  }
  .loginButton{
    background: #494848;
    color:#fff;
    width:240px;
    margin:8px;
  }
  .loginButton:hover{
    background: #797D7F;
    color:#fff;
  }
  input{
      width:240px;
      margin:8px;
  }
  hr{ 
    border-top: 1px solid#C7C6C5;
    margin:20px; 
    margin-left:15%;
    margin-right:15%;   

  } 
  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #C7C6C5;
    margin: 8px 0px;
  }
  .hr-sect::before,
  .hr-sect::after {
    content: "";
    flex-grow: 1;
    background: #C7C6C5;
    height: 1.5px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
  .hr-sect::before{
    margin-left:15%;
  }
  .hr-sect::after{
    margin-right:15%;
  }
  .signup{
    font-size: 13px;
    margin:5px;
  }
  .loginlink{
    color:#3B5797;
    
  }
  .loginlink:hover{
    text-decoration: underline;
    color:#797D7F;
  }
</style>