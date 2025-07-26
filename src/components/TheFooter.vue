<template>
  <v-footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="brand-text">
          <span class="brand-name">Himal</span>
          <span class="brand-surname">Gurung</span>
        </div>
        <div class="tagline">{{ t('footer.tagline', 'Frontend Developer & Software Engineer') }}</div>
      </div>
      
      <div class="footer-center">
        <div class="developed-text">
          {{ t('footer.craftedWith', 'Crafted with') }}
          <v-icon small color="#e74c3c" class="heart-icon">fas fa-heart</v-icon>
          {{ t('footer.using', 'using') }}
          <v-icon small color="#4fc08d" class="vue-icon">fab fa-vuejs</v-icon>
        </div>
      </div>
      
      <div class="footer-right">
        <div class="copyright">
          <v-icon small class="mr-1">fas fa-copyright</v-icon>
          {{ new Date().getFullYear() }} {{ t('footer.allRightsReserved', 'All rights reserved') }}
        </div>
        <div class="location">
          <v-icon small class="mr-1">fas fa-map-marker-alt</v-icon>
          {{ t('footer.location', 'Tokyo, Japan') }}
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
import translationMixin from '../mixins/translationMixin'

export default {
  mixins: [translationMixin]
}
</script>

<style lang="scss" scoped>
.custom-footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  padding: 2rem 1rem !important;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
}

.custom-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><defs><radialGradient id="a" cx="50%" cy="0%" r="100%"><stop offset="0%" stop-color="%23fff" stop-opacity=".1"/><stop offset="100%" stop-color="%23fff" stop-opacity="0"/></radialGradient></defs><rect width="100" height="20" fill="url(%23a)"/></svg>') repeat-x;
  pointer-events: none;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.footer-left {
  flex: 1;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.brand-name {
  color: white;
}

.brand-surname {
  color: #4CAF50;
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
}

.footer-center {
  flex: 1;
  text-align: center;
}

.developed-text {
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.heart-icon {
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.vue-icon {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.footer-right {
  flex: 1;
  text-align: right;
}

.copyright {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.location {
  font-size: 0.85rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.theme--dark .custom-footer {
  background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%) !important;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-left,
  .footer-center,
  .footer-right {
    flex: none;
  }
  
  .footer-right {
    text-align: center;
  }
  
  .copyright,
  .location {
    justify-content: center;
  }
  
  .brand-text {
    font-size: 1.3rem;
  }
}
</style>
