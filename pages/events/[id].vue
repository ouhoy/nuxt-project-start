<script setup lang="ts">
const route = useRoute();
const nuxt = useNuxtApp();

console.log(nuxt)
</script>

<template>
  Your id is: {{ route.params.id }}
</template>

<style scoped>

</style>