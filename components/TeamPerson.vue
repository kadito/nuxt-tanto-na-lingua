<template>
  <div class="section-padding bg-white relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-20 left-20 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
    </div>

    <div class="mx-auto max-w-7xl container-padding">
      <!-- Back button -->
      <div class="mb-8">
        <a href="/#equipa" class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Voltar à Equipa
        </a>
      </div>

      <!-- Header -->
      <div class="text-center mb-16">
        <div class="mb-6">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            {{ person.mainService }}
          </span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
          {{ person.firstname }} 
          <span class="text-gradient">{{ person.lastname }}</span>
        </h1>
      </div>

      <!-- Main content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Profile Image -->
        <div class="relative">
          <div class="relative">
            <img class="w-full aspect-[3/4] object-cover rounded-3xl shadow-large" 
                 :src="person.imageUrl" 
                 :alt="`${person.firstname} ${person.lastname}`" />
            
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full opacity-60"></div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-200 rounded-full opacity-60"></div>
          </div>
          
          <!-- Professional info card -->
          <div class="mt-8 card p-6">
            <h3 class="font-semibold text-neutral-900 mb-4">Informação Profissional</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM8 14v.01M12 14v.01M16 14v.01"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-neutral-900">Especialização</p>
                  <p class="text-sm text-neutral-600">{{ person.mainService }}</p>
                </div>
              </div>
              
              <div v-if="person.skills && person.skills.length > 0" class="pt-4 border-t border-neutral-100">
                <p class="font-medium text-neutral-900 mb-3">Competências</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in person.skills" :key="skill.title" 
                        class="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                    {{ skill.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-8">
          <!-- Description -->
          <div class="card p-8">
            <h2 class="text-2xl font-bold text-neutral-900 mb-6">Sobre {{ person.firstname }}</h2>
            <div class="prose prose-lg text-neutral-600">
              <p class="leading-relaxed">{{ person.description }}</p>
            </div>
          </div>

          <!-- Personal info -->
          <div v-if="person.hobbies && (person.hobbies.like || person.hobbies.notLike || person.hobbies.curiosities)" 
               class="card p-8">
            <h3 class="text-xl font-bold text-neutral-900 mb-6">Mais sobre {{ person.firstname }}</h3>
            <div class="space-y-4">
              <div v-if="person.hobbies.like" class="flex items-baseline space-x-3">
                <div class="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-neutral-600 leading-relaxed">{{ person.hobbies.like }}</p>
                </div>
              </div>

              <div v-if="person.hobbies.notLike" class="flex items-baseline space-x-3">
                <div class="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-neutral-600 leading-relaxed">{{ person.hobbies.notLike }}</p>
                </div>
              </div>

              <div v-if="person.hobbies.curiosities" class="flex items-baseline space-x-3">
                <div class="flex-shrink-0 w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="font-medium text-neutral-900">Curiosidade:</p>
                  <p class="text-neutral-600 leading-relaxed">{{ person.hobbies.curiosities }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="card p-8 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
            <div class="text-center">
              <h3 class="text-xl font-bold mb-4">Interessado nos serviços de {{ person.firstname }}?</h3>
              <p class="mb-6 opacity-90">Entre em contacto connosco para mais informações ou para agendar uma consulta.</p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+351926635923" class="btn bg-white text-primary-600 hover:bg-neutral-50">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Ligar
                </a>
                <a href="mailto:geral@tanto-na-lingua.pt" class="btn bg-white/20 text-white hover:bg-white/30 border-white/30">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const person = inject("person");
</script>