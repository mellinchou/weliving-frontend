<template>
  <div class="profileCard">
    <img v-bind:src="houseProfile.photos[0]" alt="House Picture" class="cropProfilePic" />
    <div class="cardContainer">
      <table class="parent" style="height:60px;">
        <tr>
          <td class="child" width="20%">
            <img v-bind:src="houseProfile.host_name[0].profile_pic" alt="Host Avatar" class="image-cropper" />
          </td>
          <td class="child" width="50%">
            <h3>{{houseProfile.location[1]}}&nbsp;{{houseProfile.location[2]}}</h3>
            <h5>by {{houseProfile.host_name[0].name}}</h5>
          </td>
        </tr>
      </table>

      <p>{{houseProfile.theme.slice(0,16)}}</p>
      <br />
      <h5>NT${{houseProfile.price}}/月&nbsp;&nbsp;</h5>
      <h5 class="right">
        <div v-for="i in houseProfile.reviews" class="inline">
          <i class="star icon"></i>
        </div>
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  props: ["houseProfile"]
};
</script>

<style scoped>
.cardContainer {
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  overflow: hidden;
  width: 90%;
}
.profileCard {
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: left;
  font-family: arial;
  display: inline-block;
  margin: 15px;
  height:400px;
}
h5,
p {
  color: #797d7f;
  display: inline-block;
  margin-top: 8px;
  margin-bottom: 8px;
}

.right {
  float: right;
}

.button {
  background-color: #fff;
  border: none;
  border-radius: 4px;
  color: #494848;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  height: 35px;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  width: auto;
}
.button:hover {
  opacity: 0.7;
  background: #f4f4f4;
}

.image-cropper {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
}
.cropProfilePic {
  width: 100%;
  height: 200px;
  overflow: hidden;
  object-fit: cover;
}
</style>