<template>
  <v-card class="my-5 mx-auto" max-width="300" tile>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
       <!-- <v-toolbar-title class="mx-2 my-3" color="primary" dark>Dashboard</v-toolbar-title> -->
      <v-divider></v-divider>
    <v-list nav>
      <v-list-item-group class="my-4">
        <v-list-item v-for="(item, i) in items" :key="i"  :to="{ name: item.route }" link>
           <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            item.name
          }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "dash-board",
  data: () => ({
    item: 1,
    items: [
      {name: "Kalender", icon: "mdi-calendar", route: "Calendar" },
      {name: "Documenten", icon: "mdi-file-document-outline", route: "Documents" },
      {name: "Raporten", icon: "mdi-format-list-bulleted", route: "Reports" },
    ],
  }),
};
</script>

<style scoped></style>
