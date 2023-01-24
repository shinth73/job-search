<template>
  <div class="flex flex-row flex-nowrap">
    <job-filters-sidebar />
    <job-listing />
  </div>
</template>

<script lang="ts" setup>
import JobFiltersSidebar from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebar.vue";
import JobListing from "@/components/JobResults/JobListings.vue";
</script>

<style scoped></style>
