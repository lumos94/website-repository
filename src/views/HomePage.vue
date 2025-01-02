<template>
  <v-container>
    <v-card class="rounded-tl-xl rounded-tr-xl">
      <v-tabs
        v-model="tab"
        color="white"
        bg-color="light-blue darken-3"
        centered
        fixed-tabs
        slider-color="lime"
      >
        <v-tab
          v-for="(section, key) in tabsSections"
          :key="key"
          :href="section.href"
          :value="section.value"
        >
          {{ section.name }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-card
          class=" mb-3"
          elevation="0"

        >
          <v-card-text>
            <v-row class="d-flex">
              <v-col cols="6">
                <v-text-field
                  v-model="search"
                  density="compact"
                  variant="solo"
                  label="Search links"
                  prepend-inner-icon="mdi-magnify"
                  single-line
                  hide-details
                />
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="locale"
                  :items="locales"
                  item-title="name"
                  item-value="value"
                  density="compact"
                  label="Language"
                  prepend-inner-icon="mdi-translate"
                  hide-details
                  single-line
                  variant="solo"
                />
              </v-col>


            </v-row>

          </v-card-text>
        </v-card>

        <DataTable
          :search="search"
          :locale="locale"
          :tab="tab"/>

      </v-card-text>

    </v-card>
  </v-container>
</template>

<script setup>
import {ref, defineProps, onUpdated, onMounted} from "vue";
import DataTable from "@/components/DataTable.vue";

const search = ref('');
const tab = ref();
const locale = ref('en')
const locales = [
  {name: 'English', value: 'en'},
  {name: 'Spanish', value: 'es'},
  {name: 'Portuguese', value: 'pt'},
  {name: 'Vietnamese', value: 'vn'},
]

const tabsSections = ref([
  {
    name: 'Websites',
    href: '#websites',
    value: 'websites'
  },
  {
    name: 'Landing Pages',
    href: '#landing-pages',
    value: 'landing-pages'
  },
  {
    name: 'Registration Portals',
    href: '#registration-portals',
    value: 'registration-portals'
  },
  {
    name: 'CRMs',
    href: '#crms',
    value: 'crms'

  },
])


</script>
