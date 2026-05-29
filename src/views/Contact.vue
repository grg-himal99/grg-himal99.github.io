<template>
  <v-container class="contact-container">
    <v-row justify="center" align="center" class="min-height-screen">
      <v-col cols="12" md="8" lg="6">
        <v-card class="contact-card elevation-8" rounded="lg">
          <v-card-title class="justify-center pb-6">
            <h1 class="display-1 font-weight-light">
              <span>{{ t('contact.getInTouch', 'Get In Touch').split(' ')[0] }} {{ t('contact.getInTouch', 'Get In Touch').split(' ')[1] }}</span>
              <span class="green--text font-weight-bold">{{ t('contact.getInTouch', 'Get In Touch').split(' ')[2] }}</span>
            </h1>
          </v-card-title>
          
          <v-card-text class="px-8 pb-8">
            <v-row>
              <v-col cols="12" class="contact-item">
                <div class="d-flex align-center justify-center mb-4">
                  <v-avatar color="green" size="56" class="mr-4">
                    <v-icon color="white" size="28">fas fa-map-marker-alt</v-icon>
                  </v-avatar>
                  <div class="contact-info">
                    <div class="subtitle-1 font-weight-bold">{{ t('resume.location', 'Tokyo, Japan').split(',')[0] }}</div>
                    <div class="body-1">{{ t('footer.location', 'Tokyo, Japan') }}</div>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" class="contact-item">
                <div class="d-flex align-center justify-center mb-4">
                  <v-avatar color="green" size="56" class="mr-4">
                    <v-icon color="white" size="28">fas fa-envelope</v-icon>
                  </v-avatar>
                  <div class="contact-info">
                    <div class="subtitle-1 font-weight-bold">{{ t('contact.email', 'Email') }}</div>
                    <div class="body-1">himalgurung45[at] <span class="green--text">gmail.com</span></div>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" class="contact-item">
                <div class="d-flex align-center justify-center mb-4">
                  <v-avatar color="green" size="56" class="mr-4">
                    <v-icon color="white" size="28">fas fa-phone</v-icon>
                  </v-avatar>
                  <div class="contact-info">
                    <div class="subtitle-1 font-weight-bold">Phone</div>
                    <div class="body-1">070-<span class="green--text">xxxx-xxxx</span></div>
                  </div>
                </div>
              </v-col>
            </v-row>
            
            <v-divider class="my-6"></v-divider>
            
            <div class="text-center">
              <h3 class="subtitle-1 font-weight-bold mb-4">Connect With Me</h3>
              <div class="social-links">
                <v-btn
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  icon
                  large
                  class="mx-2 social-btn"
                  :color="social.color"
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import translationMixin from '../mixins/translationMixin'

export default {
  mixins: [translationMixin],
  data() {
    return {
      socialLinks: [
        { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/grg-himal99', color: '#333' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/Himal-Gurung', color: '#0077b5' },
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/himal_2.0/', color: '#e4405f' },
        { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com/himalRedDevil', color: '#1877f2' }
      ]
    }
  }
}
</script>

<style scoped>
.contact-container {
  padding: 2rem 1rem;
}

.min-height-screen {
  min-height: 70vh;
}

.contact-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.v-theme--dark .contact-card {
  background: rgba(66, 66, 66, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item {
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
}

.contact-info {
  text-align: left;
  flex: 1;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

@media (max-width: 600px) {
  .contact-card {
    margin: 1rem;
  }
  
  .d-flex {
    flex-direction: column;
    text-align: center;
  }
  
  .contact-info {
    text-align: center;
    margin-top: 1rem;
  }
}
</style>