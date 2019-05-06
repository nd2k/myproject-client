<template>
  <nav class="navbar has-shadow">
    <v-toolbar app color="#fff">
      <v-toolbar-side-icon v-if="user.user" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/">
          <span class="font-weight-medium">My</span>
          <span>Project</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user.user" class="navbar-item">Welcome, {{ user.user.firstname }}</div>
      <div v-if="user.user" class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <font-awesome-icon class="icon" icon="user"/>
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">Profile</a>
          <hr class="navbar-divider">
          <a class="navbar-item">Logout</a>
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
        <v-list v-if="user.user">
          <v-list-tile avatar>
            <v-list-tile-avatar size="50" class="px-4">
              <img :src="user.user.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content class="px-2">
              <v-list-tile-title v-if="user.user">{{ user.user.firstname }} {{ user.user.lastname }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider class="divider-menu"/>

      <v-list class="px-3 mt-4">
        <v-list-tile v-for="menu in menus" :key="menu.title">
          <v-list-tile-action>
            <font-awesome-icon class="icon pa-auto ma-auto" :icon="menu.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="px-2">{{ menu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

        <v-list-tile v-for="subMenu in subMenus" :key="subMenu.title">
          <v-list-tile-action>
            <font-awesome-icon class="icon pa-auto ma-auto" :icon="subMenu.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="px-2">{{ subMenu.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider/>

        <v-list-tile v-for="subSubMenu in subSubMenus" :key="subSubMenu.title">
          <v-list-tile-action>
            <font-awesome-icon class="icon pa-auto ma-auto" :icon="subSubMenu.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="px-2">{{ subSubMenu.title }}</v-list-tile-title>
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
        { title: "Dashboard", icon: "chart-pie" },
        { title: "Project", icon: "tasks" },
        { title: "Teams", icon: "users" }
      ],
      subMenus: [
        { title: "About", icon: "question" },
        { title: "Settings", icon: "cogs" }
      ],
      subSubMenus: [
        { title: "Log Out", icon: "sign-out-alt" }
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

.icon {
  color: $primary;
  font-size: 3rem;
}

.v-list {
  padding: 0;
}

.divider-menu {
  margin: 0;
}
</style>
