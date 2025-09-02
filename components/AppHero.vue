<template>
  <div class="relative isolate hero-section overflow-hidden">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-secondary-500/95 via-secondary-600/90 to-secondary-700/95"></div>
    
    <!-- Decorative background elements -->
    <div class="absolute inset-0 bg-[url('/assets/images/capa.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>
    
    <!-- Content -->
    <div class="relative">
      <main class="section-padding">
        <div class="mx-auto max-w-7xl container-padding">
          <div class="mx-auto max-w-4xl text-center">
            <!-- Animated badge -->
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 text-primary-300 text-sm font-medium mb-8 animate-fade-in">
              <span class="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse-soft"></span>
              Serviços especializados desde 2019
            </div>
            
            <!-- Main headline -->
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up">
              Tanto Na 
              <span class="text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Língua
              </span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl sm:text-2xl text-accent-200 max-w-3xl mx-auto mb-12 animate-slide-up" style="animation-delay: 0.2s;">
              Serviços especializados de Saúde e Educação para maximizar o desenvolvimento global de cada pessoa
            </p>
            
            <!-- CTA buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.4s;">
              <a href="#servicos" class="btn-primary bg-primary-500 hover:bg-primary-600 text-lg px-8 py-4">
                Conheça os Serviços
                <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#equipa" class="btn-outline border-accent-300 text-accent-300 hover:bg-accent-300 hover:text-secondary-900 text-lg px-8 py-4">
                Nossa Equipa
              </a>
            </div>
          </div>
          
          <!-- Stats section -->
          <div class="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style="animation-delay: 0.6s;">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-400 mb-2">21+</div>
              <div class="text-accent-200 text-sm uppercase tracking-wide">Profissionais</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-400 mb-2">250+</div>
              <div class="text-accent-200 text-sm uppercase tracking-wide">Utentes</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-400 mb-2">10</div>
              <div class="text-accent-200 text-sm uppercase tracking-wide">Serviços</div>
            </div>
          </div>
        </div>
      </main>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre-nos" class="text-accent-300 hover:text-primary-400 transition-colors">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse-soft"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-xl animate-pulse-soft" style="animation-delay: 1s;"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
  animation-fill-mode: both;
}
</style>