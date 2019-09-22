<template>
    <footer id="main-footer">
      客服專線：0800-231-381 &nbsp; 
      E-mail：weliving@mail.ncku.edu.tw &nbsp; 地址：台南市大學路一號<br />
      &copy;本網站著作權屬於國立成功大學Coding-X學員第六組團隊所有。
  </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  footer {
    padding-top: 2%;
    padding-bottom: 2%;
    align-items: center;
    background: #494848;
    color: #f4f4f4;
    display: flex;
    height: 100px;
    justify-content: center;
    text-align: center;
    line-height: 1.6em;
  }
  @media only screen and (max-width: 770px) {
  footer {
    height:150px;
  }
  
}
</style>