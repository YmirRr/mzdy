<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view/>
  </div>
</template>

<script>
  
import MyHeader from '@/components/container/header/MyHeader'

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top:50/$sc+rem;
}
</style>
