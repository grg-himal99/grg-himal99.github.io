<template>
  <v-container class="resume-container">
    <!-- Profile Summary Section -->
    <v-row justify="center" class="mb-4">
      <v-col cols="12" lg="10">
        <v-card class="profile-card elevation-6" rounded="xl">
          <v-card-text class="pa-8">
            <v-row align="center">
              <v-col cols="12" md="3" class="text-center">
                <v-avatar size="120" class="profile-avatar">
                  <v-icon size="60" color="white">fas fa-user</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="12" md="9">
                <div class="profile-content">
                  <h1 class="text-h3 font-weight-bold mb-2">
                    <span>Himal</span>
                    <span class="profile-name-accent">Gurung</span>
                  </h1>
                  <h3 class="profile-subtitle mb-4">Frontend Developer & Software Engineer</h3>
                  <p class="text-body-1 mb-4 profile-description">
                    Passionate frontend developer with 9+ years of experience in Vue.js, JavaScript, and modern web technologies.
                    Currently based in Tokyo, Japan, specializing in creating intuitive user experiences and scalable web applications.
                    Strong background in both frontend and backend development with expertise in multiple programming languages.
                  </p>
                  <div class="profile-stats">
                    <v-chip class="ma-1 profile-chip" size="small">
                      <v-icon start size="small">fas fa-calendar</v-icon>
                      9+ Years Of Experience
                    </v-chip>
                    <v-chip class="ma-1 profile-chip" size="small">
                      <v-icon start size="small">fas fa-map-marker-alt</v-icon>
                      Tokyo, Japan
                    </v-chip>
                    <v-chip class="ma-1 profile-chip" size="small">
                      <v-icon start size="small">fas fa-code</v-icon>
                      Frontend Engineer
                    </v-chip>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-4">
      <!-- Education Section -->
      <v-col cols="12" md="6" class="pa-3">
        <v-card class="resume-card elevation-4" rounded="lg">
          <v-card-title class="pb-2">
            <v-icon color="green" class="mr-3" size="28">fas fa-graduation-cap</v-icon>
            <h2 class="text-h5 font-weight-bold">{{ t('resume.education', 'Education') }}</h2>
          </v-card-title>
          <v-card-text class="pt-2 pb-4 px-4">
            <div class="rt-timeline">
              <div class="rt-item">
                <div class="rt-dot"></div>
                <div class="rt-card">
                  <div class="rt-date-row">
                    <span class="rt-date">2012 – 2017</span>
                  </div>
                  <div class="rt-title">Bachelor in Computer Engineering</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-university</v-icon>
                    National College of Engineering
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Lalitpur, Nepal
                  </div>
                </div>
              </div>

              <div class="rt-item">
                <div class="rt-dot"></div>
                <div class="rt-card">
                  <div class="rt-date-row">
                    <span class="rt-date">2009 – 2011</span>
                  </div>
                  <div class="rt-title">High School</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-school</v-icon>
                    Siddhasthali English High Secondary School
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Sindhuli, Nepal
                  </div>
                </div>
              </div>

              <div class="rt-item">
                <div class="rt-dot"></div>
                <div class="rt-card">
                  <div class="rt-date-row">
                    <span class="rt-date">Up to 2009</span>
                  </div>
                  <div class="rt-title">Secondary School Level</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-school</v-icon>
                    Gaumati Model Higher Secondary School
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Sindhuli, Nepal
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Experience Section -->
      <v-col cols="12" md="6" class="pa-3">
        <v-card class="resume-card elevation-4" rounded="lg">
          <v-card-title class="pb-2">
            <v-icon color="green" class="mr-3" size="28">fas fa-briefcase</v-icon>
            <h2 class="text-h5 font-weight-bold">{{ t('resume.experience', 'Experience') }}</h2>
          </v-card-title>
          <v-card-text class="pt-2 pb-4 px-4">
            <div class="rt-timeline">
              <div class="rt-item">
                <div class="rt-dot rt-dot--active"></div>
                <div class="rt-card rt-card--active">
                  <div class="rt-date-row">
                    <span class="rt-date">Mar 2025 – Present</span>
                    <span class="rt-badge">Current</span>
                  </div>
                  <div class="rt-title">Application Engineer</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-building</v-icon>
                    The Japan Research Institute, Limited
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Tokyo, Japan · via Allegis Group
                  </div>
                </div>
              </div>

              <div class="rt-item">
                <div class="rt-dot"></div>
                <div class="rt-card">
                  <div class="rt-date-row">
                    <span class="rt-date">Jan 2020 – Mar 2025</span>
                  </div>
                  <div class="rt-title">Frontend Developer / Software Engineer</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-building</v-icon>
                    Imac Engineering Co. Ltd.
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Oita, Japan · Dispatched to OEC Co. Ltd.
                  </div>
                </div>
              </div>

              <div class="rt-item">
                <div class="rt-dot"></div>
                <div class="rt-card">
                  <div class="rt-date-row">
                    <span class="rt-date">Jul 2018 – Dec 2019</span>
                  </div>
                  <div class="rt-title">Software Engineer / Web Developer</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-building</v-icon>
                    Sofwena Pvt. Ltd.
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Kathmandu, Nepal
                  </div>
                </div>
              </div>

              <div class="rt-item">
                <div class="rt-dot"></div>
                <div class="rt-card">
                  <div class="rt-date-row">
                    <span class="rt-date">Apr 2017 – May 2018</span>
                  </div>
                  <div class="rt-title">Data Interpretator</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-building</v-icon>
                    Sprout Technology
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Kathmandu, Nepal
                  </div>
                </div>
              </div>

              <div class="rt-item">
                <div class="rt-dot"></div>
                <div class="rt-card">
                  <div class="rt-date-row">
                    <span class="rt-date">May 2016 – Aug 2016</span>
                  </div>
                  <div class="rt-title">Android Developer (Trainee)</div>
                  <div class="rt-org">
                    <v-icon size="11" class="mr-1">fas fa-building</v-icon>
                    Nepdroid Academy
                  </div>
                  <div class="rt-location">
                    <v-icon size="10" class="mr-1">fas fa-map-marker-alt</v-icon>
                    Kathmandu, Nepal
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Technical Skills Section -->
      <v-col cols="12" md="6" class="pa-3">
        <v-card class="resume-card elevation-4" rounded="lg">
          <v-card-title class="pb-2">
            <v-icon color="green" class="mr-3" size="28">fas fa-code</v-icon>
            <h2 class="text-h5 font-weight-bold">
              <span>{{ t('resume.technicalSkills', 'Technical Skills').split(' ')[0] || 'Technical' }}</span>
              <span class="text-green">{{ t('resume.technicalSkills', 'Technical Skills').split(' ')[1] || 'Skills' }}</span>
            </h2>
          </v-card-title>
          <v-card-text class="px-6 pb-6">
            <!-- Frontend Frameworks -->
            <div class="skill-category mb-4">
              <h4 class="skill-category-title mb-3">
                <v-icon small color="green" class="mr-2">fab fa-vuejs</v-icon>
{{ t('resume.frontendTechnologies', 'Frontend Technologies') }}
              </h4>
              <div class="skills-grid">
                <div
                  v-for="skill in frontendSkills"
                  :key="skill.name"
                  :class="['skill-card', `skill-${skill.level.toLowerCase()}`]"
                >
                  <div class="skill-icon">
                    <v-icon size="24" color="white">{{ skill.icon }}</v-icon>
                  </div>
                  <div class="skill-content">
                    <div class="skill-name">{{ skill.name }}</div>
                    <div class="skill-level">{{ skill.level }}</div>
                    <div class="skill-progress">
                      <div class="skill-progress-bar" :style="{ width: skill.percentage + '%' }"></div>
                    </div>
                    <div class="skill-percentage">{{ skill.percentage }}%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile & Testing -->
            <div class="skill-category mb-4">
              <h4 class="skill-category-title mb-3">
                <v-icon small color="green" class="mr-2">fas fa-mobile-alt</v-icon>
                {{ t('resume.mobileTesting', 'Mobile & Testing') }}
              </h4>
              <div class="skills-grid">
                <div
                  v-for="skill in mobileTestingSkills"
                  :key="skill.name"
                  :class="['skill-card', `skill-${skill.level.toLowerCase()}`]"
                >
                  <div class="skill-icon">
                    <v-icon size="24" color="white">{{ skill.icon }}</v-icon>
                  </div>
                  <div class="skill-content">
                    <div class="skill-name">{{ skill.name }}</div>
                    <div class="skill-level">{{ skill.level }}</div>
                    <div class="skill-progress">
                      <div class="skill-progress-bar" :style="{ width: skill.percentage + '%' }"></div>
                    </div>
                    <div class="skill-percentage">{{ skill.percentage }}%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- AI & Development Tools -->
            <div class="skill-category">
              <h4 class="skill-category-title mb-3">
                <v-icon small color="green" class="mr-2">fas fa-robot</v-icon>
                {{ t('resume.aiDevTools', 'AI & Dev Tools') }}
              </h4>
              <div class="skills-grid">
                <div
                  v-for="skill in aiToolsSkills"
                  :key="skill.name"
                  :class="['skill-card', `skill-${skill.level.toLowerCase()}`]"
                >
                  <div class="skill-icon">
                    <v-icon size="24" color="white">{{ skill.icon }}</v-icon>
                  </div>
                  <div class="skill-content">
                    <div class="skill-name">{{ skill.name }}</div>
                    <div class="skill-level">{{ skill.level }}</div>
                    <div class="skill-progress">
                      <div class="skill-progress-bar" :style="{ width: skill.percentage + '%' }"></div>
                    </div>
                    <div class="skill-percentage">{{ skill.percentage }}%</div>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Language & Certifications Section -->
      <v-col cols="12" md="6" class="pa-3">
        <v-card class="resume-card elevation-4" rounded="lg">
          <v-card-title class="pb-2">
            <v-icon color="green" class="mr-3" size="28">fas fa-language</v-icon>
            <h2 class="text-h5 font-weight-bold">
              <span>{{ t('resume.languageSkills', 'Language Skills').split(' ')[0] || 'Language' }}</span>
              <span class="text-green">{{ t('resume.languageCertifications', 'Certifications') }}</span>
            </h2>
          </v-card-title>
          <v-card-text class="px-6 pb-6">
            <!-- Languages -->
            <div class="skill-category mb-4">
              <h4 class="skill-category-title mb-3">
                <v-icon small color="green" class="mr-2">fas fa-globe</v-icon>
                {{ t('resume.languageSkills', 'Language Skills') }}
              </h4>
              <div class="skills-grid">
                <div
                  v-for="language in languageSkills"
                  :key="language.name"
                  :class="['skill-card', `skill-${language.level.toLowerCase()}`]"
                >
                  <div class="skill-icon language-flag">
                    <span class="flag-emoji">{{ language.flag }}</span>
                  </div>
                  <div class="skill-content">
                    <div class="skill-name">{{ language.name }}</div>
                    <div class="skill-level">{{ language.level }}</div>
                    <div class="skill-progress">
                      <div class="skill-progress-bar" :style="{ width: language.percentage + '%' }"></div>
                    </div>
                    <div class="skill-percentage">{{ language.percentage }}%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Language Certifications -->
            <div class="skill-category">
              <h4 class="skill-category-title mb-3">
                <v-icon small color="green" class="mr-2">fas fa-award</v-icon>
                {{ t('resume.languageCertifications', 'Language Certifications') }}
              </h4>
              
              <div class="skills-grid">
                <div class="skill-card skill-expert">
                  <div class="skill-icon language-flag">
                    <span class="flag-emoji">🇺🇸</span>
                  </div>
                  <div class="skill-content">
                    <div class="skill-name">TOEIC</div>
                    <div class="skill-level">910/990</div>
                    <div class="skill-progress">
                      <div class="skill-progress-bar" style="width: 92%"></div>
                    </div>
                    <div class="skill-percentage">92%</div>
                  </div>
                </div>
                
                <div class="skill-card skill-advanced">
                  <div class="skill-icon language-flag">
                    <span class="flag-emoji">🇯🇵</span>
                  </div>
                  <div class="skill-content">
                    <div class="skill-name">JLPT</div>
                    <div class="skill-level">N2 Level</div>
                    <div class="skill-progress">
                      <div class="skill-progress-bar" style="width: 75%"></div>
                    </div>
                    <div class="skill-percentage">N2</div>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Download Section -->
      <v-col cols="12" class="text-center pa-3">
        <v-btn
          href="Resume.pdf"
          color="green"
          size="large"
          rounded
          class="download-btn"
        >
          <v-icon start>fas fa-file-download</v-icon>
          {{ t('resume.downloadResume', 'Download Resume') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import translationMixin from '../mixins/translationMixin'

export default {
  mixins: [translationMixin],
  data () {
    return {
      frontendSkills: [
        { name: 'HTML/CSS', icon: 'fab fa-html5', level: 'Expert', percentage: 90 },
        { name: 'JavaScript', icon: 'fab fa-js-square', level: 'Expert', percentage: 85 },
        { name: 'Vue.js', icon: 'fab fa-vuejs', level: 'Expert', percentage: 85 },
        { name: 'Nuxt.js', icon: 'fas fa-layer-group', level: 'Expert', percentage: 90 },
        { name: 'Angular.js', icon: 'fab fa-angular', level: 'Advanced', percentage: 75 }
      ],
      mobileTestingSkills: [
        { name: 'Android Programming', icon: 'fab fa-android', level: 'Intermediate', percentage: 55 },
        { name: 'JMeter Testing', icon: 'fas fa-vial', level: 'Advanced', percentage: 70 },
        { name: 'Selenium', icon: 'fas fa-robot', level: 'Advanced', percentage: 75 }
      ],
      aiToolsSkills: [
        { name: 'ChatGPT', icon: 'fas fa-comments', level: 'Expert', percentage: 90 },
        { name: 'GitHub Copilot', icon: 'fab fa-github', level: 'Expert', percentage: 85 },
        { name: 'Amazon Q', icon: 'fab fa-aws', level: 'Advanced', percentage: 80 },
        { name: 'AWS', icon: 'fab fa-aws', level: 'Advanced', percentage: 75 }
      ],
      languageSkills: [
        { name: 'English', flag: '🇺🇸', level: 'Fluent', percentage: 90 },
        { name: 'Japanese', flag: '🇯🇵', level: 'Advanced', percentage: 75 },
        { name: 'Hindi', flag: '🇮🇳', level: 'Advanced', percentage: 75 },
        { name: 'Nepali', flag: '🇳🇵', level: 'Native', percentage: 99 }
      ],
      languageCertifications: [
        { 
          name: 'JLPT N2', 
          flag: '🇯🇵', 
          achievement: 'Japanese Language Proficiency', 
          score: 'N2 Level', 
          year: '2023',
          level: 'advanced'
        },
        { 
          name: 'TOEIC', 
          flag: '🇺🇸', 
          achievement: 'English Proficiency', 
          score: '910/990', 
          year: '2022',
          level: 'expert'
        }
      ]
    }
  }
}
</script>

<style scoped>
.resume-container {
  padding: 2rem 1rem;
}

/* ── Resume Timeline ───────────────────────── */
.rt-timeline {
  position: relative;
  padding: 8px 0 4px 0;
}

.rt-timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(180deg, #4CAF50 0%, #a5d6a7 100%);
  border-radius: 2px;
}

.rt-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}

.rt-item:last-child {
  margin-bottom: 0;
}

.rt-dot {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  border: 2.5px solid #4CAF50;
  margin-top: 14px;
  margin-right: 14px;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);
  transition: all 0.25s ease;
}

.rt-dot--active {
  background: #4CAF50;
  box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.2);
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(76,175,80,0.2); }
  50%       { box-shadow: 0 0 0 7px rgba(76,175,80,0.08); }
}

.rt-card {
  flex: 1;
  background: #f9fafb;
  border: 1px solid #e8eaed;
  border-left: 3px solid #4CAF50;
  border-radius: 10px;
  padding: 12px 14px;
  transition: all 0.22s ease;
}

.rt-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.12);
  border-color: #a5d6a7;
}

.rt-card--active {
  background: linear-gradient(135deg, #f1f8e9 0%, #f9fafb 100%);
  border-left-color: #43a047;
}

.rt-date-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}

.rt-date {
  font-size: 0.7rem;
  font-weight: 700;
  color: #4CAF50;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.rt-badge {
  font-size: 0.6rem;
  font-weight: 800;
  background: #4CAF50;
  color: #fff;
  padding: 1px 7px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.rt-title {
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 4px;
  color: #1a1a2e;
}

.rt-org {
  font-size: 0.78rem;
  color: #555;
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}

.rt-location {
  font-size: 0.72rem;
  color: #999;
  display: flex;
  align-items: center;
}

/* Dark mode */
.v-theme--dark .rt-card {
  background: #1e1e2e;
  border-color: #2d2d3d;
  border-left-color: #4CAF50;
}

.v-theme--dark .rt-card--active {
  background: linear-gradient(135deg, #1a2a1a 0%, #1e1e2e 100%);
}

.v-theme--dark .rt-card:hover {
  border-color: #4CAF50;
  box-shadow: 0 4px 16px rgba(76,175,80,0.15);
}

.v-theme--dark .rt-dot {
  background: #1e1e2e;
}

.v-theme--dark .rt-dot--active {
  background: #4CAF50;
}

.v-theme--dark .rt-title   { color: #e8eaed; }
.v-theme--dark .rt-org     { color: #9aa0ac; }
.v-theme--dark .rt-location{ color: #666; }

.v-theme--dark .rt-timeline::before {
  background: linear-gradient(180deg, #4CAF50 0%, #2d4a2d 100%);
}

.profile-card {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.profile-name-accent {
  color: rgba(255, 255, 255, 0.75);
  font-style: italic;
}

.profile-subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.profile-chip {
  background: rgba(255, 255, 255, 0.2) !important;
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.35) !important;
  backdrop-filter: blur(4px);
}

.profile-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.profile-avatar {
  background: rgba(255, 255, 255, 0.2);
  border: 4px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.profile-avatar:hover {
  transform: scale(1.1);
}

.profile-content h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.profile-description {
  line-height: 1.6;
  opacity: 0.95;
}

.profile-stats .v-chip {
  margin: 0.25rem;
  font-weight: 500;
}

.v-theme--dark .profile-card {
  background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
}

.resume-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.resume-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.v-theme--dark .resume-card {
  background: rgba(66, 66, 66, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.skill-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 0.75rem;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.skill-card:hover::before {
  left: 100%;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}

.skill-expert {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
}

.skill-advanced {
  background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
}

.skill-intermediate {
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
}

.skill-fluent {
  background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
}

.skill-native {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  margin-bottom: 0.5rem;
  backdrop-filter: blur(10px);
}

.skill-icon .v-icon {
  font-size: 14px !important;
}

.language-flag .flag-emoji {
  font-size: 24px;
}

.skill-content {
  text-align: left;
}

.skill-name {
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.15rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
  line-height: 1.2;
}

.skill-level {
  font-size: 0.6rem;
  opacity: 0.9;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.skill-progress {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1.5px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.skill-progress-bar {
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.5px;
  transition: width 1s ease-out;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
}

.skill-percentage {
  font-size: 0.7rem;
  font-weight: 600;
  text-align: right;
  opacity: 0.95;
}

.skill-category {
  margin-bottom: 1rem;
}

.skill-category:last-child {
  margin-bottom: 0;
}

.skill-category-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 0.3rem;
  margin-bottom: 0.5rem;
}

.v-theme--dark .skill-category-title {
  color: #ccc;
  border-bottom-color: #555;
}

.cert-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}

.cert-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.cert-card.expert {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
}

.cert-card.advanced {
  background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
}

.cert-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.cert-card:hover::before {
  left: 100%;
}

.cert-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.cert-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.cert-flag {
  font-size: 2rem;
  margin-right: 0.75rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.cert-info {
  flex: 1;
}

.cert-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.cert-level {
  font-size: 0.8rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cert-score {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  backdrop-filter: blur(10px);
}

.score-label {
  font-size: 0.8rem;
  opacity: 0.9;
}

.score-value {
  font-size: 1.1rem;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.achievement-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.achievement-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4CAF50, #2196F3, #FF9800);
}

.achievement-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.toeic-card::before {
  background: linear-gradient(90deg, #4CAF50, #45a049);
}

.jlpt-card::before {
  background: linear-gradient(90deg, #FF9800, #F57C00);
}

.achievement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.achievement-badge {
  display: flex;
  align-items: center;
}

.badge-flag {
  font-size: 2.5rem;
  margin-right: 1rem;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));
}

.badge-text {
  display: flex;
  flex-direction: column;
}

.badge-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: #2c3e50;
  line-height: 1.2;
}

.badge-subtitle {
  font-size: 0.85rem;
  color: #7f8c8d;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.achievement-score {
  display: flex;
  align-items: baseline;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
}

.score-number {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
}

.score-total {
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.8;
  margin-left: 0.2rem;
}

.achievement-level-badge {
  background: linear-gradient(135deg, #FF9800, #F57C00);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(255, 152, 0, 0.3);
}

.level-text {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1;
}

.level-subtitle {
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.9;
  letter-spacing: 1px;
}

.achievement-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.achievement-level {
  font-size: 0.8rem;
  font-weight: 700;
  color: #27ae60;
  background: rgba(76, 175, 80, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

.achievement-year {
  font-size: 0.8rem;
  color: #7f8c8d;
  font-weight: 600;
}

.achievement-bar {
  height: 6px;
  background: #ecf0f1;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 2s ease-out;
  position: relative;
}

.toeic-fill {
  background: linear-gradient(90deg, #4CAF50, #45a049);
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

.jlpt-fill {
  background: linear-gradient(90deg, #FF9800, #F57C00);
  box-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
}

.bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.v-theme--dark .achievement-card {
  background: linear-gradient(135deg, #424242 0%, #303030 100%);
  border-color: rgba(255,255,255,0.1);
}

.v-theme--dark .badge-name {
  color: #ecf0f1;
}

.certificates-showcase {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.certificate-card {
  position: relative;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 
    0 20px 40px rgba(0,0,0,0.1),
    0 8px 16px rgba(0,0,0,0.05),
    inset 0 1px 0 rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.3);
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform-style: preserve-3d;
}

.certificate-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.8s;
}

.certificate-card:hover {
  transform: translateY(-8px) rotateX(5deg) rotateY(5deg);
  box-shadow: 
    0 30px 60px rgba(0,0,0,0.15),
    0 12px 24px rgba(0,0,0,0.1),
    inset 0 1px 0 rgba(255,255,255,0.9);
}

.certificate-card:hover::before {
  transform: translateX(100%);
}

.cert-ribbon {
  position: absolute;
  top: 15px;
  right: -10px;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 0.4rem 1.2rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1px;
  transform: rotate(12deg);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
  border-radius: 4px;
  z-index: 2;
}

.jlpt-ribbon {
  background: linear-gradient(135deg, #FF9800, #F57C00);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.4);
}

.cert-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, transparent 70%);
  animation: pulse 3s ease-in-out infinite;
  pointer-events: none;
}

.jlpt-glow {
  background: radial-gradient(circle, rgba(255, 152, 0, 0.1) 0%, transparent 70%);
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.cert-content {
  position: relative;
  z-index: 1;
}

.cert-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.cert-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(76, 175, 80, 0.3);
  position: relative;
  overflow: hidden;
}

.jlpt-circle {
  background: linear-gradient(135deg, #FF9800, #F57C00);
  box-shadow: 0 8px 24px rgba(255, 152, 0, 0.3);
}

.logo-circle::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.flag-icon {
  font-size: 2rem;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

.cert-title {
  font-size: 1.6rem;
  font-weight: 900;
  color: #2c3e50;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  letter-spacing: -0.5px;
}

.cert-score-display {
  display: flex;
  align-items: baseline;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(76, 175, 80, 0.3);
  position: relative;
  overflow: hidden;
}

.cert-score-display::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: shimmer 2s infinite;
}

.score-main {
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1;
}

.score-divider {
  font-size: 1.8rem;
  margin: 0 0.3rem;
  opacity: 0.7;
}

.score-max {
  font-size: 1.4rem;
  opacity: 0.8;
}

.cert-level-badge {
  background: linear-gradient(135deg, #FF9800, #F57C00);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(255, 152, 0, 0.3);
}

.level-badge {
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
}

.cert-description {
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 0.3px;
}

.cert-achievement {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.achievement-ring {
  width: 80px;
  height: 80px;
}

.ring-progress {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.ring-bg {
  fill: none;
  stroke: #ecf0f1;
  stroke-width: 2;
}

.ring-fill {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  animation: progress 2s ease-out;
}

.toeic-ring {
  stroke: #4CAF50;
  filter: drop-shadow(0 0 6px rgba(76, 175, 80, 0.5));
}

.jlpt-ring {
  stroke: #FF9800;
  filter: drop-shadow(0 0 6px rgba(255, 152, 0, 0.5));
}

@keyframes progress {
  0% { stroke-dasharray: 0, 100; }
}

.ring-text {
  fill: #2c3e50;
  font-size: 0.6rem;
  font-weight: 700;
  text-anchor: middle;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}

.cert-year {
  background: linear-gradient(135deg, #34495e, #2c3e50);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 4px 12px rgba(52, 73, 94, 0.3);
  letter-spacing: 0.5px;
}

.v-theme--dark .certificate-card {
  background: linear-gradient(145deg, #424242 0%, #303030 50%, #424242 100%);
  border-color: rgba(255,255,255,0.1);
}

.v-theme--dark .cert-title {
  color: #ecf0f1;
}

.cert-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border-left: 4px solid #4CAF50;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cert-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.cert-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.cert-card:hover::before {
  transform: translateX(100%);
}

.jlpt-card {
  border-left-color: #FF9800;
}

.cert-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cert-flag {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.cert-info {
  display: flex;
  flex-direction: column;
}

.cert-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: #2c3e50;
  line-height: 1.2;
}

.cert-desc {
  font-size: 0.85rem;
  color: #7f8c8d;
  font-weight: 500;
}

.cert-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: right;
}

.cert-score {
  font-size: 2.2rem;
  font-weight: 900;
  color: #4CAF50;
  line-height: 1;
}

.cert-total {
  font-size: 1.4rem;
  color: #7f8c8d;
  font-weight: 600;
}

.cert-level {
  font-size: 2.2rem;
  font-weight: 900;
  color: #FF9800;
  background: rgba(255, 152, 0, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  line-height: 1;
}

.cert-year {
  font-size: 0.8rem;
  color: #95a5a6;
  font-weight: 600;
  background: #ecf0f1;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
}

.v-theme--dark .cert-card {
  background: linear-gradient(135deg, #424242 0%, #303030 100%);
  border-left-color: #4CAF50;
}

.v-theme--dark .jlpt-card {
  border-left-color: #FF9800;
}

.v-theme--dark .cert-name {
  color: #ecf0f1;
}

.v-theme--dark .cert-desc {
  color: #bdc3c7;
}

.achievement-showcase {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.achievement-showcase::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4CAF50, #45a049);
}

.jlpt-showcase::before {
  background: linear-gradient(90deg, #FF9800, #F57C00);
}

.achievement-showcase:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.achievement-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.flag-circle {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
}

.jlpt-circle {
  background: linear-gradient(135deg, #FF9800, #F57C00);
  box-shadow: 0 4px 16px rgba(255, 152, 0, 0.3);
}

.flag {
  font-size: 2rem;
  z-index: 2;
}

.excellence-ring, .mastery-ring {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 3px solid #4CAF50;
  border-radius: 50%;
  border-top-color: transparent;
  animation: rotate 3s linear infinite;
}

.mastery-ring {
  border-color: #FF9800;
  border-top-color: transparent;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.achievement-info {
  flex: 1;
  margin-left: 1rem;
}

.cert-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.2rem;
}

.cert-subtitle {
  font-size: 0.85rem;
  color: #7f8c8d;
  font-weight: 500;
}

.excellence-badge {
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
  min-width: 80px;
}

.mastery-badge {
  background: linear-gradient(135deg, #FF9800, #F57C00);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(255, 152, 0, 0.3);
  min-width: 80px;
}

.badge-icon {
  font-size: 1.2rem;
  font-weight: 900;
  margin-bottom: 0.2rem;
}

.badge-text {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.score-display {
  position: relative;
}

.score-bar {
  position: relative;
  height: 60px;
  background: #ecf0f1;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.score-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 92%;
  background: linear-gradient(90deg, #4CAF50, #45a049);
  border-radius: 30px;
  animation: fillScore 2s ease-out;
}

@keyframes fillScore {
  0% { width: 0%; }
  100% { width: 92%; }
}

.score-text {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: baseline;
  color: white;
  font-weight: 900;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.score-number {
  font-size: 2.2rem;
  line-height: 1;
}

.score-separator {
  font-size: 1.6rem;
  margin: 0 0.3rem;
  opacity: 0.8;
}

.score-max {
  font-size: 1.4rem;
  opacity: 0.9;
}

.level-display {
  position: relative;
}

.level-progression {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  position: relative;
}

.level-progression::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 3px;
  background: #ecf0f1;
  z-index: 1;
}

.level-step {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.level-step.completed {
  background: #4CAF50;
  color: white;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
}

.level-step.current {
  background: linear-gradient(135deg, #FF9800, #F57C00);
  color: white;
  box-shadow: 0 4px 16px rgba(255, 152, 0, 0.4);
  transform: scale(1.2);
  border: 3px solid white;
}

.level-step.next {
  background: #ecf0f1;
  color: #95a5a6;
  border: 2px dashed #bdc3c7;
}

.achievement-level {
  text-align: center;
  font-size: 0.85rem;
  color: #7f8c8d;
  font-weight: 600;
  background: rgba(76, 175, 80, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin-top: 0.5rem;
}

.jlpt-showcase .achievement-level {
  background: rgba(255, 152, 0, 0.1);
}

.v-theme--dark .achievement-showcase {
  background: linear-gradient(135deg, #424242 0%, #303030 100%);
}

.v-theme--dark .cert-title {
  color: #ecf0f1;
}

.lang-certs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cert-item {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-left: 5px solid #4CAF50;
  transition: all 0.3s ease;
}

.cert-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.jlpt {
  border-left-color: #FF9800;
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cert-flag {
  font-size: 3rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.cert-details {
  flex: 1;
}

.cert-details h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
}

.cert-details p {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0;
  font-weight: 500;
}

.cert-achievement {
  text-align: center;
  min-width: 100px;
}

.score {
  font-size: 2.5rem;
  font-weight: 900;
  color: #4CAF50;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.score span {
  font-size: 1.2rem;
  color: #95a5a6;
  font-weight: 600;
}

.level {
  font-size: 2.5rem;
  font-weight: 900;
  color: #FF9800;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.grade {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

.toeic .grade {
  background: #4CAF50;
  color: white;
}

.jlpt .grade {
  background: #FF9800;
  color: white;
}

.v-theme--dark .cert-item {
  background: #424242;
  border-left-color: #4CAF50;
}

.v-theme--dark .jlpt {
  border-left-color: #FF9800;
}

.v-theme--dark .cert-details h3 {
  color: #ecf0f1;
}

.v-theme--dark .cert-details p {
  color: #bdc3c7;
}

.certs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cert {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
  font-size: 1rem;
}

.cert:last-child {
  border-left-color: #FF9800;
}

.cert strong {
  color: #2c3e50;
  font-weight: 700;
}

.v-theme--dark .cert {
  background: #424242;
  color: #ecf0f1;
}

.v-theme--dark .cert strong {
  color: #fff;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cert-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 6px;
  border-left: 3px solid #4CAF50;
  transition: all 0.3s ease;
}

.cert-item:hover {
  background: rgba(76, 175, 80, 0.2);
  transform: translateX(4px);
}

.cert-name {
  flex: 1;
  font-weight: 600;
  font-size: 0.85rem;
}

.cert-year {
  font-size: 0.75rem;
  color: #666;
  background: rgba(76, 175, 80, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.v-theme--dark .cert-item {
  background: rgba(76, 175, 80, 0.15);
}

.v-theme--dark .cert-year {
  color: #ccc;
  background: rgba(76, 175, 80, 0.3);
}

.download-btn {
  padding: 12px 32px !important;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(76, 175, 80, 0.3);
}

@media (max-width: 960px) {
  .resume-container {
    padding: 1rem 0.5rem;
  }
  
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.4rem;
  }
  
  .skill-card {
    padding: 0.5rem;
  }
  
  .skill-category {
    margin-bottom: 0.75rem;
  }
  
  .achievement-card {
    padding: 1rem;
  }
  
  .badge-flag {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
  
  .badge-name {
    font-size: 1.2rem;
  }
  
  .score-number {
    font-size: 1.5rem;
  }
  
  .certificate-card {
    padding: 1.2rem;
  }
  
  .logo-circle {
    width: 50px;
    height: 50px;
  }
  
  .flag-icon {
    font-size: 1.5rem;
  }
  
  .cert-title {
    font-size: 1.3rem;
  }
  
  .score-main {
    font-size: 2rem;
  }
  
  .level-badge {
    font-size: 1.5rem;
  }
  
  .cert-card {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .cert-left {
    justify-content: center;
  }
  
  .cert-flag {
    font-size: 2rem;
  }
  
  .cert-name {
    font-size: 1.1rem;
  }
  
  .cert-score {
    font-size: 1.8rem;
  }
  
  .achievement-showcase {
    padding: 1.2rem;
  }
  
  .flag-circle {
    width: 50px;
    height: 50px;
  }
  
  .flag {
    font-size: 1.5rem;
  }
  
  .cert-title {
    font-size: 1.2rem;
  }
  
  .score-bar {
    height: 50px;
  }
  
  .score-number {
    font-size: 1.8rem;
  }
  
  .level-step {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
  
  .skill-name {
    font-size: 1rem;
  }
  
  .profile-card {
    margin: 0.5rem;
  }
  
  .profile-content h1 {
    font-size: 2rem !important;
  }
}
</style>