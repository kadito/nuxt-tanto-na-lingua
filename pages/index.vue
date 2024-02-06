<template>
  <AppHero/>
  <!-- <AppHeader2/> -->

  <AboutUs id="sobre-nos" />

  <ServicesSection id="servicos" title="Os Nossos Serviços" :services="orderedServices" />

  <TeamList id="equipa" />

  <ContactSection id="contactos" />
</template>

<script setup>
  import services from '../data/services.json';

  const orderedServices = services.sort((a, b) => a.title.localeCompare(b.title));

  const title = 'Tanto na Língua'
  const description = 'A Tanto na Língua, criada em 2019, possui os serviços de terapia da fala, ensino especializado, psicomotricidade, psicologia educacional, psicologia clínica, terapia ocupacional, musicoterapia, fisioterapia, tutorias e classes de estimulação global. Este projecto surgiu da vontade de maximizar o desenvolvimento global de cada criança, priorizando o trabalho em equipa, centrado na criança e ir de encontro ao ambiente mais natural da criança sem descurar o papel crucial da família e dos professores/educadores nesta evolução. Mais tarde, alargamos e especializamos os nossos serviços para um atendimento especializado à população adulta.'

  useHead({
    title: title,
    meta: [
      { name: 'description', content: description }
    ]
  })

  useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
    // twitterCard: '',
  })
</script>


