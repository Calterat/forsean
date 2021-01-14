<template>
  <div :key="listItem" v-for="listItem in list">
    <h3>{{ name }}</h3>
    <p> ---{{ listItem }}</p>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'Notelist',
  components: {
  },
  data() {
    return {
      name: "Bob says",
      list: ['TestingBob', 'TestingCharlie', 'TestingDick']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>