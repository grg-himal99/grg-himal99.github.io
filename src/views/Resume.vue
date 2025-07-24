<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">2012 -</div>
                <div class="caption font-weight-bold green--text">2017</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Bachelor In Computer Engineering</strong>
                <div class="caption mb-2">National College of ENgineering, Lalitpur Nepal</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">2009 -</div>
                <div class="caption font-weight-bold green--text">2011</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>High School</strong>
                <div class="caption mb-2">Siddhasthali English High Secondary School, Sindhuli Nepal</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <!-- <div class="caption font-weight-bold green--text">SEP 2003 -</div> -->
                <div class="caption font-weight-bold green--text">Upto 2009</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Secondary School Level</strong>
                <div class="caption mb-2">Gaumati Model Higher Secondary School, Sindhuli Nepal</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JAN 2020 -</div>
                <div class="caption font-weight-bold green--text">PRESENT</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Frontend Developer/ Software Engineer</strong>
                <div class="caption mb-2">Imac Engineering Co. Ltd. (Dispatched to OEC Co. Ltd.)</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">JULY 2018 -</div>
                <div class="caption font-weight-bold green--text">DEC 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Software Engineer/ Web Developer</strong>
                <div class="caption mb-2">Sofwena Pvt. Ltd. </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">APR 2017 -</div>
                <div class="caption font-weight-bold green--text">MAY 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Data Interpretator</strong>
                <div class="caption mb-2">Sprout Technology</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">MAY 2016 -</div>
                <div class="caption font-weight-bold green--text">AUG 2016</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Android Developer (Trainee)</strong>
                <div class="caption mb-2">Nepdroid Academy</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>VUE.JS</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>HTML/CSS</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>JavaScript</strong>
        <v-progress-linear v-model="buffer7" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Python</strong>
        <v-progress-linear v-model="buffer8" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Android Programming</strong>
        <v-progress-linear v-model="buffer9" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>React.JS</strong>
        <v-progress-linear v-model="buffer10" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Language</span>

          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>English</strong>
        <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Japanese</strong>
        <v-progress-linear v-model="buffer2" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Hindi</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Nepali</strong>
        <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="hiddenStyle">Hindi</strong>
        <v-progress-linear class="hiddenStyle" v-model="buffer3" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong class="hiddenStyle">Nepali</strong>
        <v-progress-linear class="hiddenStyle" v-model="buffer4" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="Resume.pdf"
          color="green"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Resume',
    titleTemplate: "%s ← Himal's Space",
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End'
      },
      { charset: 'utf-8' },
      { property: 'og:title', content: "Himal' Space" },
      { property: 'og:site_name', content: "Himal' Space" },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://Himal.space' },
      {
        property: 'og:image',
        content: 'https://i.imgur.com/Dcz2PGx.jpg'
      },
      {
        property: 'og:description',
        content:
          'Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End'
      }
    ]
  },
  data () {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      buffer7: 0,
      buffer8: 0,
      buffer9: 0,
      buffer10: 0,
      bufferValue: 100,
      interval: 0
    }
  },
  mounted () {
    this.startBuffer()
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    startBuffer () {
      this.interval = setInterval(() => {
        this.buffer1 = 90
        this.buffer2 = 70
        this.buffer3 = 70
        this.buffer4 = 99
        this.buffer5 = 80
        this.buffer6 = 85
        this.buffer7 = 80
        this.buffer8 = 50
        this.buffer9 = 50
        this.buffer10 = 40
      }, 800)
    }
  }
}
</script>
<style >
.hiddenStyle{
   visibility: hidden
}
</style>
