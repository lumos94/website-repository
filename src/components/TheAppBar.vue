<template>
  <v-app-bar
    elevation="3"
    color="grey-lighten-2"

    flat
    title="Websites Directory"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="rail = !rail"/>
    </template>

    <template v-slot:append>

      <v-btn
        icon
        @click="toggleTheme"
      >
        <v-icon :color="(theme.global.current.value.dark) ? 'primary' : 'primary lighten-4'">
          {{ (theme.global.current.value.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
        </v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <TheNavigation
    :rail="rail"/>
</template>


<script setup>
import {useTheme} from 'vuetify'
import {ref} from "vue";
import TheNavigation from "@/components/TheNavigation.vue";

const theme = useTheme()

const rail = ref(true)

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
