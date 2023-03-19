<script setup>

</script>

<template>
  <v-card
    max-width="600"
    width="100%"
    class="elevation-1 mx-auto"
  >
    <v-toolbar color="black">
      <v-toolbar-title class="text-center text-h6">
        👋 {{ $t('Welcome') }}
      </v-toolbar-title>
    </v-toolbar>

    <v-card-text class="text-center my-3 mx-1">
      <LoginForm />
      <LoginGoogleButton class="mt-12" />
    </v-card-text>
  </v-card>
</template>

<script>
import LoginGoogleButton from "~/modules/auth/login/components/LoginGoogleButton.vue";
import LoginForm from "~/modules/auth/login/components/LoginForm.vue";

export default {
  name: "LoginGoogleButton",
  components: {LoginForm, LoginGoogleButton}
}
</script>

<style scoped>

</style>