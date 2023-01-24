<template>
  <job-filters-sidebar-checkbox-group
    :action="userStore.ADD_SELECTED_ORGANIZATION"
    :unique-values="UNIQUE_ORGANIZATIONS"
  />
</template>

<script lang="ts" setup>
import { useJobsStore } from "@/store/jobs";
import { useUserStore } from "@/store/user";
import { computed } from "vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarCheckboxGroup.vue";

const jobStore = useJobsStore();
const userStore = useUserStore();

const UNIQUE_ORGANIZATIONS = computed(() => jobStore.UNIQUE_ORGANIZATIONS);
</script>
