<!--
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
-->
<template>
  <div id="vueApp">
    <router-view />
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'vueApp',
}
</script>

<style>
@import "~bootstrap/css/bootstrap.css"
</style>
