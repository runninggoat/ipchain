<template>
  <v-flex xs12 md12 lg10 offset-lg1 xl8 offset-xl2>
    <v-card
      color="white"
      elevation="5"
      style="padding: 24px 0 22px 0;"
    >
      <v-flex md10 offset-md1>
        <v-form v-model="valid">
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="User Name"
            clearable
            box
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            clearable
            box
            required
          ></v-text-field>
        </v-form>
        <v-btn
          :disabled="!valid"
          color="primary"
          @click="$emit('sign-in')"
        >
          Sign In
        </v-btn>
      </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }
  },
}
</script>
