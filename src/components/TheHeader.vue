<template>
  <div>
    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer 
      v-model="drawer" 
      absolute 
      temporary 
      app 
      width="250" 
      class="elevation-4"
    >
      <v-list class="pt-6">
        <v-list-item 
          v-for="item in navItems" 
          :key="item.title"
          :to="item.to"
          active-class="green--text"
          class="mb-2"
        >
          <v-list-item-icon>
            <v-icon color="green">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-divider class="my-4"></v-divider>
        
        <v-list-item @click="changeTheme" class="theme-toggle">
          <v-list-item-icon>
            <v-icon color="orange">{{ goDark ? 'fas fa-sun' : 'fas fa-moon' }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ goDark ? 'Light Mode' : 'Dark Mode' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Toolbar -->
    <v-app-bar 
      flat 
      color="transparent" 
      height="70"
      class="px-4"
    >
      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon 
        class="hidden-md-and-up" 
        @click.stop="drawer = !drawer"
        color="green"
      ></v-app-bar-nav-icon>
      
      <!-- Logo/Title -->
      <v-toolbar-title class="title font-weight-bold ml-2">
        <span class="font-weight-light">Himal</span>
        <span class="green--text font-weight-bold">Gurung</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <!-- Desktop Navigation -->
      <div class="hidden-sm-and-down d-flex align-center">
        <v-btn 
          v-for="item in navItems" 
          :key="item.title"
          :to="item.to"
          text
          rounded
          active-class="green--text"
          class="mx-1 nav-btn"
        >
          <v-icon left small>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        
        <!-- Language Switcher -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              class="ml-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>fas fa-globe</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="changeLanguage('en')">
              <v-list-item-title>🇺🇸 English</v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeLanguage('ja')">
              <v-list-item-title>🇯🇵 日本語</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
        <!-- Theme Toggle Button -->
        <v-btn 
          @click="changeTheme" 
          icon 
          class="ml-2 theme-btn"
          :color="goDark ? 'orange' : 'blue-grey'"
        >
          <v-icon>{{ goDark ? 'fas fa-sun' : 'fas fa-moon' }}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import translationMixin from '../mixins/translationMixin'

export default {
  mixins: [translationMixin],
  props: {
    goDark: {
      type: Boolean
    }
  },

  computed: {
    navItems() {
      return [
        { title: this.t('nav.home', 'Home'), to: '/', icon: 'fas fa-home' },
        { title: this.t('nav.resume', 'Resume'), to: '/resume', icon: 'fas fa-file-alt' },
        { title: this.t('nav.contact', 'Contact'), to: '/contact', icon: 'fas fa-envelope' }
      ]
    }
  },
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    changeTheme () {
      this.$emit('changeTheme', this.goDark)
    },
    changeLanguage (locale) {
      if (this.$i18n) {
        this.$i18n.locale = locale
        localStorage.setItem('language', locale)
      }
    },

  },
  mounted () {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && this.$i18n) {
      this.$i18n.locale = savedLanguage
    }
  }
}
</script>

<style scoped>
.nav-btn {
  text-transform: none !important;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: rgba(76, 175, 80, 0.1);
  transform: translateY(-1px);
}

.theme-btn {
  transition: all 0.3s ease;
}

.theme-btn:hover {
  transform: rotate(20deg) scale(1.1);
}

.theme-toggle {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.theme-toggle:hover {
  background-color: rgba(255, 152, 0, 0.1);
}

.v-toolbar-title {
  font-size: 1.5rem !important;
}

.v-navigation-drawer {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.v-app-bar {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9) !important;
}

.theme--dark .v-app-bar {
  background: rgba(33, 33, 33, 0.9) !important;
}

.theme--dark .v-navigation-drawer {
  background: linear-gradient(135deg, #424242 0%, #303030 100%) !important;
}

.theme--dark .v-list-item {
  color: rgba(255, 255, 255, 0.87) !important;
}

.theme--dark .v-list-item__title {
  color: rgba(255, 255, 255, 0.87) !important;
}
</style>