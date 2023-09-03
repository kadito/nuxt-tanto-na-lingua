<template>

    <div class="bg-white">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="(item, index) in section.items" :key="index" v-slot="{ open }" class="my-4">
                <dt>
                    <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                        <span class="text-base font-semibold leading-7">{{ item.question }}</span>
                        <span class="ml-6 flex h-7 items-center">
                        <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                        <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                        </span>
                    </DisclosureButton>
                </dt>

                <DisclosurePanel as="dd" class="mt-2 pr-12">
                    <p v-if="item.textAnswer" class="text-base leading-7 text-gray-600">{{ item.textAnswer }}</p>

                    <ul v-if="item.listAnswer" role="list">
                        <li v-for="(listItem, listIndex) in item.listAnswer" :key="listIndex" class="flex flex-wrap items-center justify-between gap-x-6 py-1 sm:flex-nowrap">
                            <p class="text-sm font-semibold leading-6 text-gray-700"> {{ listItem }} </p>
                        </li>
                    </ul>
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
    
    <!-- <p class="text-sm font-semibold leading-6 text-gray-700"> {{ item }} </p> -->
</template>
  
<script setup>
import { defineProps } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

defineProps({
    section: Object
})

</script>