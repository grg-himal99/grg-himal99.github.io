export default {
  computed: {
    t() {
      return (key, fallback = '') => {
        try {
          return (this.$t && this.$t(key)) || fallback
        } catch (error) {
          console.warn('Translation error:', error)
          return fallback
        }
      }
    }
  }
}