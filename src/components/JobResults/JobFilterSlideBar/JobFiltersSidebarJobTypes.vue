<template>
  <job-filters-sidebar-checkbox-group
    :action="userStore.ADD_SELECTED_JOB_TYPES"
    :unique-values="UNIQUE_JOB_TYPES"
  />
</template>

<script lang="ts" setup>
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarCheckboxGroup.vue";

import { UNIQUE_JOB_TYPES, useJobsStore } from "@/store/jobs";
import { useUserStore } from "@/store/user";
import { computed } from "vue";

const jobStore = useJobsStore();
const userStore = useUserStore();

const UNIQUE_JOB_TYPES = computed(() => jobStore.UNIQUE_JOB_TYPES);
</script>
