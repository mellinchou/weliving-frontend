<template>
  <div class="houseCard right_indent">
    <table class="parent">
      <tr>
        <td class="child_picture">
          <img v-bind:src="houseProfile.photos[0]" alt="House Picture" class="profile_pic" />
        </td>
        <td class="child">
          <h2>{{houseProfile.house_name}}</h2>
          <div v-for="i in houseProfile.location" class="inline"><h4>{{i}}</h4></div><br>
          <h5>by {{houseProfile.host_name[0].name}}</h5>
          
        </td>
        <td class="child">
          <h5>NT${{houseProfile.price}}/月&nbsp;&nbsp;</h5>
          <h5 class="right">
            <div v-for="i in houseProfile.reviews" class="inline">
          <i class="star icon"></i>
        </div>
          </h5>
          <p>{{houseProfile.theme}}</p>
          <br />
        </td>
      </tr>
      <tr></tr>
    </table>
  </div>
</template>
<script>
export default {
  props:["houseProfile"]
};
</script>

<style scoped>
* {
  background: #fff;
}
.right_indent {
  margin-right: 20px;
}
.houseCard {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  margin: auto;
  text-align: left;
  font-family: arial;
  margin-top: 15px;
  margin-bottom: 15px;
}
h5,
p {
  color: #797d7f;
  display: inline-block;
  margin-top: 4px;
  margin-bottom: 4px;
}
h2,h4{
  display: inline-block;
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
  overflow: hidden;
}
.child {
  width: 30%;
  padding: 40px;
}
.child_picture {
  width: 30%;
  padding: 0px;
}
.profile_pic{
    width:100%;
    max-height: 250px;
    overflow: hidden;
    object-fit: cover;
    
}
</style>