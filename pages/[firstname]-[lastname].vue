<template>
    <p> {{ $route.params.firstname }} - {{ $route.params.lastname }}</p>
</template>

<script setup>
const route = useRoute()
if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}
</script>