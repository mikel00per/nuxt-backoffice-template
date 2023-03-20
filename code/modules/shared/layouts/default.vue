<script setup lang="ts">
import {useTheme} from "~/modules/shared/store/theme";
import {useTheme as vuetifyTheme} from "vuetify";

const theme = useTheme();
const vuetify = vuetifyTheme();

vuetify.global.name.value = theme.modeSelected;
</script>

<template>
  <v-app id="inspire">
    <AppDrawer />
    <AppBar />
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>