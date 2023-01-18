<template>
  <collapsible-accordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="h-8 w-1/2"
          >
            <input
              :id="organization"
              v-model="selectedOrganization"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { ref } from "vue";
import { useJobsStore } from "@/store/jobs";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

const selectedOrganization = ref([]);

const jobStore = useJobsStore();
const userStore = useUserStore();
const route = useRouter();

const UNIQUE_ORGANIZATIONS = jobStore.UNIQUE_ORGANIZATIONS;
const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANIZATION(selectedOrganization);
  route.push({ name: "JobResults" });
};
</script>
