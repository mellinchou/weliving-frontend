<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="title">
        <i class="home icon"></i>WeLiving
      </router-link>

      <div class="loginNavBar">
        <input
          id="tags"
          type="text"
          class="headerSearchInput"
          placeholder="Search for a Share House"
          v-model="searchInput"
        />
        <router-link v-bind:to="'/result/' + this.searchInput">
          <button class="searchBtn">
            <i class="search icon"></i>
          </button>
        </router-link>
        
        
        <router-link to="/login">登入</router-link>&nbsp; |
        &nbsp;
        <router-link to="/signup">註冊</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      searchInput: ""
    };
  },
};
</script>

<style scoped>
.header {
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background: #f4f4f4;
  color: #797d7f;
  text-align: left;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.loginNavBar {
  bottom: 0px;
  display: inline;
  position: absolute;
  right: 0;
}
a {
  color: #494848;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: #797d7f;
  text-decoration: underline;
}
.title {
  color: #494848;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}
.title:hover {
  color: #494848;
  text-decoration: none;
}
.container {
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 80%;
}
.headerSearchInput {
  height: 30px;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid #ccc;
}
.searchBtn {
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: #C7C6C5;
  font-weight: bold;
  border: none;
  color: #494848;
  cursor: pointer;
  font-size: 15px;
  height: 30px;
  padding: 4px 14px 10px 10px;
  text-align: center;
  text-decoration: none;
  width: auto;
  margin-right:60px;
}
.searchBtn:hover {
  background-color: #fff;
  color: #fff;
}
</style>