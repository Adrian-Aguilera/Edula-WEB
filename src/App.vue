<template>
  <NavBar/>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@components/navBar/NavBar.vue';

export default {
  name: 'App',
  components:{
    NavBar,
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  body{
    /*background-image: url('../src/assets/fondo_content.jpg');*/
    background: rgb(181,34,55);
    background: linear-gradient(0deg, rgba(181,34,55,1) 0%, rgba(25,25,25,1) 100%);
  }
</style>
