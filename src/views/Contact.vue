<template>
  <v-container class="contact-container">
    <v-row justify="center" align="center" class="min-height-screen">
      <v-col cols="12" md="8" lg="6">
        <v-card class="contact-card elevation-8" rounded="lg">
          <v-card-title class="justify-center pb-6">
            <h1 class="display-1 font-weight-light">
              <span>Get In</span>
              <span class="green--text font-weight-bold">Touch</span>
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
                    <div class="subtitle-1 font-weight-bold">Location</div>
                    <div class="body-1">Tokyo, <span class="green--text">Japan</span></div>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" class="contact-item">
                <div class="d-flex align-center justify-center mb-4">
                  <v-avatar color="green" size="56" class="mr-4">
                    <v-icon color="white" size="28">fas fa-envelope</v-icon>
                  </v-avatar>
                  <div class="contact-info">
                    <div class="subtitle-1 font-weight-bold">Email</div>
                    <div class="body-1">himal.gurung45[at] <span class="green--text">gmail.com</span></div>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
    titleTemplate: "%s ← Himal's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: "Himal Gurung's Contact Tokyo Japan Get in Touch"
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Himal' Space" },
      { property: 'og:site_name', content: "Himal' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://Himal.space' },
      {
        property: 'og:description',
        content: "Himal Gurung's Contact Tokyo Japan Get in Touch"
      }
    ]
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

.theme--dark .contact-card {
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