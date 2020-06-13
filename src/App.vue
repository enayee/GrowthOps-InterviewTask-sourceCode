<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  z-index: -3;
  font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #606060;
  margin: 0 auto;
  height: 100vh;
}
body {
  margin: 0 !important;
}
html {
  scroll-behavior: smooth;
}
</style>
