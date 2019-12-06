<template>
  <div class="home">
      <div class="header">
        <router-view></router-view>
      </div>
      <div class="footer">
        <router-link to="/home/first">首页</router-link>
        <router-link to="/home/my">我的</router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
      flex: 1;
    }
    .footer{
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-top: 1px solid #ccc;
      display: flex;
      justify-content: space-around;
      a{
        color: #000;
      }
    }
  }
</style>
