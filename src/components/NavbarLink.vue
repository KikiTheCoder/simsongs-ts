<template>
  <RouterLink :to="to" class="hover:bg-zinc-700 text-white p-3 pt-3 rounded-md duration-200 sm:block">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps({
  to: { type: String, required: true }
})
</script>

<style scoped>
.router-link-exact-active {
  background-color: #991B1B;
}

.router-link-exact-active:hover {
  background-color: #DC2626;
}
</style>
