<template>
  <div class="lazy-image-wrapper">
    <img
      v-if="loaded"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onLoad"
      @error="onError"
    />
    <div v-else class="lazy-placeholder" :style="placeholderStyle">
      <v-progress-circular indeterminate color="green" size="24"></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 'auto'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    }
  },
  data() {
    return {
      loaded: false,
      observer: null
    }
  },
  computed: {
    placeholderStyle() {
      return {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: typeof this.height === 'number' ? `${this.height}px` : this.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }
    }
  },
  mounted() {
    this.createObserver()
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    createObserver() {
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.loadImage()
              this.observer.unobserve(entry.target)
            }
          })
        })
        this.observer.observe(this.$el)
      } else {
        this.loadImage()
      }
    },
    loadImage() {
      const img = new Image()
      img.onload = () => {
        this.loaded = true
      }
      img.onerror = () => {
        this.onError()
      }
      img.src = this.src
    },
    onLoad() {
      this.$emit('load')
    },
    onError() {
      this.$emit('error')
    }
  }
}
</script>

<style scoped>
.lazy-image-wrapper {
  display: inline-block;
}

.lazy-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>