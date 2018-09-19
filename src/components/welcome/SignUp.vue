<template>
  <v-flex xs12 md12 lg10 offset-lg1 xl8 offset-xl2>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Setup Account</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Verify Email</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Setup Password</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-form v-model="valid1">
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              :counter="30"
              @input="trim"
              label="Username"
              clearable
              box
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              @input="trim"
              label="E-mail"
              clearable
              box
              required
            ></v-text-field>
          </v-form>
          <v-btn
            :disabled="!valid1"
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-form v-model="valid2">
            <v-text-field
              v-model="secretkey"
              :rules="secretkeyRules"
              @input="trim"
              label="Secret Key"
              clearable
              box
              required
            ></v-text-field>
          </v-form>
          <v-btn :disabled="!valid2"
            color="primary"
            @click=";"
          >
            Verify
          </v-btn>
          <!-- <v-btn :disabled="!valid2 || !verified" -->
          <v-btn :disabled="!valid2"
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-form v-model="valid3">
            <v-text-field
              :type="visiable ? 'text' : 'password'"
              v-model="password"
              :rules="passwordRules"
              @input="trim"
              label="Password"
              clearable
              box
              required
            ></v-text-field>
            <v-text-field
              :type="visiable ? 'text' : 'password'"
              v-model="repassword"
              :rules="repasswordRules"
              @input="trim"
              label="Confirm Password"
              clearable
              box
              required
            ></v-text-field>
          </v-form>
          <v-btn :disabled="!valid3"
            color="primary"
            @click="$emit('sign-up')"
          >
            Continue
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      e1: 1,
      valid1: false,
      valid2: false,
      verified: false, // secret key verification
      valid3: false,
      regexMap: require('@/common.js').regexMap,
      username: '',
      usernameLen: 30,
      usernameRules: [
        v => !!v || 'Username is required',
        v => v.length <= this.usernameLen || 'Username must be less than ' + this.usernameLen + ' characters',
        v => this.regexMap.username.test(v) || 'Username must be valid',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => this.regexMap.email.test(v) || 'E-mail must be valid',
      ],
      secretkey: '',
      secretkeyRules: [
        v => !!v || 'Secret key is required',
      ],
      visiable: false, // password input visiability
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => this.regexMap.password.test(v) || 'Password should be the combination (length > 8) of letters, numbers and syntaxes',
      ],
      repassword: '',
      repasswordRules: [
        v => !!v || 'Password confirmation is required',
        v => this.password === v || 'Your passwords do not match',
      ],
    }
  },
  watch: {
  },
  methods: {
    trimStr: require('@/common.js').trimStr,
    trim () {
      this.$nextTick(() => {
        this.username = this.username ? this.trimStr(this.username) : ''
        this.email = this.trimStr(this.email)
        this.secretkey = this.trimStr(this.secretkey)
        this.password = this.trimStr(this.password)
        this.repassword = this.trimStr(this.repassword)
      })
    },
  },
}
</script>
