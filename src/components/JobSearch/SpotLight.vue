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

<script>
import getSpotLights from "@/api/getSpotLight";

export default {
  name: "SpotLight",
  components: {},
  data() {
    return {
      spotLights: [],
    };
  },
  async mounted() {
    this.spotLights = await getSpotLights();
  },
};
</script>

<style scoped></style>
