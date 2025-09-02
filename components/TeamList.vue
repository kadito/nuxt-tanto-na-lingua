<template>
  <div class="section-padding bg-secondary-500 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0">
      <div class="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative mx-auto max-w-7xl container-padding">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-400/20 text-primary-300 mb-6">
          Nossa Equipa
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6">
          Profissionais 
          <span class="text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            apaixonados
          </span>
        </h2>
        <p class="text-xl text-accent-200 leading-relaxed">
          A nossa equipa é constituída por um corpo multidisciplinar apaixonado por aquilo que faz. Vamos conhecê-la?
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        <div v-for="person in orderedTeam" :key="person.id" 
             class="group text-center">
          <a :href="personUrl(person)" class="block">
            <!-- Profile Image -->
            <div class="relative mb-4 inline-block">
              <div class="relative overflow-hidden rounded-2xl">
                <img class="w-32 h-32 object-cover transition-transform duration-300 group-hover:scale-110" 
                     :src="person.roundedImageUrl" 
                     :alt="`${person.firstname} ${person.lastname}`" />
                
                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <!-- Hover content -->
                <div class="absolute bottom-3 left-3 right-3 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div class="text-white text-xs font-medium">Ver perfil</div>
                </div>
              </div>
              
              <!-- Decorative ring -->
              <div class="absolute -inset-1 rounded-2xl border-2 border-primary-400/20 group-hover:border-primary-400/60 transition-colors duration-300"></div>
            </div>
            
            <!-- Person Info -->
            <div class="space-y-1">
              <h3 class="text-base font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                {{ person.firstname }} {{ person.lastname }}
              </h3>
              <p class="text-sm text-accent-300 group-hover:text-accent-200 transition-colors duration-200">
                {{ person.mainService }}
              </p>
            </div>
          </a>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div class="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-primary-400/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
          </div>
          <div class="text-center sm:text-left">
            <h3 class="font-semibold text-white mb-1">Quer conhecer melhor a nossa equipa?</h3>
            <p class="text-accent-200 text-sm">Clique em qualquer perfil para saber mais sobre cada profissional</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { inject } from 'vue';

  const team = inject('team');

  const orderedTeam = [team.shift()]
  orderedTeam.push(...team.sort((a, b) => a.firstname.localeCompare(b.firstname)));

  const personUrl = (person) => {
    return `/equipa/${person.id}`
  };
</script>