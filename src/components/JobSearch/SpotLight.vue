<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { Spotlight } from "@/api/types";
import getSpotLights from "@/api/getSpotLight";

const spotlights = ref<Spotlight[]>([]);

const getSpotlights = async () => {
  spotlights.value = await getSpotLights<Spotlight[]>();
};

onMounted(getSpotlights);
</script>
