<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <job-filters-sidebar-skills />

      <collapsible-accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>

      <collapsible-accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>

      <collapsible-accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
import JobFiltersSidebarSkills from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarSkills.vue";
import JobFiltersSidebarPrompt from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarPrompt.vue";
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarDegrees from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFilterSlideBar/JobFiltersSidebarOrganizations.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/store/user";

const route = useRoute();
const userStore = useUserStore();

const parseSkillsSearchTerm = () => {
  const role = (route.query.role as string) || "";
  userStore.UPDATE_SKILLS_SEARCH_TERM(role);
};
onMounted(parseSkillsSearchTerm);
</script>
