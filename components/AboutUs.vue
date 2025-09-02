<template>
  <div class="relative isolate overflow-hidden section-padding bg-white">
    <!-- Decorative background patterns -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-20 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="mx-auto max-w-7xl container-padding">
      <!-- Centered Header Section -->
      <div class="text-center mb-16">
        <div class="mb-6">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            Sobre Nós
          </span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
          Maximizando o 
          <span class="text-gradient">desenvolvimento global</span> 
          de cada pessoa
        </h2>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="lg:pr-8">
          <div class="prose prose-lg text-neutral-600 mb-8">
            <p class="text-xl leading-relaxed mb-6">
              A <strong class="text-primary-600">Tanto na Língua</strong>, criada em 2019, possui os serviços de terapia da fala, ensino especializado, psicomotricidade, psicologia educacional, psicologia clínica, terapia ocupacional, musicoterapia, fisioterapia, tutorias e classes de estimulação global.
            </p>
            
            <p class="mb-6">
              Este projecto surgiu da vontade de maximizar o desenvolvimento global de cada criança, priorizando o trabalho em equipa, centrado na criança e ir de encontro ao ambiente mais natural da criança sem descurar o papel crucial da família e dos professores/educadores nesta evolução.
            </p>
            
            <p>
              Mais tarde, alargamos e especializamos os nossos serviços para um atendimento especializado à população adulta.
            </p>
          </div>

          <!-- Mission points -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">Trabalho em Equipa</h3>
                <p class="text-sm text-neutral-600">Abordagem multidisciplinar centrada na pessoa</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">Cuidado Personalizado</h3>
                <p class="text-sm text-neutral-600">Atendimento adaptado às necessidades individuais</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">Família Integrada</h3>
                <p class="text-sm text-neutral-600">Envolvimento ativo da família no processo</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">Inovação Contínua</h3>
                <p class="text-sm text-neutral-600">Métodos atualizados e baseados em evidência</p>
              </div>
            </div>
          </div>

          <a href="#equipa" class="btn-primary">
            Conheça a Nossa Equipa
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>

        <!-- Image/Visual -->
        <div class="relative lg:pl-8">
          <div class="relative">
            <!-- Main image placeholder - you can replace with actual image -->
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 p-8 flex items-center justify-center shadow-large">
              <div class="text-center text-white">
                <svg class="w-32 h-32 mx-auto mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v-1a6 6 0 013-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <h3 class="text-2xl font-bold mb-2">Uma Equipa</h3>
                <p class="text-lg opacity-90">Multidisciplinar Apaixonada</p>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full opacity-60"></div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-200 rounded-full opacity-60"></div>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mt-8">
            <div class="text-center p-4 bg-white rounded-xl shadow-soft border border-neutral-100">
              <div class="text-2xl font-bold text-primary-600 mb-1">2019</div>
              <div class="text-sm text-neutral-600">Fundação</div>
            </div>
            <div class="text-center p-4 bg-white rounded-xl shadow-soft border border-neutral-100">
              <div class="text-2xl font-bold text-primary-600 mb-1">10+</div>
              <div class="text-sm text-neutral-600">Serviços</div>
            </div>
            <div class="text-center p-4 bg-white rounded-xl shadow-soft border border-neutral-100">
              <div class="text-2xl font-bold text-primary-600 mb-1">250+</div>
              <div class="text-sm text-neutral-600">Utentes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
</script>