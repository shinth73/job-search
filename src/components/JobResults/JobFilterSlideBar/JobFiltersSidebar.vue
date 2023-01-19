<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <collapsible-accordion header="Degree" />
      <job-filter-slidebar-checkbox-group
        header="Job Types"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
        :unique-values="UNIQUE_JOB_TYPES"
      />
      <job-filter-slidebar-checkbox-group
        header="Organizations"
        :action="userStore.ADD_SELECTED_ORGANIZATION"
        :unique-values="UNIQUE_ORGANIZATIONS"
      />
    </section>
  </div>
</template>

<script setup>
import ActionButton from "@/components/Shared/ActionButton.vue";
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import JobFilterSlidebarCheckboxGroup from "@/components/JobResults/JobFilterSlideBar/JobFilterSlidebarCheckboxGroup.vue";
import { computed } from "vue";
import { useUserStore } from "@/store/user";
import { useJobsStore } from "@/store/jobs";

const userStore = useUserStore();
const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
</script>
