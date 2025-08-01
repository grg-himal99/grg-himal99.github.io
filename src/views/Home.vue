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

    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br>

    <vue-typer class="headline" :repeat="0" :text="t('home.name', 'Himal Gurung')"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
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
  </v-layout>
</template>

<script>
import { VueTyper } from 'vue-typer'
import VueCompareImage from 'vue-compare-image'
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
  components: {
    'vue-typer': VueTyper,
    VueCompareImage
  },
  computed: {
    text1() {
      if (!this.$i18n) {
        return ['Front-End Developer', 'Software Engineer', 'Web Developer', 'Android Developer', 'System Engineer']
      }
      return this.$i18n.locale === 'ja' 
        ? ['フロントエンド開発者', 'ソフトウェアエンジニア', 'ウェブ開発者', 'アンドロイド開発者', 'システムエンジニア']
        : ['Front-End Developer', 'Software Engineer', 'Web Developer', 'Android Developer', 'System Engineer']
    }
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
      ],
      leftImage: '',
      rightImage: '',
      leftImage2: '',
      rightImage2: '',
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    }
  }
}
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}

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

@media (max-width: 768px) {
  .code-editor {
    font-size: 12px;
  }
  
  .editor-content {
    padding: 16px;
    min-height: 180px;
  }
}
</style>
