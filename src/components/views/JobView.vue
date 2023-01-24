<template>
  <div>Job Page for Job {{ currentJobId }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const currentJobId = computed(() => route.params.id);
</script>