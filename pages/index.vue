<template>
  <AppHero/>

  <AboutUs />

  <TeamList />

  <ServicesSection title="Os Nossos Serviços" :services="services" />

  <ContactSection />
</template>

<script setup>
  import services from '../data/services.json';
</script>


