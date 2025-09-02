<template>
  <Disclosure as="nav" class="glass-effect sticky top-0 z-50 border-b border-neutral-200/20" v-slot="{ open }">
    <div class="mx-auto max-w-7xl container-padding">
      <div class="flex h-20 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="/" class="flex items-center space-x-3 group">
              <img class="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" :src="'/assets/logo.svg'" alt="Tanto na Língua" />
            </a>
          </div>
        </div>
        <div v-if="showLinks">
          <div class="hidden lg:ml-6 lg:block">
            <div class="flex items-center space-x-1">
              <a v-for="item in navigation" :key="item.name" :href="item.href" 
                 class="px-4 py-2 rounded-xl text-sm font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 relative group">
                {{ item.name }}
                <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-3/4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
              </a>
            </div>
          </div>
          <div class="-mr-2 flex lg:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-xl p-3 text-neutral-500 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden glass-effect border-t border-neutral-200/20">
      <div class="space-y-1 px-6 pb-6 pt-4">
        <DisclosureButton as="a" v-for="item in navigation" :key="item.name" :href="item.href" 
                         class="block rounded-xl px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200">
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute();

const showLinks = route.name === 'index' ? true : false;

const navigation = [
    { name: 'Sobre Nós', href: '#sobre-nos' },
    { name: 'Equipa', href: '#equipa' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contactos', href: '#contactos' },
  ]
</script>