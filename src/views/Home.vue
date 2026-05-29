<template>
  <div class="d-flex flex-column align-center mt-4 pt-2">
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
          <span class="indent">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="tag">&lt;p&gt;</span><span class="text">Frontend Engineer</span><span class="tag">&lt;/p&gt;</span>
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

    <div>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="text-h5 mb-0">
              <span>{{ t('home.aboutMe', 'About Me').split(' ')[0] || 'About' }}</span>
              <span class="text-green">{{ t('home.aboutMe', 'More About Me').split(' ')[1] || 'Me' }}</span>
            </h3>
            <div>
              <p>
                {{ t('home.description', 'Hello! I\'m Himal Gurung. I\'m a front-end developer who is passionate about VUE, building great user experiences, fighting for simplicity over complexity and constantly learning. When I\'m not coding, you\'ll find me watching football or thinking about fantasy premier league.') }}
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="d-none d-md-flex">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            icon
            variant="outlined"
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="d-flex d-md-none justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            size="small"
            icon
            variant="outlined"
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- My Journey Section -->
    <div class="mt-8 mb-8" style="width:100%">
      <v-card flat color="transparent" max-width="900" class="mx-auto">
        <v-card-title class="text-center">
          <div class="journey-header">
            <v-icon large color="green" class="mr-3">fas fa-route</v-icon>
            <h2 class="text-h5">
              <span class="text-green">{{ t('home.journey', 'My Journey') }}</span>
            </h2>
            <v-icon large color="green" class="ml-3">fas fa-rocket</v-icon>
          </div>
          <p class="journey-subtitle">{{ t('home.journeySubtitle', 'From a small village to the world stage') }}</p>
        </v-card-title>
        
        <v-card-text>
          <div class="journey-timeline">
            <!-- Golanjor 4 Ranikhola Village -->
            <div class="journey-item" data-aos="fade-right" data-aos-delay="100">
              <div class="journey-icon village">
                <div class="icon-background">
                  <v-icon large color="green">fas fa-home</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge village-badge">
                  <v-icon small color="white">fas fa-map-marker-alt</v-icon>
                  <span>Village</span>
                </div>
                <h3 class="journey-title">Golanjor 4 Ranikhola Village</h3>
                <p class="journey-years">2007 & Earlier</p>
                <p class="journey-description">
                  {{ t('home.villageStory', 'Where my story began - growing up in a small village in Sindhuli, dreaming of bigger possibilities. At just 12 years old, I left home to chase a dream that felt impossible at the time. The foundation of my values and determination was built here.') }}
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
                  <v-icon large color="blue">fas fa-building</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge town-badge">
                  <v-icon small color="white">fas fa-building</v-icon>
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
                  <v-icon large color="orange">fas fa-landmark</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge city-badge">
                  <v-icon small color="white">fas fa-landmark</v-icon>
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
                  <v-icon large color="red">fas fa-flag</v-icon>
                </div>
                <div class="pulse-ring"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge japan-badge">
                  <v-icon small color="white">fas fa-flag</v-icon>
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
                  <v-icon large color="purple">fas fa-broadcast-tower</v-icon>
                </div>
                <div class="pulse-ring"></div>
                <div class="sparkle sparkle-1"></div>
                <div class="sparkle sparkle-2"></div>
                <div class="sparkle sparkle-3"></div>
              </div>
              <div class="journey-content">
                <div class="location-badge tokyo-badge">
                  <v-icon small color="white">fas fa-broadcast-tower</v-icon>
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
                  <v-icon small color="purple">fas fa-star</v-icon>
                  <span>Current Chapter</span>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import translationMixin from '../mixins/translationMixin'

export default {
  mixins: [translationMixin],
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
  bottom: 50px;
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
  padding: 16px 20px 12px;
  border-radius: 12px;
  border-left: 4px solid #4CAF50;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  align-self: flex-start;
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

.journey-item.current .journey-description {
  color: #444;
}

.journey-item.current .journey-years {
  color: #666;
}

.journey-item.current .achievement-tags .tag {
  background: rgba(156, 39, 176, 0.1);
  border-color: rgba(156, 39, 176, 0.3);
  color: #555;
}

/* Dark mode overrides for current item */
.v-theme--dark .journey-item.current .journey-content {
  background: rgba(156, 39, 176, 0.15);
}

.v-theme--dark .journey-item.current .journey-description {
  color: #ccc;
}

.v-theme--dark .journey-item.current .journey-years {
  color: #aaa;
}

.v-theme--dark .journey-item.current .achievement-tags .tag {
  background: rgba(156, 39, 176, 0.2);
  border-color: rgba(156, 39, 176, 0.4);
  color: #bbb;
}

/* Journey icon inner background */
.icon-background {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Pulsing ring on journey icons */
.pulse-ring {
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border-radius: 50%;
  border: 2px solid currentColor;
  opacity: 0;
  animation: pulseRing 2s ease-out infinite;
}

.journey-icon.village .pulse-ring  { color: #4CAF50; }
.journey-icon.town    .pulse-ring  { color: #2196F3; }
.journey-icon.city    .pulse-ring  { color: #FF9800; }
.journey-icon.japan   .pulse-ring  { color: #F44336; }
.journey-icon.tokyo   .pulse-ring  { color: #9C27B0; }

@keyframes pulseRing {
  0%   { transform: scale(0.9); opacity: 0.6; }
  100% { transform: scale(1.4); opacity: 0;   }
}

/* Location badge pill */
.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: white;
  margin-bottom: 8px;
}

.village-badge { background: #4CAF50; }
.town-badge    { background: #2196F3; }
.city-badge    { background: #FF9800; }
.japan-badge   { background: #F44336; }
.tokyo-badge   { background: #9C27B0; }

/* Achievement tag pills */
.achievement-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.achievement-tags .tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #d4d4d4;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  letter-spacing: 0.3px;
}

/* Current chapter indicator */
.current-indicator {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding: 4px 12px;
  background: rgba(156, 39, 176, 0.2);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #9C27B0;
  letter-spacing: 0.5px;
}

/* Tokyo sparkles */
.sparkle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9C27B0;
  opacity: 0;
  animation: sparkle 2s ease-in-out infinite;
}

.sparkle-1 { top: -4px;  right: 4px;  animation-delay: 0s; }
.sparkle-2 { top: 4px;   right: -4px; animation-delay: 0.6s; }
.sparkle-3 { top: -2px;  left: -4px;  animation-delay: 1.2s; }

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50%       { opacity: 1; transform: scale(1); }
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
