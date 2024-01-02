<template>
    <!-- <AppHero/> -->

    <TeamPerson />

    <ServicesSection title="Os Meus Serviços" :services="personServices" />

    <!-- <ContactSection /> -->
</template>

<script setup>
import services from '../../data/services.json';
import { provide, inject } from "vue";

const route = useRoute();

console.log("route: ", route.params)

const team = inject('team');

const person = team.find(p => {
  return p.id === `${route.params.firstname}-${route.params.lastname}`;
})

const personServices = services.filter(service => person.services.includes(service.id))

provide("person", person);

// useHead({
//     title: `${person.firstname} ${person.lastname}`,
//     meta: [
//     ]
//   })

//   useSeoMeta({
//     title: 'Tanto Na Língua',
//     ogTitle: 'Tanto Na Língua',
//     description: 'A Tanto na Língua, criada em 2019, possui os serviços de terapia da fala, ensino especializado, psicomotricidade, psicologia educacional, psicologia clínica, terapia ocupacional, musicoterapia, fisioterapia, tutorias e classes de estimulação global. Este projecto surgiu da vontade de maximizar o desenvolvimento global de cada criança, priorizando o trabalho em equipa, centrado na criança e ir de encontro ao ambiente mais natural da criança sem descurar o papel crucial da família e dos professores/educadores nesta evolução. Mais tarde, alargamos e especializamos os nossos serviços para um atendimento especializado à população adulta.',
//     ogDescription: 'A Tanto na Língua, criada em 2019, possui os serviços de terapia da fala, ensino especializado, psicomotricidade, psicologia educacional, psicologia clínica, terapia ocupacional, musicoterapia, fisioterapia, tutorias e classes de estimulação global. Este projecto surgiu da vontade de maximizar o desenvolvimento global de cada criança, priorizando o trabalho em equipa, centrado na criança e ir de encontro ao ambiente mais natural da criança sem descurar o papel crucial da família e dos professores/educadores nesta evolução. Mais tarde, alargamos e especializamos os nossos serviços para um atendimento especializado à população adulta.',
//     ogImage: 'https://example.com/image.png',
//     twitterCard: '',
//   })

console.log(person)
</script>