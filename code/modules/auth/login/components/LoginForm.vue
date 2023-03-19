<template>
  <v-form validate-on="submit">
    <v-text-field
      :rules="[rules.required, rules.min]"
      :label="$t('User name')"
      :hint="$t('At least 8 characters')"
      class="mb-2 text-left"
      single-line
    >
      <template #prepend-inner>
        <v-tooltip
          location="bottom"
          :v-text="$t('I\'m a tooltip')"
        >
          <template #activator="">
            <v-icon icon="mdi-account" />
          </template>
        </v-tooltip>
      </template>
    </v-text-field>
    <v-text-field
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      class="text-left"
      :label="$t('Password')"
      :hint="$t('At least 8 characters')"
      counter
      clearable
    >
      <template #prepend-inner>
        <v-tooltip
          location="bottom"
          :v-text="$t('I\'m a tooltip')"
        >
          <template #activator="{}">
            <v-icon icon="mdi-lock" />
          </template>
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
      {{ $t('Login') }}
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
      password: this.$t('Password'),
      rules: {
        required: value => !!value || this.$t('Required'),
        min: v => v.length >= 8 || this.$t('Min 8 characters'),
        emailMatch: () => this.$t('The email and password you entered don\'t match'),
      },
    }
  },
}
</script>

<style scoped>

</style>