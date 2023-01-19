<template>
  <ul>
    <li v-for="spotlight in spotLights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getSpotLights from "@/api/getSpotLight";

const spotlights = ref([]);

const getSpotlights = async () => {
  const response = await getSpotLights();
  spotlights.value = response.data;
};

onMounted(getSpotlights);
</script>
