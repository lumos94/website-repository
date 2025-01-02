<template>
  <v-navigation-drawer expand-on-hover :rail="rail" permanent>
    <v-list>
      <v-list-item
        :prepend-avatar="`https://randomuser.me/api/portraits/lego/${Math.floor(
          Math.random() * 9
        )}.jpg`"
        title="Hello User"
        subtitle="Foo Bar"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(website, key) in store.websitesData"
        :key="key"
        :title="website.name"
        :value="key"
        @click="store.setCompany(website)"
      >
        <template v-slot:prepend>
          <v-img
            class="mr-2"
            width="25"
            alt="company logo"
            :src="
              getImageUrl(
                theme.global.current.value.dark
                  ? website.dark_logo
                  : website.light_logo
              )
            "
          />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useWebsitesStore } from "@/stores/websites";
import { useTheme } from "vuetify";

const store = useWebsitesStore();
const theme = useTheme();

defineProps({
  rail: {
    type: Boolean,
    default: true,
  },
});

const getImageUrl = (fileName) => {
  return new URL(`../assets/images/logos/${fileName}`, import.meta.url).href;
};
</script>
<style scoped></style>
