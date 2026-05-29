<template>
  <v-app>
    <v-main>
      <v-container>
        <TheHeader :goDark="goDark" @changeTheme="updateTheme($event)"/>

        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data () {
    return { goDark: false }
  },
  watch: {
    goDark (newVal) {
      this.$vuetify.theme.global.name = newVal ? 'dark' : 'light'
    }
  },
  methods: {
    updateTheme (updatedTheme) {
      this.goDark = !updatedTheme
    }
  }
}
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>
