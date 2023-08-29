<template>
    <!-- <AppHero/> -->

    <TeamPerson />

    <ServicesSection title="Os Meus Serviços" :services="personServices" />

    <!-- <ContactSection /> -->
</template>

<script setup>
import team from '../../data/team.json';
import services from '../../data/services.json';
import { provide } from "vue";

const route = useRoute();

console.log("route: ", route.params)

const person = team.find(p => {
  return p.firstname.toLowerCase() === route.params.firstname && p.lastname.toLowerCase() === route.params.lastname;
})

const personServices = services.filter(service => person.services.includes(service.id))

provide("person", person);

console.log(person)
</script>