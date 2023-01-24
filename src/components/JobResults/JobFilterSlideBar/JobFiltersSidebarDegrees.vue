<template>
  <job-filter-slide-bar-checkbox-group
    :action="userStore.ADD_SELECTED_DEGREES"
    :unique-values="UNIQUE_DEGREES"
  />
</template>

<script lang="ts" setup>
import JobFilterSlideBarCheckboxGroup from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarCheckboxGroup.vue";
import { useDegreesStore } from "@/store/degrees";
import { computed } from "vue";
import { useUserStore } from "@/store/user";

const degreesStore = useDegreesStore();
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES);

const userStore = useUserStore();
</script>
