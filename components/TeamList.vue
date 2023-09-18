<template>
  <div class="about-us py-24 sm:py-32">
    <div class="px-6 lg:px-8">
      <div class="lg:mx-0">
        <h2 class="col-12 text-4xl text-center font-bold tracking-tight sm:text-6xl title">A Nossa Equipa</h2>
        <p class="mt-6 text-center text-lg leading-8 text">A nossa equipa é constituída por um corpo multidisciplinar apaixonado por aquilo que faz. Vamos conhecê-lo?</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
        <li v-for="person in orderedTeam" :key="person.name">
          <a :href="personUrl(person)">
            <img class="mx-auto h-32 w-32 rounded-full" :src="person.roundedImageUrl" alt="" />
            <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{{ person.firstname }} {{ person.lastname }}</h3>
            <p class="text-sm leading-6 text-gray-300">{{ person.mainService }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
  import team from '../data/team.json';

  const orderedTeam = [team.shift()]
  orderedTeam.push(...team.sort((a, b) => a.firstname.localeCompare(b.firstname)));

  const personUrl = (person) => {
    return `/nuxt-tanto-na-lingua/equipa/${person.id}`
  }

</script>


<style scoped>
.about-us {
  background-color: #282C63;
}

.title {
  color: #00A19B;
}

.text {
  color: #9DD7EF;
}
</style>