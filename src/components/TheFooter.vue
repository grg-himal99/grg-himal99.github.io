<template>
  <footer class="site-footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="currentColor"/>
      </svg>
    </div>

    <div class="footer-body">
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <div class="brand-logo-row">
            <div class="brand-icon"><v-icon size="18" color="#4CAF50">fas fa-code</v-icon></div>
            <div class="brand-name">Himal<span class="accent">Gurung</span></div>
          </div>
          <p class="brand-tagline">{{ t('footer.tagline', 'Frontend Developer & Software Engineer') }}</p>
          <div class="brand-location">
            <v-icon size="12" class="mr-1" color="#4CAF50">fas fa-map-marker-alt</v-icon>
            {{ t('footer.location', 'Tokyo, Japan') }}
          </div>
        </div>

        <!-- Navigate -->
        <div class="footer-nav-col">
          <div class="col-heading">Navigate</div>
          <router-link to="/" class="nav-link">
            <v-icon size="12" class="mr-2">fas fa-home</v-icon>Home
          </router-link>
          <router-link to="/resume" class="nav-link">
            <v-icon size="12" class="mr-2">fas fa-file-alt</v-icon>Resume
          </router-link>
          <router-link to="/contact" class="nav-link">
            <v-icon size="12" class="mr-2">fas fa-envelope</v-icon>Contact
          </router-link>
        </div>

        <!-- Connect -->
        <div class="footer-connect-col">
          <div class="col-heading">Connect</div>
          <div class="social-grid">
            <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank"
               class="social-pill" :style="{ '--hover': s.color }">
              <v-icon size="15">{{ s.icon }}</v-icon>
              <span>{{ s.name }}</span>
            </a>
          </div>
        </div>

      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <span class="copy">
          <v-icon size="11" class="mr-1">fas fa-copyright</v-icon>
          {{ new Date().getFullYear() }} Himal Gurung · All rights reserved
        </span>
        <span class="made-with">
          {{ t('footer.craftedWith', 'Crafted with') }}
          <v-icon size="12" color="#e74c3c" class="heart-icon">fas fa-heart</v-icon>
          {{ t('footer.using', 'using') }}
          <v-icon size="16" color="#4fc08d" class="vue-icon ml-1">fab fa-vuejs</v-icon>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import translationMixin from '../mixins/translationMixin'

export default {
  mixins: [translationMixin],
  data() {
    return {
      socials: [
        { name: 'GitHub',    icon: 'fab fa-github',      url: 'https://github.com/grg-himal99',                       color: '#6e7681' },
        { name: 'LinkedIn',  icon: 'fab fa-linkedin-in',  url: 'https://www.linkedin.com/in/Himal-Gurung',              color: '#0077b5' },
        { name: 'Instagram', icon: 'fab fa-instagram',    url: 'https://www.instagram.com/himal_2.0/',                  color: '#e4405f' },
        { name: 'Facebook',  icon: 'fab fa-facebook-f',   url: 'https://www.facebook.com/himalRedDevil',                color: '#1877f2' }
      ]
    }
  }
}
</script>

<style scoped>
.site-footer {
  position: relative;
  margin-top: 4rem;
}

.footer-wave {
  display: block;
  line-height: 0;
  margin-bottom: -1px;
  color: #0d1117; /* light mode: dark wave on white page */
}

.v-theme--dark .footer-wave {
  color: #1a1a2e;
}

.footer-wave svg {
  width: 100%;
  height: 70px;
  display: block;
}

.footer-body {
  background: #0d1117;
  padding: 2.5rem 2rem 1.5rem;
  position: relative;
}

.v-theme--dark .footer-body {
  background: #1a1a2e;
}

.footer-body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #4CAF50, #2196F3, #FF9800, #e4405f, #4CAF50);
  background-size: 200% 100%;
  animation: gradientSlide 4s linear infinite;
}

@keyframes gradientSlide {
  0%   { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.4fr;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* Brand */
.brand-logo-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
}

.brand-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(76, 175, 80, 0.15);
  border: 1px solid rgba(76, 175, 80, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: #e6edf3;
  letter-spacing: -0.3px;
}

.brand-name .accent {
  color: #4CAF50;
  margin-left: 4px;
}

.brand-tagline {
  font-size: 0.8rem;
  color: #7d8590;
  margin: 0 0 0.6rem;
  line-height: 1.5;
}

.brand-location {
  font-size: 0.78rem;
  color: #7d8590;
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
}

.brand-status {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  color: #4CAF50;
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.25);
  padding: 0.25rem 0.7rem;
  border-radius: 20px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4CAF50;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

/* Nav col */
.col-heading {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #4CAF50;
  margin-bottom: 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #7d8590;
  text-decoration: none;
  padding: 0.35rem 0;
  transition: color 0.2s, transform 0.2s;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.nav-link:last-child { border-bottom: none; }

.nav-link:hover {
  color: #e6edf3;
  transform: translateX(4px);
}

/* Social pills */
.social-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.8rem;
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  color: #7d8590;
  text-decoration: none;
  font-size: 0.82rem;
  transition: all 0.22s ease;
}

.social-pill:hover {
  background: color-mix(in srgb, var(--hover) 15%, transparent);
  border-color: color-mix(in srgb, var(--hover) 40%, transparent);
  color: #e6edf3;
  transform: translateX(4px);
}

/* Divider */
.footer-divider {
  max-width: 1100px;
  margin: 2rem auto 1.25rem;
  height: 1px;
  background: rgba(255,255,255,0.07);
}

/* Bottom bar */
.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.copy, .made-with {
  font-size: 0.78rem;
  color: #484f58;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.heart-icon {
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.25); }
}

.vue-icon {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.6rem;
  }

  .social-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
