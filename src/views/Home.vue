<template>
  <div>
    <section class="content center">
      <div class="container">
        <h1 class="homeTitle">WeLiving共生住宅搜尋平台</h1>
        <h3 class="homeSubtitle">比較各大網站找到您理想的共生住宅</h3>
        <br />
        <input
          id="tag"
          type="text"
          class="searchInput"
          placeholder="Search for a Share House"
          v-model="searchInput"
        />
        <router-link v-bind:to="'/result/' + this.searchInput">
          <button class="searchBtn">Go!</button>
        </router-link>
      </div>
    </section>

    <!-- first block displaying house profiles -->
    <div class="container">
      <h2>
        <i class="thumbtack icon"></i>Top Share Houses
      </h2>
      <br />
      <div v-for="houseProfile in houseProfiles_block1" class="inline" :key="houseProfile.id">
        <router-link v-bind:to="'/houseprofile/' + houseProfile.house_name">
          <ProfileCard v-bind:houseProfile="houseProfile" />
        </router-link>
      </div>
    </div>

    <!-- static block with a quote -->
    <section class="shareHouseIntro">
      <div class="container">
        <table class="parent" style="height:300px;">
          <tr>
            <td class="child" width="50%">
              <h2>"What I Love the most about my home is who I share it with"</h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium veritatis ad, aliquid nihil minus autem amet iusto minima, asperiores numquam ullam deleniti ducimus corrupti. Accusamus in doloribus nemo!
            </td>
            <td class="child" width="50%">
              <img src="/assets/examples/showcase1.jpg" height="300px" />
            </td>
          </tr>
        </table>
      </div>
    </section>
    <!-- second block displaying house profiles -->
    <div class="container">
      <div v-for="houseProfile in houseProfiles_block2" class="inline" :key="houseProfile.id">
        <router-link v-bind:to="'/houseprofile/' + houseProfile.house_name">
          <ProfileCard v-bind:houseProfile="houseProfile" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "../components/layout/ProfileCard";
export default {
  components: {
    ProfileCard
  },
  data() {
    return {
      searchInput: "",
      houseProfiles_block1: [],
      houseProfiles_block2: []
    };
  },
  methods: {
    // search: function() {
    //   this.$http.get("http://3.227.148.97:3000/api/search", {
    //       house_name: this.searchInput
    //     })
    //     .then(function(data) {
    //       console.log(data);
    //     });
    // },
  },
  created() {
    this.$http
      .get("http://3.227.148.97:3000/api/search", {params:{house_name: ""}}
      // {
      //   headers:{
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // }
      )
      .then(function(data) {
        console.log(data);
        this.houseProfiles_block1 = data.body.result.searchData.slice(1,7);
        this.houseProfiles_block2 = data.body.result.searchData.slice(7,13);
      })
      .catch(e => {
        console.log("Error",e);
      });
  },

  mounted: () => {
    var availableTags = [
      "台北市",
      "新北市",
      "台南市",
      "高雄市",
      "台中市",
      "台東市",
      "台北市 松山區",
      "台北市 中正區",
      "台北市 信義區",
      "台北市 大同區",
      "台北市 大安區",
      "台北市 萬華區",
      "台北市 中山區"
    ];
    $("#tags").autocomplete({
      source: availableTags
    });
    $("#tag").autocomplete({
      source: availableTags
    });
  }
};
</script>


<style scoped>

.homeTitle {
  color: #fff;
  font-size: 50px;
  line-height: 1.6em;
}
.homeSubtitle {
  color: #fff;
  line-height: 1.6em;
}

.shareHouseIntro {
  background: #eaeaea;
}
</style>