<template>
    <div class="section-padding bg-white relative overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 right-20 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </div>

      <div class="mx-auto max-w-7xl container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Contact Information -->
          <div class="lg:pr-8">
            <div class="mb-6">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                Contactos
              </span>
            </div>
            
            <h2 class="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Entre em contacto 
              <span class="text-gradient">connosco</span>
            </h2>
            
            <p class="text-xl text-neutral-600 mb-12 leading-relaxed">
              Se tiver alguma dúvida, desejar agendar uma consulta ou rastreio entre em contacto connosco. Estamos aqui para ajudar.
            </p>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <!-- Location -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <BuildingOffice2Icon class="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 mb-2">Localização</h3>
                  <p class="text-neutral-600">
                    Moscavide<br />
                    1885 - 037
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <PhoneIcon class="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 mb-2">Telefone</h3>
                  <a href="tel:+351926635923" 
                     class="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                    +351 926 635 923
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <EnvelopeIcon class="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-900 mb-2">Email</h3>
                  <a href="mailto:geral@tanto-na-lingua.pt" 
                     class="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                     geral@tanto-na-lingua.pt
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="mt-12 space-y-4">
              <h3 class="font-semibold text-neutral-900 mb-4">Formas rápidas de contacto:</h3>
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="tel:+351926635923" class="btn-primary flex-1 justify-center">
                  <PhoneIcon class="h-5 w-5 mr-2" />
                  Ligar Agora
                </a>
                <a href="mailto:geral@tanto-na-lingua.pt" class="btn-outline flex-1 justify-center">
                  <EnvelopeIcon class="h-5 w-5 mr-2" />
                  Enviar Email
                </a>
              </div>
            </div>
          </div>

          <!-- Visual/Map Section -->
          <div class="lg:pl-8">
            <div class="relative">
              <!-- Map placeholder / Contact visual -->
              <div class="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 p-8 flex items-center justify-center shadow-large relative overflow-hidden">
                <!-- Background pattern -->
                <div class="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                <!-- Content -->
                <div class="text-center text-white relative z-10">
                  <div class="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold mb-2">Venha conhecer-nos</h3>
                  <p class="text-lg opacity-90 mb-6">Estamos em Moscavide, Lisboa</p>
                  
                  <!-- Operating hours or additional info -->
                  <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left">
                    <h4 class="font-semibold mb-2">Horário de funcionamento:</h4>
                    <div class="text-sm space-y-1 opacity-90">
                      <p>Segunda a Sexta: 9h - 19h</p>
                      <p>Sábados: 9h - 13h</p>
                      <p>Domingos: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full opacity-60"></div>
              <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-4 p-6 bg-neutral-100 rounded-2xl">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div class="text-left">
              <h3 class="font-semibold text-neutral-900 mb-1">Precisa de agendar uma consulta?</h3>
              <p class="text-neutral-600 text-sm">Entre em contacto connosco para marcar a sua consulta ou esclarecimento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
</script>