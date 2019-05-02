<template>
  <nav class="navbar has-shadow py-8">
    <v-toolbar flat app color="#fff">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/">
          <span class="font-weight-medium">My</span>
          <span>Project</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user.user" class="navbar-item">
        Welcome, {{ user.user.firstname }}
      </div>
      <div v-if="user.user" class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <font-awesome-icon icon="user"/>
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Profile
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Logout
          </a>
        </div>
      </div>
      <div v-else class="navbar-item">
        <div class="buttons">
          <router-link to="/register" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/login" class="button is-light">Log in</router-link>
        </div>
      </div>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-4">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img v-if="user.user" :src="user.user.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-if="user.user">{{ user.user.firstname }} {{ user.user.lastname }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider/>

      <v-list class="px-4" dense>
        <v-list-tile v-for="menu in menus" :key="menu.title">
          <v-list-tile-action>
            <font-awesome-icon class="icon" :icon= menu.icon />
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      drawer: false,
      menus: [
        { title: "Home", icon: "home" },
        { title: "About", icon: "question" }
      ]
    }
  },
  computed: {
    ...mapGetters({
      "user": "user/AUTHUSER"
    })
  }
}
</script>

<style lang="scss" scoped>
$primary: hsl(171, 100%, 41%);

.v-list-tile-title {
  height: 4rem !important;
  line-height: 4rem !important;
}

.v-list-tile-action {
  height: 4rem;
}

.icon {
      color: $primary;
      font-size: 3rem;
}
</style>
