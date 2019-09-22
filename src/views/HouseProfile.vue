<template>
  <div>
    <section class="content"></section>
    <div class="container">
      <img class="coverPhoto" v-bind:src="houseProfile.photos[0]">
      <div class="whiteForm">
        <h1>{{houseProfile.house_name}}</h1>
        <h4>
          <div v-for="i in houseProfile.reviews" class="inline">
            <i class="star icon"></i>
          </div>
        </h4>
        <br />
        <div v-for="i in houseProfile.location" class="inline"><h4>{{i}}</h4></div><br>
        <p>{{houseProfile.theme}}</p>
      </div>
      <div class="leftSide">
        <h3 class="sectionTitle">Hosts</h3>
        <div v-for="i in houseProfile.host_name">
          <table class="parent">
            <tr>
              <td class="child">
                <img
                  v-bind:src="i.profile_pic"
                  alt="House Picture"
                  class="image-cropper"
                />
              </td>
              <td class="child">
                <h3>{{i.name}}</h3>
                <h5>And I'm a {{i.position}}</h5>
              </td>
              <td class="child">
                <h2>
                  <a href="https://www.facebook.com/messages/t/I8787.1111/">
                    <i class="facebook messenger icon iconLeft"></i>
                  </a>
                </h2>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="rightSide">
        <h3 class="sectionTitle">Photos</h3>
        <table>
          <tr>
            <td>
              <img v-bind:src="houseProfile.photos[1]" alt="House Picture" class="housePic" />
            </td>
            <td>
              <img v-bind:src="houseProfile.photos[2]" alt="House Picture" class="housePic" />
            </td>
          </tr>
          <tr>
            <td>
              <img v-bind:src="houseProfile.photos[3]" alt="House Picture" class="housePic" />
            </td>
            <td>
              <img v-bind:src="houseProfile.photos[4]" alt="House Picture" class="housePic" />
            </td>
          </tr>
        </table>
      </div>
      <div class="leftSide">
        <h3 class="sectionTitle">Available Rooms</h3>
        <table>
          <tr>
            <td>
              <img src="/assets/examples/house1.jpg" alt="Share House" class="housePic" />
            </td>
            <td>
              <img src="/assets/examples/house2.jpg" alt="Share House" class="housePic" />
            </td>
            <td>
              <img src="/assets/examples/house3.jpg" alt="Share House" class="housePic" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>Room A</h4>
              <br />
              <h5>NT${{houseProfile.price}}/月</h5>
            </td>
            <td>
              <h4>Room B</h4>
              <br />
              <h5>NT$6000/月</h5>
            </td>
            <td>
              <h4>Room C</h4>
              <br />
              <h5>NT$4500/月</h5>
            </td>
          </tr>
        </table>
      </div>
      <div class="rightSide">
        <h3 class="sectionTitle">Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14691.018744911784!2d120.21729518016359!3d22.996046612805152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45f10dbc593d79b7!2z5aW95oOz5bel5L2c5a6k!5e0!3m2!1sen!2stw!4v1567473686170!5m2!1sen!2stw"
          width="100%"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
      <div class="leftSide">
        <h3 class="sectionTitle">Events</h3>
        <table>
          <tr>
            <td>
              <EventCard />
            </td>
            <td>
              <EventCard />
            </td>
          </tr>
          <tr>
            <td>
              <EventCard />
            </td>
            <td>
              <EventCard />
            </td>
          </tr>
        </table>
      </div>
      <div class="rightSide">
        <h3 class="sectionTitle">Apartment Info</h3>
        <p>{{houseProfile.about}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "../components/layout/EventCard";
export default {
  name: "houseprofile",
  components: {
    EventCard
  },
  // props: ['houseProfile'],
  data() {
    return {
      id: this.$route.params.id,
      houseProfile: {}
    };
  },
  created() {
    this.$http
      .get("http://3.227.148.97:3000/api/search", {params:{house_name: this.id}}
      // {
      //   headers:{
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // }
      )
      .then(function(data) {
        console.log(data);
        this.houseProfile = data.body.result.searchData[0];
      })
      .catch(e => {
        console.log("Error",e);
      });
  }
};
</script>

<style scoped>
.content {
  background: #f4f4f4;
  background-position: right center;
  height: 1px;
  text-align: center;
}
.coverPhoto {
  background: center / cover;
  background-position: right center;
  height: 300px;
  text-align: center;
  width:100%;
  object-fit: cover;
}
h5,
p {
  color: #797d7f;
  display: inline-block;
  margin-top: 4px;
  margin-bottom: 4px;
}
h4,
h6 {
  color: #797d7f;
  display: inline-block;
  margin-top: 4px;
  margin-bottom: 4px;
}
.sectionTitle {
  margin-bottom: 15px;
}
.image-cropper {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
}
.whiteForm {
  background: #fff;
  padding: 4%;
}

.leftSide {
  float: left;
  width: 58%;
  margin-top: 20px;
  margin-right: 20px;
  background: #fff;
  padding: 4%;
  padding-top: 2%;
}
.rightSide {
  float: right;
  width: 40%;
  margin-top: 20px;
  background: #fff;
  padding: 4%;
  padding-top: 2%;
}
.housePic {
  width: 150px;
  height: 150px;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  /* margin:5px; */
}
.child {
  padding-right: 10px;
}
.iconLeft {
  padding-left: 40px;
}
a {
  text-decoration: none;
}
td {
  padding: 3px;
}
</style>