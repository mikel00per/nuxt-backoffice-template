<script setup lang="ts">

import {useLanguage} from "~/modules/shared/store/language";
import {useTheme} from "~/modules/shared/store/theme";
import {useTheme as vuetifyTheme} from 'vuetify'

const {setLocale} = useI18n();
const language = useLanguage();
const theme = useTheme();
const vuetify = vuetifyTheme();

const changeLanguage = (code: string) => {
  setLocale(code);
}

function toggleTheme() {
  theme.toggle();
  vuetify.global.name.value = theme.modeSelected;
}
</script>

<template>
  <v-app id="inspire">
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer" />
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar">
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
              :value="lang.value"
              :title="lang.title"
              @click="changeLanguage(lang.value)"
            />
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main style="min-height: 300px;">
        <NuxtPage />
      </v-main>
    </v-layout>
  </v-app>
</template>