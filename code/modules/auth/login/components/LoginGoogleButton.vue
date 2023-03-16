<script setup lang="ts">
import {useAuthStore} from "~/modules/auth/shared/store/auth";

const { isReady, login } = useAuthStore().useTokenClient();

</script>

<template>
  <v-btn
    variant="outlined"
    color="blue"
    size="large"
    :disabled="!isReady"
    :loading="!isReady"
    @click="login"
  >
    <template #prepend>
      <v-icon icon="mdi-google" />
    </template>
    Sign with Google
  </v-btn>
</template>

<style scoped>

</style>