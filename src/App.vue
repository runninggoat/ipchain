<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    // load state when initializing
    this.$store.dispatch('loadState')

    // persist state when closing or refreshing page
    window.onbeforeunload = () => {
      this.$store.dispatch('persistState')
      // return "Are you sure you want to close the window?"
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
