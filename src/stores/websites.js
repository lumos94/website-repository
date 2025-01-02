import {defineStore} from 'pinia'
import {computed, ref} from "vue";
import websites from "@/assets/websites";

export const useWebsitesStore = defineStore('websites', () => {
  const company = ref([])

  const websitesData = computed(() => websites)

  const getCompany = computed(() => company.value)

  const defaultCompany = ref(websites.xbprime)


  function setCompany(comp) {
    company.value = comp
  }

  return {company, websitesData, defaultCompany, setCompany, getCompany}
})
