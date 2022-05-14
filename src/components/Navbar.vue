<template>
  <div class="bg-zinc-900 shadow-lg">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button @click="toggleNav"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="material-symbols-outlined" v-if="state.navOpen">
              close
            </span>
            <span class="material-symbols-outlined" v-else>
              menu
            </span>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-3xl text-white font-thin">Simsongs</span>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <NavbarLinkList></NavbarLinkList>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sm:hidden" v-if="state.navOpen">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NavbarLinkList></NavbarLinkList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarLinkList from './NavbarLinkList.vue';
import { reactive } from 'vue';

const state = reactive({ navOpen: false })

function toggleNav() {
  state.navOpen = !state.navOpen
}

</script>
