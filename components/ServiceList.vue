<template>
    <div class="mt-8" v-if="section.title">
        <DialogTitle as="h4" class="text-3xl font-bold leading-6 text-gray-900">{{ section.title }}</DialogTitle>
    </div>

    <div class="mt-8 mb-2" v-if="section.description">
        <p class="text-base text-gray-900">{{ section.description }}</p>
    </div>

    <ul role="list" class="ml-6">
        <li v-for="(item, index) in section.items" :key="index" class="flex flex-wrap items-center justify-between gap-x-6 py-1 sm:flex-nowrap">
            <p class="text-sm font-semibold leading-6 text-gray-700"> {{ item }} </p>
        </li>
    </ul>
</template>
  
<script setup>
import {  DialogTitle } from '@headlessui/vue'
import { defineProps } from 'vue';

defineProps({
    section: Object
})

</script>