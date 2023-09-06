<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Nossa Equipa</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">A nossa equipa é constituída por um corpo multidisciplinar.</p>
        </div>
        <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
          <li v-for="person in team" :key="person.name">
            <a :href="personUrl(person)">
              <img class="mx-auto h-32 w-32 rounded-full" :src="person.roundedImageUrl" alt="" />
              <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.firstname }} {{ person.lastname }}</h3>
              <p class="text-sm leading-6 text-gray-600">{{ person.mainService }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import team from '../data/team.json';

  const personUrl = (person) => {
    return `/nuxt-tanto-na-lingua/equipa/${person.firstname.toLowerCase()}-${person.lastname.toLowerCase()}`
  }
  </script>