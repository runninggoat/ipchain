<template>
  <v-app>
    <v-toolbar color="primary">
      <v-avatar tile="tile" size="36">
        <img :src="require('@/assets/IP-Chain.png')" alt="">
      </v-avatar>
      &nbsp;&nbsp;
      <span class="headline white--text">IP Chain</span>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="white--text" v-show="displayOpt === 1">Sign In</v-btn>
        <v-btn flat class="white--text">Forgot Password</v-btn>
        <v-btn flat class="white--text">Help</v-btn>
        <v-btn flat class="white--text">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md6>
          <div style="margin-top: 2rem;"></div>
          <v-avatar tile="tile" size="150">
            <img :src="require('@/assets/IP-Chain.jpg')" alt="">
          </v-avatar>
          <br/>
          <div class="display-2">IP Chain</div>
          <br/>
          <div>
            <v-flex md8 offset-md2>
              <div class="headline">Welcome to IP Chain. IP Chain is an open platform which is using blockchain and IPFS file system for intellectual property (IP) sharing. Join us to let your IP viewed by the global.</div>
            </v-flex>
          </div>
          <br/>
          <div v-if="displayOpt === 0" transition="fade-transition">
            <v-btn color="info" @click="displayOpt = 1">Sign up</v-btn>
            <v-btn color="info">Sign in</v-btn>
          </div>
          <div v-if="displayOpt === 1" transition="fade-transition">
            <sign-up @go-to-signin="displayOpt = 2"></sign-up>
          </div>
        </v-flex>
        <v-flex md6>
          <v-avatar tile="tile" size="500">
            <img :src="require('@/assets/hexangle-bg.png')" alt="">
          </v-avatar>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import SignUp from './SignUp.vue'
export default {
  components: {
    SignUp,
  },
  data () {
    return {
      displayOpt: 0,
    }
  },
  create () {
    this.$i18n.locale = 'zh'
  },
}
</script>

