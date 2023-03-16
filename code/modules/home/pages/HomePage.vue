<script setup>
definePageMeta({
  name: 'HomePage',
  middleware: [
    'authenticated',
    'authenticated-expired'
  ],
});
</script>

<template>
  <div>home.vue</div>
</template>

<style scoped>

</style>