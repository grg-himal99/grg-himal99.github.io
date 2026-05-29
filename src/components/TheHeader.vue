<template>
  <div>
    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
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
              <span class="font-weight-light text-h5 text-white">Himal</span>
              <span class="font-weight-bold text-h5 text-white">Gurung</span>
            </div>
            <div class="drawer-logo-subtitle text-caption text-white">
              Frontend Developer
            </div>
          </div>
        </div>
        <v-divider class="text-white opacity-2"></v-divider>
      </div>

      <v-list class="pt-4">
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          active-class="drawer-active"
          class="mb-3 nav-item-drawer"
        >
          <template #prepend>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium text-h6 text-white">{{ item.title }}</v-list-item-title>
          <template #append>
            <v-icon color="white" size="small">fas fa-chevron-right</v-icon>
          </template>
        </v-list-item>

        <v-divider class="my-6 text-white opacity-2"></v-divider>

        <v-list-item @click="changeTheme" class="theme-toggle-drawer">
          <template #prepend>
            <v-icon color="orange">{{ goDark ? 'fas fa-sun' : 'fas fa-moon' }}</v-icon>
          </template>
          <v-list-item-title class="text-h6 text-white">{{ goDark ? 'Light Mode' : 'Dark Mode' }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Toolbar -->
    <v-app-bar
      :elevation="0"
      color="transparent"
      height="85"
      class="px-6 header-container"
    >
      <!-- Mobile Menu Button -->
      <v-btn
        class="d-md-none menu-btn"
        @click.stop="drawer = !drawer"
        icon
        size="large"
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
            <span class="text-primary font-weight-bold text-h5">Gurung</span>
          </div>
          <div class="logo-subtitle text-caption text-grey">
            <v-icon size="12" class="mr-1">fas fa-map-marker-alt</v-icon>
            Tokyo, Japan
          </div>
        </div>
      </div>

      <v-spacer></v-spacer>

      <!-- Desktop Navigation -->
      <div class="d-none d-md-flex align-center">
        <v-btn
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          variant="text"
          rounded
          active-class="nav-active"
          class="mx-2 nav-btn"
          height="45"
        >
          <v-icon start size="small" class="mr-2">{{ item.icon }}</v-icon>
          <span class="font-weight-medium">{{ item.title }}</span>
        </v-btn>

        <!-- Language Switcher -->
        <v-menu :close-on-content-click="true">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="text"
              class="ml-2 lang-activator"
              v-bind="props"
              rounded="lg"
            >
              <span class="lang-flag-sm">{{ currentLangFlag }}</span>
              <span class="lang-code ml-1">{{ $i18n && $i18n.locale === 'ja' ? 'JA' : 'EN' }}</span>
              <v-icon size="12" class="ml-1" color="grey">fas fa-chevron-down</v-icon>
            </v-btn>
          </template>

          <div class="lang-menu">
            <div
              class="lang-option"
              :class="{ 'lang-option--active': $i18n && $i18n.locale === 'en' }"
              @click="changeLanguage('en')"
            >
              <span class="lang-flag-lg">🇺🇸</span>
              <div class="lang-label">
                <span class="lang-name">English</span>
                <span class="lang-short">EN</span>
              </div>
              <v-icon v-if="$i18n && $i18n.locale === 'en'" size="14" color="primary" class="lang-check">fas fa-check</v-icon>
            </div>

            <div class="lang-divider"></div>

            <div
              class="lang-option"
              :class="{ 'lang-option--active': $i18n && $i18n.locale === 'ja' }"
              @click="changeLanguage('ja')"
            >
              <span class="lang-flag-lg">🇯🇵</span>
              <div class="lang-label">
                <span class="lang-name">日本語</span>
                <span class="lang-short">JA</span>
              </div>
              <v-icon v-if="$i18n && $i18n.locale === 'ja'" size="14" color="primary" class="lang-check">fas fa-check</v-icon>
            </div>
          </div>
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
    }
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

.v-theme--dark .header-container {
  background: rgba(13, 13, 13, 0.98) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.v-theme--dark .header-container::before {
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

.lang-activator {
  text-transform: none !important;
  font-weight: 600;
  letter-spacing: 0;
  min-width: 0 !important;
  padding: 0 10px !important;
  height: 36px !important;
  border: 1px solid rgba(0,0,0,0.1);
}

.lang-flag-sm {
  font-size: 1.1em;
  line-height: 1;
}

.lang-code {
  font-size: 0.75rem;
  font-weight: 700;
  color: #555;
}

/* Dropdown panel */
.lang-menu {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
  overflow: hidden;
  min-width: 170px;
  padding: 6px;
  border: 1px solid rgba(0,0,0,0.06);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.18s ease;
}

.lang-option:hover {
  background: rgba(102, 126, 234, 0.07);
}

.lang-option--active {
  background: rgba(76, 175, 80, 0.08);
}

.lang-flag-lg {
  font-size: 1.5em;
  line-height: 1;
  flex-shrink: 0;
}

.lang-label {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.lang-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: #222;
  line-height: 1.2;
}

.lang-short {
  font-size: 0.68rem;
  font-weight: 700;
  color: #aaa;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.lang-check {
  flex-shrink: 0;
}

.lang-divider {
  height: 1px;
  background: rgba(0,0,0,0.06);
  margin: 4px 0;
}

/* Dark mode */
.v-theme--dark .lang-menu {
  background: #1e1e2e;
  border-color: rgba(255,255,255,0.08);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}

.v-theme--dark .lang-option:hover    { background: rgba(255,255,255,0.06); }
.v-theme--dark .lang-option--active  { background: rgba(76,175,80,0.12); }
.v-theme--dark .lang-name            { color: #e8eaed; }
.v-theme--dark .lang-short           { color: #666; }
.v-theme--dark .lang-divider         { background: rgba(255,255,255,0.07); }
.v-theme--dark .lang-code            { color: #aaa; }
.v-theme--dark .lang-activator       { border-color: rgba(255,255,255,0.1); }

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
.v-theme--dark .logo-subtitle {
  color: rgba(255, 255, 255, 0.7) !important;
}

.v-theme--dark .logo-container:hover .logo-subtitle {
  color: #667eea !important;
}
</style>
