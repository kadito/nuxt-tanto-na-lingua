<template>
    <footer class="bg-secondary-900 text-white relative overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div class="relative">
        <!-- Main footer content -->
        <div class="mx-auto max-w-7xl container-padding py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <!-- Company Info -->
            <div class="lg:col-span-2">
              <div class="flex items-center space-x-3 mb-6">
                <img class="h-10 w-auto" src="/assets/logo.svg" alt="Tanto na Língua" />
                <span class="text-xl font-bold text-white">Tanto na Língua</span>
              </div>
              <p class="text-accent-200 mb-6 max-w-md leading-relaxed">
                Serviços especializados de Saúde e Educação para maximizar o desenvolvimento global de cada pessoa desde 2019.
              </p>
              <div class="space-y-3 text-sm">
                <div class="flex items-center space-x-3">
                  <svg class="h-5 w-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-accent-200">Moscavide, 1885-037</span>
                </div>
                <div class="flex items-center space-x-3">
                  <svg class="h-5 w-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a href="tel:+351926635923" class="text-accent-200 hover:text-primary-400 transition-colors">
                    +351 926 635 923
                  </a>
                </div>
                <div class="flex items-center space-x-3">
                  <svg class="h-5 w-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:geral@tanto-na-lingua.pt" class="text-accent-200 hover:text-primary-400 transition-colors">
                    geral@tanto-na-lingua.pt
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold text-white mb-6">Links Rápidos</h3>
              <ul class="space-y-3">
                <li><a href="#sobre-nos" class="text-accent-200 hover:text-primary-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" class="text-accent-200 hover:text-primary-400 transition-colors">Serviços</a></li>
                <li><a href="#equipa" class="text-accent-200 hover:text-primary-400 transition-colors">Equipa</a></li>
                <li><a href="#contactos" class="text-accent-200 hover:text-primary-400 transition-colors">Contactos</a></li>
              </ul>
            </div>

            <!-- Social Media -->
            <div>
              <h3 class="text-lg font-semibold text-white mb-6">Redes Sociais</h3>
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" target="_blank" rel="noopener noreferrer"
                   class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-accent-200 hover:text-white hover:bg-primary-500 transition-all duration-200">
                  <span class="sr-only">{{ item.name }}</span>
                  <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              <p class="text-accent-200 text-sm mt-4">
                Siga-nos para ficar a par das novidades e dicas de saúde.
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom section -->
        <div class="border-t border-white/10">
          <div class="mx-auto max-w-7xl container-padding py-6">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p class="text-center text-sm text-accent-300">
                &copy; 2024 Agitaneurónios, Unipessoal LDA. Todos os direitos reservados.
              </p>
              <div class="flex items-center space-x-4 text-sm">
                <span class="text-accent-300">Desenvolvido com</span>
                <svg class="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span class="text-accent-300">para uma melhor saúde e educação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>
  
<script setup>
import { defineComponent, h } from 'vue'
  
const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/tantolingua/',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tanto.na.lingua/',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tanto-na-l%C3%ADngua-7b608b19a/',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
          }),
        ]),
    }),
  }
]
</script>