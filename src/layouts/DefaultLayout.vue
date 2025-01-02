<template>
  <v-layout>
    <TheAppBar/>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view/>
    </v-main>

    <v-footer color="primary" app>
      <span>&copy; 2023 Tradimo</span>
    </v-footer>

  </v-layout>


</template>

<script setup>
import TheAppBar from "@/components/TheAppBar.vue";
import {ref} from "vue";

</script>

<style scoped>

</style>
