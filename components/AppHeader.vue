<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/nuxt-tanto-na-lingua">
          <!-- <span class="sr-only">Tanto Na Lingua</span> --> 
          <img class="h-10 w-auto object-fill" :src="'/nuxt-tanto-na-lingua/assets/logo.svg'" alt="" /> 
          <!-- <component :is="logo" class="h-6 w-6" aria-hidden="true" /> -->
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { ref } from 'vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

  

  const navigation = [
    { name: 'Sobre Nos', href: '#sobre-nos' },
    { name: 'Equipa', href: '#equipa' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contactos', href: '#contactos' },
  ]

  const mobileMenuOpen = ref(false);
</script>

<style scoped>
  header { 
    position: sticky;
    z-index: 10;
    top: 0;
  }
</style>