<template>
  <div class="portfolio-hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>Hello, I'm Himal 👋</h1>
        <p>System Engineer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioHero'
}
</script>

<style scoped>
.portfolio-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  animation: fadeInUp 1s ease-out;
}

.hero-text p {
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2.5rem;
  }
  
  .hero-text p {
    font-size: 1.2rem;
  }
}
</style> 