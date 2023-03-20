<script setup>
definePageMeta({
  name: 'AppPage',
});
</script>

<template>
  <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']">
    <template #divider>
      <v-icon icon="mdi-chevron-right" />
    </template>
  </v-breadcrumbs>
  <v-container
    fluid
    class="px-8"
  >
    <slot />
  </v-container>
</template>

<style scoped>

</style>