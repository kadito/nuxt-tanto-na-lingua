<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="col-12 text-4xl text-center font-bold tracking-tight sm:text-6xl">{{ title }}</h2>
        <p class="mt-4 text-center text-lg leading-8 text-gray-400">We’re a dynamic group of individuals who are passionate about what we do.</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        <li v-for="service in services" :key="service.name" class="rounded-2xl px-8 py-10 cursor-pointer" @click="openServiceModal(service.id)">
          <img class="mx-auto h-48 w-48 md:h-56 md:w-56" :src="service.imageUrl" alt="" />
          <h3 class="mt-6 text text-base font-semibold leading-7 tracking-tight blue-text">{{ service.title }}</h3>
        </li>
      </ul>
    </div>
    
    <ServiceModal v-model="open" :service="serviceSelected"  />
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

    if (serviceSelected.value) open.value = true;
  }
</script>

<style>
.blue-text {
  color: #0d9e8b
}
</style>