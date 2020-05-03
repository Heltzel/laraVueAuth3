<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <div class="display-1 ml-5 white--text">LaraVueJwt</div>
      </div>

      <v-spacer></v-spacer>

      <TheNavigation />
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheNavigation from "./components/TheNavigation";

export default {
  name: "App",

  components: {
    TheNavigation,
  },

  data: () => ({
    //
  }),
};
</script>
