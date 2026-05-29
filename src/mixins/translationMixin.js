export default {
  computed: {
    t() {
      return (key, fallback = '') => {
        try {
          if (this.$te && this.$te(key)) return this.$t(key)
          return fallback
        } catch (error) {
          console.warn('Translation error:', error)
          return fallback
        }
      }
    }
  }
}
