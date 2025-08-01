<template>
  <div>
    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer 
      v-model="drawer" 
      absolute 
      temporary 
      app 
      width="300" 
      class="elevation-12"
    >
      <div class="drawer-header pa-6">
        <div class="drawer-logo d-flex align-center mb-4">
          <div class="drawer-logo-icon mr-4">
            <v-icon size="36" color="white">fas fa-code</v-icon>
          </div>
          <div>
            <div class="drawer-logo-name">
              <span class="font-weight-light text-h5 white--text">Himal</span>
              <span class="font-weight-bold text-h5 white--text">Gurung</span>
            </div>
            <div class="drawer-logo-subtitle text-caption white--text text--lighten-2">
              Frontend Developer
            </div>
          </div>
        </div>
        <v-divider class="white--text opacity-2"></v-divider>
      </div>
      
      <v-list class="pt-4">
        <v-list-item 
          v-for="item in navItems" 
          :key="item.title"
          :to="item.to"
          active-class="drawer-active"
          class="mb-3 nav-item-drawer"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium text-h6 white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="white" small>fas fa-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>
        
        <v-divider class="my-6 white--text opacity-2"></v-divider>
        
        <v-list-item @click="changeTheme" class="theme-toggle-drawer">
          <v-list-item-icon>
            <v-icon color="orange">{{ goDark ? 'fas fa-sun' : 'fas fa-moon' }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-h6 white--text">{{ goDark ? 'Light Mode' : 'Dark Mode' }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Toolbar -->
    <v-app-bar 
      flat 
      color="transparent" 
      height="85"
      class="px-6 header-container"
      elevation="0"
    >
      <!-- Mobile Menu Button -->
      <v-btn
        class="hidden-md-and-up menu-btn"
        @click.stop="drawer = !drawer"
        icon
        large
        color="primary"
      >
        <v-icon class="menu-icon">{{ drawer ? 'fas fa-times' : 'fas fa-bars' }}</v-icon>
      </v-btn>
      
      <!-- Logo/Title -->
      <div class="logo-container d-flex align-center" @click="$router.push('/')">
        <div class="logo-icon mr-4">
          <div class="logo-icon-inner">
            <v-icon size="28" color="white">fas fa-code</v-icon>
          </div>
        </div>
        <div class="logo-text">
          <div class="logo-name">
            <span class="font-weight-light text-h5">Himal</span>
            <span class="primary--text font-weight-bold text-h5">Gurung</span>
          </div>
          <div class="logo-subtitle text-caption grey--text">
            <v-icon size="12" class="mr-1">fas fa-map-marker-alt</v-icon>
            Tokyo, Japan
          </div>
        </div>
      </div>
      
      <v-spacer></v-spacer>
      
      <!-- Desktop Navigation -->
      <div class="hidden-sm-and-down d-flex align-center">
        <v-btn 
          v-for="item in navItems" 
          :key="item.title"
          :to="item.to"
          text
          rounded
          active-class="nav-active"
          class="mx-2 nav-btn"
          height="45"
        >
          <v-icon left small class="mr-2">{{ item.icon }}</v-icon>
          <span class="font-weight-medium">{{ item.title }}</span>
        </v-btn>
        
        <!-- Language Switcher -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              class="ml-3 language-btn"
              v-bind="attrs"
              v-on="on"
              color="grey"
            >
              <v-icon>fas fa-globe</v-icon>
              <div class="current-lang-indicator">{{ currentLangFlag }}</div>
            </v-btn>
          </template>
          <v-list class="py-0 language-menu">
            <v-list-item @click="changeLanguage('en')" class="language-item">
              <v-list-item-title class="d-flex align-center">
                <span class="mr-3 flag">🇺🇸</span>
                <span>English</span>
                <v-icon v-if="$i18n && $i18n.locale === 'en'" small class="ml-auto" color="primary">fas fa-check</v-icon>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="changeLanguage('ja')" class="language-item">
              <v-list-item-title class="d-flex align-center">
                <span class="mr-3 flag">🇯🇵</span>
                <span>日本語</span>
                <v-icon v-if="$i18n && $i18n.locale === 'ja'" small class="ml-auto" color="primary">fas fa-check</v-icon>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
        <!-- Theme Toggle Button -->
        <v-btn 
          @click="changeTheme" 
          icon 
          class="ml-3 theme-btn"
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
    },
    currentLangFlag() {
      if (!this.$i18n) return '🇺🇸'
      return this.$i18n.locale === 'ja' ? '🇯🇵' : '🇺🇸'
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
.header-container {
  backdrop-filter: blur(25px);
  background: rgba(255, 255, 255, 0.98) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
}

.header-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
}

.theme--dark .header-container {
  background: rgba(13, 13, 13, 0.98) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.theme--dark .header-container::before {
  background: linear-gradient(90deg, transparent, rgba(255, 152, 0, 0.3), transparent);
}

.logo-container {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 8px;
  border-radius: 12px;
  animation: logoPulse 2s ease-in-out 1s both;
}

@keyframes logoPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.logo-container:hover {
  transform: scale(1.03);
  background: rgba(102, 126, 234, 0.05);
}

.logo-icon {
  position: relative;
}

.logo-icon-inner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.logo-icon-inner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
  opacity: 0;
}

.logo-container:hover .logo-icon-inner::before {
  opacity: 1;
  animation: shimmer 1.5s ease;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.logo-name {
  line-height: 1.2;
  transition: all 0.3s ease;
}

.logo-subtitle {
  margin-top: -2px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.logo-container:hover .logo-subtitle {
  opacity: 1;
  color: #667eea !important;
}

.menu-btn {
  transition: all 0.3s ease;
  border-radius: 12px;
}

.menu-btn:hover {
  transform: scale(1.1);
  background: rgba(102, 126, 234, 0.1) !important;
}

.menu-icon {
  transition: all 0.3s ease;
}

.nav-btn {
  text-transform: none !important;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s ease;
}

.nav-btn:hover::before {
  left: 100%;
}

.nav-btn:hover {
  background-color: rgba(102, 126, 234, 0.08);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.nav-active {
  background-color: rgba(102, 126, 234, 0.1) !important;
  color: #667eea !important;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.language-btn {
  transition: all 0.3s ease;
  border-radius: 12px;
  position: relative;
}

.language-btn:hover {
  transform: scale(1.1);
  background: rgba(102, 126, 234, 0.1) !important;
}

.current-lang-indicator {
  position: absolute;
  bottom: -2px;
  right: -2px;
  font-size: 10px;
  background: #667eea;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
}

.language-menu {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.language-item {
  transition: all 0.3s ease;
  padding: 12px 16px;
}

.language-item:hover {
  background-color: rgba(102, 126, 234, 0.08);
  transform: translateX(4px);
}

.flag {
  font-size: 1.2em;
}

.theme-btn {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 152, 0, 0.1);
  border-radius: 12px;
}

.theme-btn:hover {
  transform: rotate(20deg) scale(1.15);
  background: rgba(255, 152, 0, 0.2);
  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.3);
}

/* Drawer Styles */
.v-navigation-drawer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-right: none;
  box-shadow: 8px 0 32px rgba(0, 0, 0, 0.1);
}

.drawer-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.drawer-logo-icon {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 12px;
  backdrop-filter: blur(10px);
}

.drawer-active {
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 12px;
  margin: 0 8px;
}

.nav-item-drawer {
  border-radius: 12px;
  margin: 0 8px;
  transition: all 0.3s ease;
}

.nav-item-drawer:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.theme-toggle-drawer {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  margin: 0 8px;
}

.theme-toggle-drawer:hover {
  background-color: rgba(255, 152, 0, 0.2);
  transform: translateX(8px);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .logo-text {
    display: none;
  }
  
  .logo-container {
    justify-content: center;
  }
  
  .header-container {
    padding: 0 16px;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .logo-subtitle {
    display: none;
  }
}

/* Dark theme adjustments */
.theme--dark .logo-subtitle {
  color: rgba(255, 255, 255, 0.7) !important;
}

.theme--dark .logo-container:hover .logo-subtitle {
  color: #667eea !important;
}
</style>