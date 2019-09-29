
<template>
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
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 16px;
  /* border-style: groove; */
  /* border: none; */
  margin-left: auto;
  margin-right: 25px;
}

table {
  width: 700px;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

td {
  border-bottom: 1px solid #dddddd;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
}

.ProfilePerson {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
</script>