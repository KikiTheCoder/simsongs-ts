<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <Navbar></Navbar>
  <div class="container mx-auto mt-5">
    <router-view v-slot="{ Component }">
      <KeepAlive include="searchsong">
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
