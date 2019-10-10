<template>
  <div>
    <div class="background">
      <img src="cute.jpg" class="ProfilePerson" alt="Person Picture" />
      <main>
        <div class="btn">
          <button class="Profile" id="Profile">Profile</button>
        </div>
        <div class="btn">
          <button class="Host" id="Host">Host</button>
        </div>
      </main>
      <table>
        <tr>
          <div class="title">
            <span>House Information</span>
          </div>
        </tr>
        <tr>
          <td>Title</td>
          <td></td>
        </tr>
        <tr>
          <td>Theme</td>
          <td></td>
        </tr>
        <tr>
          <td>Team</td>
          <td></td>
        </tr>
        <tr>
          <td>Room</td>
          <td></td>
        </tr>
        <tr>
          <td>Location</td>
          <td></td>
        </tr>
        <tr>
          <td>Info</td>
          <td></td>
        </tr>
      </table>
      <div class="title">
        <span>Pictures of the House</span>
        <div class="picture"></div>
      </div>
      <div class="btn">
        <button class="Edit" id="Edit">Edit profile</button>
      </div>
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
  background-color: rgba(255, 255, 255, 1);
  font-size: 16px;
  margin-left: 25px;
  margin-right: 25px;
}

.background {
  padding-top: 20px;
  background-image: url(bridge1.jpg);
  box-shadow: 25px 25px 50px white inset, -25px -25px 50px white inset;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 25px 120px;
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
  margin-top: 25px;
  font-size: 30px;
  font-style: oblique;
  margin-left: 24%;
}

.text {
  height: 100px;
}

table {
  width: 800px;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

td {
  height: 50px;
  white-space: pre-line;
  border-bottom: 1px solid #dddddd;
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
.picture {
  width: 500px;
  height: 500px;
  color: blue;
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