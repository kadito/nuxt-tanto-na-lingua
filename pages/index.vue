<template>
  <AppHero/>

  <AboutUs id="sobre-nos" />

  <ServicesSection id="servicos" title="Os Nossos Serviços" :services="services" />

  <TeamList id="equipa" />

  <ContactSection id="contactos" />
</template>

<script setup>
  import services from '../data/services.json';

  useHead({
    title: 'Tanto na Lingua',
    meta: [
      { name: 'description', content: 'A Tanto na Língua, criada em 2019, possui os serviços de terapia da fala, ensino especializado, psicomotricidade, psicologia educacional, psicologia clínica, terapia ocupacional, musicoterapia, fisioterapia, tutorias e classes de estimulação global. Este projecto surgiu da vontade de maximizar o desenvolvimento global de cada criança, priorizando o trabalho em equipa, centrado na criança e ir de encontro ao ambiente mais natural da criança sem descurar o papel crucial da família e dos professores/educadores nesta evolução. Mais tarde, alargamos e especializamos os nossos serviços para um atendimento especializado à população adulta.' }
    ]
  })

  useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })
</script>


