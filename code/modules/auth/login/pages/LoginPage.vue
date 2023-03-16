<script setup>

import LoginCard from "~/modules/auth/login/components/LoginCard.vue";

definePageMeta({
  name: 'LoginPage',
  layout: 'minimal',
  middleware: 'not-authenticated',
  components: {
    'CardLogin': () => import('@/modules/auth/login/components/LoginCard.vue')
  }
});
</script>

<template>
  <v-container
    class="fill-height"
    fluid
  >
    <LoginCard />
  </v-container>
</template>

<style scoped>

</style>