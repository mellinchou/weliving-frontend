<template>
    <div class="card">
        
        <div class="container">
            <h4>Cooking Night</h4><h5><i class="calendar alternate icon"></i>Aug 9th 2019, 17:00</h5>
        <img class="event_pic" alt="Event Picture" >
        </div>
        <button v-on:click.prevent="cardBtn">Join</button><button class="leftBorder" v-on:click.prevent="cardBtn">Share</button>
    </div>                
</template>
<script>
export default {
    methods:{
        cardBtn:function(){
            alert("Sorry, this function is under maintenance :(")
        }
    },
}
</script>

<style scoped>
*{
   background: #fff;
}
.container{
    margin: auto;
    margin-top:3%;
    margin-bottom: 3%;
    overflow: hidden;
    /* position: relative; */
    width: 90%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: left;
  font-family: arial;
  display: inline-block;
  margin:5px;
  margin-left:0px;
}
h5,p{
    color:#797D7F;
    display: inline-block;
    /* margin-top:8px;
    margin-bottom: 8px; */
}

.right{
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
}

button{
    width:50%;
    border:0px;
    height:30px;
    background-color: #fff;
    color:#797D7F;
}
button:hover{
    background-color: #f4f4f4;
    color:#000;
}
.leftBorder{
    border-left:1px solid #eaeaea;
}
.event_pic{
    width:100%;
    max-height: 150px;
    overflow: hidden;
    content:url("/assets/examples/event.jpg" );
    object-fit: cover;
    margin-top:10px;
}
</style>