<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { FILTERED_JOBS, useJobsStore } from "@/store/jobs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "TheSubnav",
  components: { FontAwesomeIcon },
  computed: {
    ...mapState(useJobsStore, [FILTERED_JOBS]),
    onJobResultPage() {
      return this.$route.name === "JobResults";
    },
  },
  methods: {
    FILTERED_JOBS() {
      return FILTERED_JOBS;
    },
  },
};
</script>
