<script setup>
import {useAuthStore} from "~/modules/auth/shared/store/auth";

definePageMeta({
  name: 'LogoutPage',
  layout: 'minimal',
  middleware: 'authenticated'
});

const auth = useAuthStore();
const isExpired = auth.isExpired;

auth.logout();
</script>

<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-sheet
      elevation="3"
      max-width="600"
      rounded="lg"
      width="100%"
      class="pa-4 text-center mx-auto"
    >
      <h1 class="mb-5 text-h4">
        👋
      </h1>

      <h2
        v-if="!isExpired"
        class="text-h5 mb-6 font-weight-black"
      >
        You have been logged out
      </h2>

      <h2
        v-else
        class="text-h5 mb-6 font-weight-black"
      >
        Your session is expired
      </h2>

      <h3 class="mb-4">
        Your information has been deleted.
      </h3>

      <p class="mb-4 text-medium-emphasis text-body-2">
        Thank you.
      </p>

      <div class="text-end">
        <v-btn
          variant="text"
          to="/login"
        >
          Go to Login
        </v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<style scoped>

</style>