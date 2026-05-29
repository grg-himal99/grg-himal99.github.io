<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <!-- Code Editor Hero Section -->
    <div class="code-editor-section mb-8">
      <div class="code-editor">
        <div class="editor-header">
          <div class="editor-dots">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
          </div>
          <span class="file-name">PortfolioHero.vue</span>
        </div>
        <div class="editor-content">
          <span class="keyword">&lt;template&gt;</span>
          <br>
          <span class="indent">&nbsp;&nbsp;</span><span class="tag">&lt;div&gt;</span>
          <br>
          <span class="indent">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;h1&gt;</span><span class="text">Hello, I'm Himal</span><span class="emoji">👋</span><span class="tag">&lt;/h1&gt;</span>
          <br>
          <span class="indent">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;p&gt;</span><span class="text">System Engineer</span><span class="tag">&lt;/p&gt;</span>
          <br>
          <span class="indent">&nbsp;&nbsp;</span><span class="tag">&lt;/div&gt;</span>
          <br>
          <span class="keyword">&lt;/template&gt;</span>
          <br><br>
          <span class="keyword">&lt;script&gt;</span>
          <br>
          <span class="keyword">export default</span> { <span class="property">name</span>: <span class="string">'PortfolioHero'</span> }
          <br>
          <span class="keyword">&lt;/script&gt;</span>
        </div>
      </div>
    </div>

    <!-- temporarily removed compare image (Vue 3 alternative needed) -->

    <br>

    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>{{ t('home.aboutMe', 'About Me').split(' ')[0] || 'About' }}</span>
              <span class="green--text">{{ t('home.aboutMe', 'More About Me').split(' ')[1] || 'Me' }}</span>
            </h3>
            <div>
              <p>
                {{ t('home.description', 'Hello! I\'m Himal Gurung. I\'m a front-end developer who is passionate about VUE, building great user experiences, fighting for simplicity over complexity and constantly learning. When I\'m not coding, you\'ll find me watching football or thinking about fantasy premier league.') }}
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outlined
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outlined
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <!-- My Journey Section -->
    <v-flex xs12 class="mt-8 mb-8">
      <v-card flat color="transparent" max-width="900" class="mx-auto">
        <v-card-title class="text-center">
          <div class="journey-header">
            <v-icon large color="green" class="mr-3">mdi-map-marker-path</v-icon>
            <h2 class="headline">
              <span class="green--text">{{ t('home.journey', 'My Journey') }}</span>
            </h2>
            <v-icon large color="green" class="ml-3">mdi-rocket-launch</v-icon>
          </div>
          <p class="journey-subtitle">{{ t('home.journeySubtitle', 'From a small village to the world stage') }}</p>
        </v-card-title>
        
        <v-card-text>
          <div class="journey-timeline">
            <!-- Golanjor 4 Ranikhola Village -->
            <div class="journey-item" data-aos="fade-right" data-aos-delay="100">
              <div class="journey-icon village">
                <div class="icon-background">
                  <v-icon large color="green">mdi-home-village</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge village-badge">
                  <v-icon small color="white">mdi-map-marker</v-icon>
                  <span>Village</span>
                </div>
                <h3 class="journey-title">Golanjor 4 Ranikhola Village</h3>
                <p class="journey-years">2007 & Earlier</p>
                <p class="journey-description">
                  {{ t('home.villageStory', 'Where my story began - growing up in a small village in Sindhuli, dreaming of bigger possibilities. The foundation of my values and determination was built here.') }}
                </p>
                <div class="achievement-tags">
                  <span class="tag">Roots</span>
                  <span class="tag">Dreams</span>
                  <span class="tag">Foundation</span>
                </div>
              </div>
            </div>

            <!-- Sindhuli Madhi -->
            <div class="journey-item" data-aos="fade-left" data-aos-delay="200">
              <div class="journey-icon town">
                <div class="icon-background">
                  <v-icon large color="blue">mdi-city</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge town-badge">
                  <v-icon small color="white">mdi-city</v-icon>
                  <span>Town</span>
                </div>
                <h3 class="journey-title">Sindhuli Madhi</h3>
                <p class="journey-years">2007 - 2011</p>
                <p class="journey-description">
                  {{ t('home.madhiStory', 'My first step towards bigger dreams. Moving to a larger town opened new educational opportunities and broadened my perspective on what was possible.') }}
                </p>
                <div class="achievement-tags">
                  <span class="tag">Education</span>
                  <span class="tag">Growth</span>
                  <span class="tag">Opportunity</span>
                </div>
              </div>
            </div>

            <!-- Kathmandu -->
            <div class="journey-item" data-aos="fade-right" data-aos-delay="300">
              <div class="journey-icon city">
                <div class="icon-background">
                  <v-icon large color="orange">mdi-city-variant</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge city-badge">
                  <v-icon small color="white">mdi-city-variant</v-icon>
                  <span>Capital</span>
                </div>
                <h3 class="journey-title">Kathmandu</h3>
                <p class="journey-years">2011 - 2020</p>
                <p class="journey-description">
                  {{ t('home.kathmanduStory', 'The capital city became my classroom and launchpad. Here I pursued higher education, started my professional journey, and built the foundation for my career in technology.') }}
                </p>
                <div class="achievement-tags">
                  <span class="tag">University</span>
                  <span class="tag">Career Start</span>
                  <span class="tag">Technology</span>
                </div>
              </div>
            </div>

            <!-- Oita, Japan -->
            <div class="journey-item" data-aos="fade-left" data-aos-delay="400">
              <div class="journey-icon japan">
                <div class="icon-background">
                  <v-icon large color="red">mdi-flag</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge japan-badge">
                  <v-icon small color="white">mdi-flag</v-icon>
                  <span>International</span>
                </div>
                <h3 class="journey-title">Oita, Japan</h3>
                <p class="journey-years">2020 - 2025</p>
                <p class="journey-description">
                  {{ t('home.oitaStory', 'My first international adventure! Moving to Japan was a dream come true. Learning a new culture, language, and working in a different professional environment shaped me in ways I never imagined.') }}
                </p>
                <div class="achievement-tags">
                  <span class="tag">Culture</span>
                  <span class="tag">Language</span>
                  <span class="tag">Global</span>
                </div>
              </div>
            </div>

            <!-- Tokyo -->
            <div class="journey-item current" data-aos="fade-right" data-aos-delay="500">
              <div class="journey-icon tokyo">
                <div class="icon-background">
                  <v-icon large color="purple">mdi-tower-lightning</v-icon>
                </div>
                <div class="pulse-ring"></div>
                <div class="sparkle sparkle-1"></div>
                <div class="sparkle sparkle-2"></div>
                <div class="sparkle sparkle-3"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge tokyo-badge">
                  <v-icon small color="white">mdi-tower-lightning</v-icon>
                  <span>Dream City</span>
                </div>
                <h3 class="journey-title">Tokyo</h3>
                <p class="journey-years">2025 - Present</p>
                <p class="journey-description">
                  {{ t('home.tokyoStory', 'Living the dream in one of the world\'s most dynamic cities! Tokyo represents the pinnacle of my journey so far - a testament to how far determination and hard work can take you.') }}
                </p>
                <div class="achievement-tags">
                  <span class="tag">Dream Achieved</span>
                  <span class="tag">Future</span>
                  <span class="tag">Success</span>
                </div>
                <div class="current-indicator">
                  <v-icon small color="purple">mdi-star</v-icon>
                  <span>Current Chapter</span>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import translationMixin from '../mixins/translationMixin'

export default {
  mixins: [translationMixin],
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
      {
        property: 'og:image',
        content: ''
      },
      { property: 'og:description', content: "Himal Gurung's Portfolio" }
    ]
  },
  data () {
    return {
      icons: [
        { href: 'https://github.com/grg-himal99', icon: 'fab fa-github' },
        {
          href: 'https://stackoverflow.com/users/13410588/himal-gurung',
          icon: 'fab fa-stack-overflow'
        },
        {
          href: 'https://www.linkedin.com/in/Himal-Gurung',
          icon: 'fab fa-linkedin-in'
        },
        {
          href: 'https://www.quora.com/profile/Himal-Gurung-5',
          icon: 'fab fa-quora'
        },
        {
          href: 'https://www.facebook.com/himalRedDevil',
          icon: 'fab fa-facebook'
        },
        {
          href: 'https://www.instagram.com/himal_2.0/',
          icon: 'fab fa-instagram'
        }
      ]
    }
  }
}
</script>
<style>
/* Code Editor Styles */
.code-editor-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.code-editor {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 14px;
  line-height: 1.5;
}

.editor-header {
  display: flex;
  align-items: center;
  background: #2d2d2d;
  padding: 12px 16px;
  border-bottom: 1px solid #404040;
}

.editor-dots {
  display: flex;
  align-items: center;
  margin-right: 12px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.file-name {
  color: #d4d4d4;
  font-size: 13px;
  font-weight: 500;
}

.editor-content {
  padding: 20px;
  color: #d4d4d4;
  min-height: 200px;
}

.keyword {
  color: #569cd6;
}

.tag {
  color: #569cd6;
}

.property {
  color: #9cdcfe;
}

.string {
  color: #ce9178;
}

.text {
  color: #d4d4d4;
}

.emoji {
  color: #ffd700;
}

.indent {
  color: transparent;
}

/* Journey Timeline Styles */
.journey-timeline {
  position: relative;
  padding: 20px 0;
}

.journey-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #4CAF50 0%, #2196F3 25%, #FF9800 50%, #F44336 75%, #9C27B0 100%);
}

.journey-item {
  position: relative;
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
}

.journey-icon {
  position: relative;
  z-index: 2;
  background: #1e1e1e;
  border: 3px solid #4CAF50;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.journey-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.journey-icon.town { border-color: #2196F3; }
.journey-icon.city { border-color: #FF9800; }
.journey-icon.japan { border-color: #F44336; }
.journey-icon.tokyo { border-color: #9C27B0; }

.journey-content {
  flex: 1;
  background: rgba(30, 30, 30, 0.8);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #4CAF50;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.journey-content:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
}

.journey-title {
  color: #4CAF50;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.journey-years {
  color: #888;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 12px 0;
  font-style: italic;
}

.journey-description {
  color: #d4d4d4;
  line-height: 1.6;
  margin: 0;
}

.journey-item.current .journey-content {
  border-left-color: #9C27B0;
  background: rgba(156, 39, 176, 0.1);
}

.journey-item.current .journey-title {
  color: #9C27B0;
}

@media (max-width: 768px) {
  .code-editor {
    font-size: 12px;
  }
  
  .editor-content {
    padding: 16px;
    min-height: 180px;
  }

  .journey-timeline::before {
    left: 25px;
  }
  
  .journey-icon {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  
  .journey-content {
    padding: 16px;
  }
  
  .journey-title {
    font-size: 1.1rem;
  }
}
</style>
