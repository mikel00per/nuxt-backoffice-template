<template>
  <v-form validate-on="submit">
    <v-text-field
      :rules="[rules.required, rules.min]"
      label="User name"
      hint="At least 8 characters"
      class="mb-2 text-left"
      single-line
    >
      <template #prepend-inner>
        <v-tooltip location="bottom">
          <template #activator="">
            <v-icon icon="mdi-account" />
          </template>

          I'm a tooltip
        </v-tooltip>
      </template>
    </v-text-field>
    <v-text-field
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      class="text-left"
      label="Password"
      hint="At least 8 characters"
      counter
      clearable
    >
      <template #prepend-inner>
        <v-tooltip location="bottom">
          <template #activator="{}">
            <v-icon icon="mdi-lock" />
          </template>

          I'm a tooltip
        </v-tooltip>
      </template>

      <template #append-inner>
        <v-icon
          class="ml-2"
          :icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click="show1 = !show1"
        />
      </template>
    </v-text-field>

    <v-btn
      size="large"
      type="submit"
      class="mt-2"
    >
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      show1: false,
      show2: true,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    }
  },
}
</script>

<style scoped>

</style>