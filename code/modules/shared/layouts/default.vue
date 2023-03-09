<template>
  <v-app id="inspire">
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main style="min-height: 300px;">
        <NuxtPage/>
      </v-main>
    </v-layout>
  </v-app>
</template>