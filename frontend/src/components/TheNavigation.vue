<template>
  <nav>
    <v-tabs background-color="primary" dark>
      <v-tab router :to="{ name: 'Home' }">Home</v-tab>
      <template v-if="!authenticated">
        <v-tab router :to="{ name: 'SignIn' }">Signin</v-tab>
        <v-tab router :to="{ name: 'SignUp' }">Signup</v-tab>
      </template>
      <template v-if="authenticated">
        <v-tab router :to="{ name: 'Dashboard' }">Dashboard</v-tab>
        <v-tab @click="signOut">Logout</v-tab>
        <v-tab>{{user.name}}</v-tab>
      </template>
    </v-tabs>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({}),
   methods: {
    ...mapActions({
      signOutAction: "auth/signOut"
    }),
  signOut(){
    this.signOutAction().then(()=>{
      this.$router.replace({
        name: 'Home'
      })
    })
  }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>

<style scoped></style>
