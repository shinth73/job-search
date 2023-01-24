<template>
  <div class="mt-2">
    <input
      v-model.lazy.t.trim="skillsSearchTerm"
      type="text"
      class="h-12 w-full rounded border-solid border-brand-gray-1 p-3 text-base shadow-gray"
      placeholder="Computer programming, Finance degree"
    />
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/user";
import { computed } from "vue";

const userStore = useUserStore();

const skillsSearchTerm = computed({
  get() {
    return userStore.skillsSearchTerm;
  },
  set(value: string) {
    console.log(value);
    return userStore.UPDATE_SKILLS_SEARCH_TERM(value);
  },
});
</script>
