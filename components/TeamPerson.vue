<template>
  <div class="bg-white py-10 sm:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ person.firstname }} {{ person.lastname }}</h1>
        </div>

        <div class="flex justify-center justify-items-center">
          <div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <img class="aspect-[3/2] w-full rounded-2xl" :src="person.imageUrl" alt="" />
            <!-- <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p> -->
            </div>

            <div class="flex flex-col">
              <p>{{ person.description }}</p>
              
              <div class="my-8" v-if="person.hobbies.like">
                <p v-if="person.hobbies.like"><span class="mr-2">✅</span> {{ person.hobbies.like }}</p>
                <p v-if="person.hobbies.notLike" class="mt-2"><span class="mr-2">❌</span> {{ person.hobbies.notLike }}</p>
                <p v-if="person.hobbies.curiosities" class="mt-2"><span class="mr-2">🙋</span> {{ person.hobbies.curiosities }}</p>
              </div>

              <p v-else class="my-8">{{ person.hobbies }}</p>
              
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

console.log(person)
</script>