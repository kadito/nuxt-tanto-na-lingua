<template>
  <TransitionRoot as="template" v-if="service" :show="modelValue">
    <Dialog as="div" class="relative z-10" @close="$emit('update:modelValue', false)">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-12 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full mx-16">
              <div>
                <!-- {{ service }} -->
                <div class="my-3 text-left sm:my-5">
                  <DialogTitle as="h3" class="text-4xl font-bold text-gray-900">{{ service.modalTitle }}</DialogTitle>

                  <div class="mt-8 mb-4">
                    <p class="text-base text-gray-900">{{ service.description }}</p>
                  </div>

                  <div v-for="section in service.sections">
                    <ServiceList v-if="section.type === 'List'" :section="section"/>

                    <ServiceFAQ v-if="section.type === 'FAQ'" :section="section"/>
                  </div>

                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
  import { defineProps, defineEmits } from 'vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  // import { CheckIcon } from '@heroicons/vue/24/outline'
  
  defineProps({
    modelValue: Boolean,
    service: Object
  });

  defineEmits(['update:modelValue']);
</script>