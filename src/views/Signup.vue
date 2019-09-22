
<template>
  <div class="background">
    <div class="form">
      <ValidationObserver v-slot="{ passes }">
        <form @submit.prevent="passes(registerSubmit)">
          <div class="component">
            <span>註冊</span>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">
                <ValidationProvider name="name" rules="required" v-slot="{ errors }">First Name</ValidationProvider>
              </div>
              <div class="col-md-70">
                <input
                  type="text"
                  v-model="FirstName"
                  id="FirstName"
                  name="firstname"
                  placeholder="First name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">
                <ValidationProvider name="LastName">Last Name</ValidationProvider>
              </div>
              <div class="col-md-70">
                <input
                  type="text"
                  v-model="LastName"
                  id="LastName"
                  name="lastname"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">
                <legend>Gender</legend>
              </div>
              <div class="col-md-70">
                <ValidationProvider class="radio-inline" for="gridRadios1">
                  <input
                    type="radio"
                    v-model="Gender"
                    name="gender"
                    id="GenderMale"
                    value="Male"
                    checked
                  /> Male
                </ValidationProvider>
                <ValidationProvider class="radio-inline" for="gridRadios2">
                  <input
                    type="radio"
                    v-model="Gender"
                    name="gender"
                    id="GenderFemale"
                    value="Female"
                  /> Female
                </ValidationProvider>
                <ValidationProvider class="radio-inline" for="gridRadios2">
                  <input type="radio" v-model="Gender" name="gender" id="GenderOther" value="Other" /> Other
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">
                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">Email</ValidationProvider>
              </div>
              <div class="col-md-70">
                <input
                  type="email"
                  v-model="Email"
                  id="Email"
                  name="email"
                  placeholder="welcomeWeliving@gmail.com"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">
                <ValidationProvider for="tel">Telphone</ValidationProvider>
              </div>
              <div class="col-md-70">
                <input
                  type="tel"
                  v-model="Tel"
                  id="Tel"
                  name="phonenumber"
                  class="input-phonenumber"
                  placeholder="XX0800-5043 or 0900-123456"
                  required
                  pattern="[0-9]{8,10}"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">Birthday Date</div>
              <div class="col-md-70">
                <input type="date" v-model="BirthdayDate" name="bday" required />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">
                <ValidationProvider
                  name="password"
                  rules="required|min:6"
                  v-slot="{ errors }"
                >Password</ValidationProvider>
              </div>
              <div class="col-md-70">
                <input
                  type="password"
                  v-model="Password"
                  id="Password"
                  name="password"
                  placeholder="only letter、number,more than six"
                  pattern="[a-zA-Z0-9]{6,}"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="component">
              <div class="col-md-30">
                <ValidationProvider
                  name="password"
                  rules="required|min:6"
                  v-slot="{ errors }"
                >Password Check</ValidationProvider>
              </div>
              <div class="col-md-70">
                <input
                  type="password"
                  v-model="RePassword"
                  id="RePassword"
                  name="repassword"
                  placeholder="password again"
                  pattern="[a-zA-Z0-9]{6,}"
                  required
                />
              </div>
            </div>
          </div>
          <div class="component">
            <div class="col-md-50">
              <button
                class="SignUp"
                id="SignUp"
                v-on:click.prevent="SubmitToServer"
                type="submit"
              >Sign Up</button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-input-placeholder {
  color: #aaaaaa;
  font-size: 18px;
}
input[type="password"],
input[type="text"],
input[type="tel"]:not(:placeholder-shown) {
  background-color: aliceblue;
}
input[type="text"],
input[type="email"],
select {
  width: 320px;
  padding: 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input[type="date"],
select {
  width: 300px;
  padding: 5px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
}
.SignUp {
  width: 250px;
  height: 40px;
  border-radius: 15px;
  background-color: #e0ffff;
  font-size: 18px;
}
.SignUp:hover {
  background-color: #afeeee;
}
.component {
  border-radius: 15px;
  background-color: #f2f2f2;
}

.form {
  /* position: relative; */
  max-width: 550px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  background-color: white;
  margin: auto;
  text-align: center;
  line-height: 70px;
  border-radius: 15px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.background {
  padding-top: 500px;
  background-image: url('~/assets/showcase_background2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#GenderOther,
#GenderMale,
#GenderFemale {
  margin-left: 0px;
  width: 50px;
  height: 20px;
}
#Tel,
#Password,
#RePassword {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 320px;
}
#FooterBox {
  background-color: #a00200;
  line-height: 30px;
  font-size: 13px;
  text-align: center;
  color: #eee;
  padding: 100px 0px;
}
#FooterDiscript {
  font-family: Cursive;
  font-size: 20px;
  color: white;
}
.col-md-30 {
  float: left;
  width: 30%;
  background-color: #f2f2f2;
}
.col-md-50 {
  display: inline-block;
  width: 50%;
  background-color: #f2f2f2;
}
.col-md-70 {
  float: left;
  width: 70%;
  background-color: #f2f2f2;
}
</style>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";


export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      FirstName: "",
      LastName: "",
      Gender: "",
      Email: "",
      Tel: "",
      BirthdayDate: "",
      Password: "",
      RePassword: ""
    };
  },
  methods: {
    SubmitToServer() {
      if (this.Password == this.RePassword) {
        console.log("Submitting to server!");
        alert("congratulation!\nThanks for your registration");

        this.$http
          .post("http://jsonplaceholder.typicode.com/posts", {
            FirstName: this.FirstName,
            LastName: this.LastName,
            Gender: this.Gender,
            Email: this.Email,
            Tel: this.Tel,
            BirthdayDate: this.FirstNBirthdayDateame,
            Password: this.Password,
            RePassword: this.RePassword
          })
          .then(function(data) {
            console.log(data);
          });
      } else {
        console.log("Fail!");
        alert("your password do not be the same as password check!");
      }
    }

    // Check:function(){
    //   const isValid=await this.$validator.validateAll()
    //   if (isValid){
    //     this.$http
    //       .post("http://jsonplaceholder.typicode.com/posts", {
    //         FirstName: this.FirstName,
    //         LastName: this.LastName,
    //         Gender: this.Gender,
    //         Email: this.Email,
    //         Tel: this.Tel,
    //         BirthdayDate: this.FirstNBirthdayDateame,
    //         Password: this.Password,
    //         RePassword: this.RePassword
    //       })
    //       .then(function(data) {
    //         console.log(data);
    //       });
    //   }
    // }
  }
};
</script>