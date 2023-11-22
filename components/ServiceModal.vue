<template>
  <TransitionRoot as="template" v-if="service" :show="modelValue">
    <Dialog as="div" class="relative z-10" @close="$emit('update:modelValue', false)">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 sm:px-12 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full mx-3 sm:mx-6 md:mx-16">
              <div class="absolute right-0 top-0 mr-4 mt-4 cursor-pointer" @click="$emit('update:modelValue', false)">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 30 30">
    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
</svg>
              </div>
              
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