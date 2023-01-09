<template>
  <div class="flex flex-row flex-nowrap">
    <job-filters-sidebar />
    <job-listing />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebar.vue";
import JobListing from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResultView",
  components: {
    JobFiltersSidebar,
    JobListing,
  },
};
</script>

<style scoped></style>
