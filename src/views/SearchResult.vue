<template>
  <div>
    <section class="content"></section>
    <div class="container">
      <div v-for="houseProfile in houseProfiles" class="inline" :key="houseProfile.id">
        <router-link v-bind:to="'/houseprofile/' + houseProfile.house_name" >
        <ProfileCard_Hori v-bind:houseProfile="houseProfile"/>
      </router-link>
      </div>

      <div class="hr-sect">End of Results</div>
    </div>
  </div>
</template>

<script>
import ProfileCard_Hori from "../components/layout/ProfileCard_Hori";
export default {
  name: "result",
  components: {
    ProfileCard_Hori
  },
  data(){
    return {
      houseProfiles:[],
      keyword:this.$route.params.keyword,
    };
  },
  props:["searchInput"],
  created() {
    this.$http
      .get("http://3.227.148.97:3000/api/search", {params:{house_name: this.keyword}}
      // {
      //   headers:{
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // }
      )
      .then(function(data) {
        console.log(data);
        this.houseProfiles = data.body.result.searchData;
      })
      .catch(e => {
        console.log("Error",e);
      });
  },
  
};
</script>

<style scoped>

.content {
  background: #f4f4f4;
  background-position: right center;
  height: 20px;
  text-align: center;
}
.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #c7c6c5;
  margin: 50px 0px;
}
.hr-sect::before,
.hr-sect::after {
  content: "";
  flex-grow: 1;
  background: #c7c6c5;
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 8px;
}
.hr-sect::before {
  margin-left: 15%;
}
.hr-sect::after {
  margin-right: 15%;
}
</style>