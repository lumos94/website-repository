<template>
  <v-data-table
    :headers="headers"
    :items="data"
    class="elevation-1"
    width="200"
    :search="search"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>
          {{ item.description }}
        </td>
        <td class="text-center">
          <v-btn
            class="mx-2"
            density="comfortable"
            icon="mdi-open-in-new"
            :href="props.tab != 'landing-pages' ? item.dev_url : devBaseUrl + item.dev_url "
            target="_blank"
            :disabled="!item.dev_url.length"/>
          <v-btn
            class="mx-2"
            density="compact"
            icon="mdi-content-copy"
            color="black"
            @click="copy(devBaseUrl + item.dev_url)"
            :disabled="!item.dev_url.length"/>
        </td>
        <td class="text-center">
          <v-btn
            class="mx-2"
            density="comfortable"
            icon="mdi-open-in-new"
            color="green"
            :href="props.tab != 'landing-pages' ? item.uat_url : uatBaseUrl + item.uat_url "
            target="_blank"
            :disabled="!item.uat_url.length"/>
          <v-btn
            class="mx-2"
            density="compact"
            icon="mdi-content-copy"
            color="black"
            @click="copy(uatBaseUrl + item.uat_url)"
            :disabled="!item.uat_url.length"/>
        </td>
        <td class="text-center">
          <v-btn
            class="mx-2"
            density="comfortable"
            icon="mdi-open-in-new"
            color="red"
            :href="props.tab != 'landing-pages' ? item.prod_url : prodBaseUrl + item.prod_url "
            target="_blank"
            :disabled="!item.prod_url.length"/>
          <v-btn
            class="mx-2"
            density="compact"
            icon="mdi-content-copy"
            color="black"
            @click="copy(`${prodBaseUrl + item.prod_url}`)"
            :disabled="!item.prod_url.length"/>
        </td>
      </tr>
    </template>
  </v-data-table>

</template>

<script setup>
import {computed, ref} from "vue";
import {useWebsitesStore} from "@/stores/websites";

const store = useWebsitesStore()
const props = defineProps({
  search: {
    type: String,
    required: true,
    default: ''
  },
  tab: {
    type: String,
    default: 'websites'
  },
  locale: {
    type: String,
    required: true
  }
})
const prodBaseUrl = computed(() => {
  return import.meta.env.VITE_PROD_BASE_URL + (props.locale !== 'en' ? `${props.locale}/` : '')
})
const uatBaseUrl = computed(() => {
  return import.meta.env.VITE_UAT_BASE_URL + (props.locale !== 'en' ? `${props.locale}/` : '')
})
const devBaseUrl = computed(() => {
  return import.meta.env.VITE_DEV_BASE_URL + (props.locale !== 'en' ? `${props.locale}/` : '')
})

const headers = [
  {title: 'Name', key: 'description', align: 'center'},
  {title: 'DEV', key: 'dev_url', sortable: false, align: 'center'},
  {title: 'UAT', key: 'uat_url', sortable: false, align: 'center'},
  {title: 'PROD', key: 'prod_url', sortable: false, align: 'center'},
]

const data = computed(() => {
  switch (props.tab) {
    case 'websites':
      return store.company.websites
      break
    case 'landing-pages':
      return store.company.landing_pages
      break
    case 'registration-portals':
      return store.company.registration_portals
      break
    case 'crms':
      return store.company.crm
      break
    default:
      return []
  }
})

const copy = (link) => {
  navigator.clipboard.writeText(`${link}`)
}
</script>

<style scoped>

</style>
