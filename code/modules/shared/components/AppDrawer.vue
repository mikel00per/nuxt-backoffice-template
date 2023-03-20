<script setup lang="ts">
import {useDrawer} from "~/modules/shared/store/drawer";
import {useAuthStore} from "~/modules/auth/shared/store/auth";

defineComponent({
  name: 'AppDrawer'
});

const drawer = useDrawer();
const auth = useAuthStore();
const user = auth.userInfo;

</script>

<template>
  <v-navigation-drawer
    v-model="drawer.open"
    app
    permanent
    rail
    expand-on-hover
  >
    <template #prepend>
      <v-list>
        <v-list-item
          referrerpolicy="no-referrer"
          :prepend-avatar="user.picture"
          :title="user.name"
          :subtitle="user.email"
        />
      </v-list>
    </template>

    <template #default>
      <v-list
        density="compact"
        nav
      >
        <v-list-item
          v-for="option in drawer.defaults"
          :key="option.key"
          :prepend-icon="option.icon"
          :title="$t(option.key)"
          :value="option.key"
          :to="option.to"
        />
      </v-list>
    </template>

    <template #append>
      <v-list
        density="compact"
        nav
      >
        <v-list-item
          v-for="option in drawer.appends"
          :key="option.key"
          :prepend-icon="option.icon"
          :title="$t(option.key)"
          :value="option.key"
          :to="option.to"
        />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>

</style>