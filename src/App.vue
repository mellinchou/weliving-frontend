<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer/>
  </div>
</template>


<script>
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

export default {
  name:"app",
  components: {
    Header,
    Footer
    }
}
  

</script>


<style >* {
    font-family: Microsoft JhengHei, Helvetica, sans-serif;
    color:#494848;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: #f4f4f4;
    line-height: 1.4;
  }
  .content {
    background: url('~/assets/showcase_background2.jpg') center /cover;
    background-position: right center;
    height: 600px; 
    text-align: center;
  }

   .button {
    background-color: #eaeaea;
    border: none;
    border-radius: 4px;
    color: #494848;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    height: 35px;
    padding: 6px 12px; 
    text-align: center;
    text-decoration: none;
    width: auto;
  }
  .button:hover {
    background-color: #989696;
    color: #fff;
  }
  .container {
    margin: auto;
    margin-top:3%;
    margin-bottom: 3%;
    overflow: hidden;
    /* position: relative; */
    width: 80%;
  }
  @media only screen and (max-width: 770px) {
     .container {
    margin: auto;
    margin-top:3%;
    margin-bottom: 3%;
    overflow: hidden;
    /* position: relative; */
    width: 90%;
  }
  }
  input,
  select {
    border: 1px solid #ccc;
    border-radius: 4px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box; 
    color: #797d7f;
    font-size: 12px;
    height: 35px;
    padding: 6px 15px;
  }
  
  /* combine label and input box or select box */
  input[type="date"] {
    background: #fff
      url(http://www.clipartroo.com/images/85/may-calendar-clipart-85365.png) 90%
      50% no-repeat;
    background-size: 15px;
    font-size: 14px;
    content: attr(placeholder) ": ";
  }
  
  input[type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
  
  input[type="checkbox"] {
    vertical-align: middle;
  }
  
  /* form special setting */
  form table {
    background-color: transparent;
    text-align: left;
  }
  
  input:not([type="checkbox"]),
  select {
    width: 200px;
  }
  
  input.shortWidth,
  select.shortWidth {
    width: 100px;
  }
  
  input.longWidth,
  select.longWidth {
    width: 400px;
  }
  
  form .titleAndAddBtn {
    line-height: 2.5em;
    text-align: center;
  }
  
  form .titleAndAddBtn .button {
    float: right;
  }
  .center {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  
  .center.row {
    flex-direction: row;
  }
  
  .center.column {
    flex-direction: column;
  }
.searchBtn{
    border-radius: 4px;
    border-top-left-radius:0px;
    border-bottom-left-radius:0px;
    background-color: #eaeaea;
    font-weight: bold;
    border: none;
    color: #494848;
    cursor: pointer;
    font-size: 15px;
    height: 35px;
    padding: 6.3px 14px 10px 10px; 
    text-align: center;
    text-decoration: none;
    width: auto;
  }
  .searchBtn:hover{
    background-color: #989696;
    color: #fff;
  }
  .searchInput{
     border-radius: 4px;
      border-top-right-radius:0px;
      border-bottom-right-radius:0px;
      border: 1px solid #ccc;
      min-width:550px;
  }
  @media only screen and (max-width: 770px) {
  .searchInput {
    min-width: 10px;
  }
  }
  .inline {
  display: inline-block;
}
</style>
