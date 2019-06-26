<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <StandardPage></StandardPage>
  </div>
</template>

<script>
import BannerImage from './components/BannerImg'
import StandardPage from './pages/StandardPage'

export default {
  name: 'app',
  components: {
    StandardPage,
    // BannerImage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
