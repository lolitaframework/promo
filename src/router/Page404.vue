<template>
  <div id="page-404">
    <content>
      <h1>404</h1>
      <h2>Woops! Page not found!</h2>
    </content>

    <div id="lolita"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  #page-404{
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    & content{
      text-align: center;
      margin-top: -100px;
    }

    & h1{
      font-size: 200px;
      font-weight: 900;
      color: #000;
    }

    & h2{
      font-size: 50px;
      font-weight: 400;
      color: #000;
    }
  }
</style>
