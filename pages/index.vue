<template>
  <AppHero/>

  <AboutUs id="sobre-nos" />

  <TeamList id="equipa" />

  <ServicesSection id="servicos" title="Os Nossos Serviços" :services="services" />

  <ContactSection id="contactos" />
</template>

<script setup>
  import services from '../data/services.json';
</script>


