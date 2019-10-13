<template>
  <div>
    <img src="cute.jpg" class="ProfilePerson" alt="Person Picture" />
    <!-- <img v-bind:src="cute.jpg" alt="Person Picture" class="ProfilePerson" /> -->
    <div>
      <table>
        <tr>
          <td>Basic Information</td>
          <td>Personal Information</td>
        </tr>
        <tr>
          <td>Name</td>
          <td></td>
        </tr>
        <tr>
          <td>Email</td>
          <td></td>
        </tr>
        <tr>
          <td>Birthday</td>
          <td></td>
        </tr>
        <tr>
          <td>Phone number</td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <button class="Profile" id="Profile">Profile</button>
        <button class="Host" id="Host">Host</button>
      </table>
    </div>
  </div>
</template>

<style scoped>
#FooterBox {
  background-color: #a00200;
  line-height: 30px;
  font-size: 13px;
  text-align: center;
  color: #eee;
  padding: 100px 0px;
}

#Profile,
#Host {
  width: 150px;
  height: 40px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.55);
  font-size: 16px;
  margin-left: 25px;
  margin-right: 25px;
}

.background {
  padding-top: 50px;
  background-image: url(personfileBackground2.jpg);
  /* width: 1500px;
            height: 1200px; */
  /* opacity: 0.85; */
  /* filter: alpha(opacity=50); */
  box-shadow: 25px 25px 50px white inset, -25px -25px 50px white inset;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.Edit {
  width: 200px;
  height: 40px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin-left: 44%;
  margin-right: auto;
  margin-bottom: 10%;
  margin-top: 5%;
}

main {
  display: flex;
  justify-content: center;
}

main > .btn {
  flex: none;
  width: 200px;
  margin: 25px;
}

.title {
  margin: 15px;
  padding-top: 25px;
  font-size: 30px;
  font-style: oblique;
  font-weight: bold;
  margin-left: 22%;
}

.text {
  height: 100px;
}

table {
  width: 900px;
  border-collapse: collapse;
  padding-top: 25px;
  margin-left: auto;
  margin-right: auto;
}

td {
  width: 250px;
  height: 50px;
  white-space: pre-line;
  border-bottom: 0.1px solid grey;
  margin: auto;
  /* font-family:sans-serif; */
  font-size: 25px;
  /* color:grey; */
  /* font-weight:bold; */
  padding-left: 35px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
}

.ProfilePerson {
  border-radius: 50%;
  width: 175px;
  height: 175px;
  overflow: hidden;
  object-fit: cover;
  display: block;
  padding: 25px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
</script>