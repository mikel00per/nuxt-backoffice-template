<script setup lang="ts">

import {useTheme as vuetifyTheme} from 'vuetify'
import {useLanguage} from "~/modules/shared/store/language";
import {useTheme} from "~/modules/shared/store/theme";
import {useDrawer} from "~/modules/shared/store/drawer";

const {setLocale} = useI18n();
const language = useLanguage();
const theme = useTheme();
const vuetify = vuetifyTheme();
const drawer = useDrawer();

const changeLanguage = (code: string) => {
  setLocale(code);
}

function toggleTheme() {
  theme.toggle();
  vuetify.global.name.value = theme.modeSelected;
}

</script>

<template>
  <v-app-bar
    app
    absolute
    :elevation="0"
  >
    <v-app-bar-nav-icon
      :icon="drawer.isOpen ? 'mdi-arrow-expand' : 'mdi-menu-open'"
      @click="drawer.toggle()"
    />

    <v-app-bar-title>Backoffice</v-app-bar-title>

    <v-btn
      :icon="theme.isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      @click="toggleTheme"
    />

    <v-menu>
      <template #activator="{ props }">
        <v-btn
          icon="mdi-translate"
          v-bind="props"
        />
      </template>

      <v-list
        density="compact"
        nav
      >
        <v-list-subheader>Available languages</v-list-subheader>
        <v-list-item
          v-for="(lang, i) in language.languages"
          :key="i"
          :value="lang"
          :title="lang.title"
          @click="changeLanguage(lang.value)"
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>

</style>