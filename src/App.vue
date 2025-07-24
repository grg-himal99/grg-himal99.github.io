<template>
  <v-app :dark="goDark">
    <v-content>
      <v-container align-center>
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
    </v-content>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  metaInfo: {
    title: 'Home',
    titleTemplate: "%s ← Himal's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "Himal Gurung's Portfolio" },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Himal' Space" },
      { property: 'og:site_name', content: "Himal' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://Himal.space' },
      // {
      //   property: "og:image",
      //   content: "https://i.imgur.com/Dcz2PGx.jpg"
      // },
      { property: 'og:description', content: "Himal Gurung's Portfolio" }
    ]
  },
  components: {
    TheHeader,
    TheFooter
  },
  data () {
    return { goDark: false }
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
