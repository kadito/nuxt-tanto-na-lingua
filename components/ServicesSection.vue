<template>
  <div class="section-padding bg-neutral-50">
    <div class="mx-auto max-w-7xl container-padding">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-6">
          {{ title }}
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
          Serviços 
          <span class="text-gradient">especializados</span> 
          para todos
        </h2>
        <p class="text-xl text-neutral-600 leading-relaxed">
          Aqui poderá encontrar diversos serviços individualizados ou em grupo, adaptados às necessidades específicas de cada pessoa.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="service in services" :key="service.id" 
             class="group card hover-lift cursor-pointer transition-all duration-300"
             :class="{'cursor-pointer': service.description}" 
             @click="openServiceModal(service.id)">
          
          <!-- Image Container -->
          <div class="aspect-square p-6 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center relative overflow-hidden">
            <img class="w-32 h-32 object-contain transform group-hover:scale-110 transition-transform duration-300 relative z-10" 
                 :src="service.imageUrl" 
                 :alt="service.title" />
            
            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <h3 class="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              {{ service.title }}
            </h3>
            
            <!-- Click indicator for services with descriptions -->
            <div v-if="service.description" class="flex items-center text-sm text-primary-600 font-medium">
              Saber mais
              <svg class="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
          
          <!-- Service indicator dot -->
          <div class="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center gap-4 p-6 bg-white rounded-2xl shadow-soft border border-neutral-100">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
          </div>
          <div class="text-left">
            <h3 class="font-semibold text-neutral-900 mb-1">Tem dúvidas sobre os nossos serviços?</h3>
            <p class="text-neutral-600 text-sm">Entre em contacto connosco para mais informações</p>
          </div>
          <a href="#contactos" class="btn-primary flex-shrink-0">
            Contactar
          </a>
        </div>
      </div>
    </div>
    
    <ServiceModal v-model="open" :service="serviceSelected" />
  </div>
</template>
  
<script setup>
  import { ref, defineProps } from 'vue'

  const props = defineProps({
    title: String,
    services: Array
  });

  const open = ref(false);
  const serviceSelected = ref(null);

  const openServiceModal = (id) => {
    serviceSelected.value = props.services.find(s => s.id === id);
    if (serviceSelected.value && serviceSelected.value.description) {
      open.value = true;
    }
  }
</script>