<template>
  <Disclosure as="nav" class="bg-white sticky top-0 z-10" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="/">
              <img class="h-10 w-auto object-fill" :src="'/assets/logo.svg'" alt="" /> 
            </a>
          </div>
        </div>
        <div v-if="showLinks">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex items-center space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">{{ item.name }}</a>
            </div>
          </div>
          <div class="-mr-2 flex sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>

      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-900 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton as="a" v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-700 hover:text-white">{{ item.name }}</DisclosureButton>
        <!-- <DisclosureButton as="a" href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</DisclosureButton>
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</DisclosureButton> -->
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