<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ nodeEnv }}</h2>
    <h2>{{ greetings }}</h2>
    <h3 @click="logout">Logout</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nodeEnv: process.env.NODE_ENV,
      greetings: process.env.VUE_APP_TITLE, // config file is in .env with different mode
    }
  },
  created () {
    console.log(process.env.VUE_APP_TITLE)
    console.log(this.$store.state.user)
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
  },
}
</script>
