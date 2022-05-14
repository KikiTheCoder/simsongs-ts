<template>
  <h1 class="text-4xl mb-2">Songinfo</h1>
  <div v-if="trackinfo">
    <h2 class="text-2xl">
      <span class="text-gray-400">Artist: </span>{{ trackinfo.artist.name }}
    </h2>
    <h2 class="text-2xl">
      <span class="text-gray-400">Trackname: </span>{{ trackinfo.name }}
    </h2>

    <div class="text-2xl">
      <a :href="trackinfo.url" target="_blank" class="text-red-500">last-fm</a>
    </div>
  </div>
  <div v-else>
    Fetching
  </div>

  <h3 class="text-3xl mt-3">Similar Songs</h3>

  <div v-if="similartracks">
    <div v-for="track in similartracks.track" :key="track">
      <a class="p-3 pl-5 bg-gray-700 my-4 flex flex-row rounded" :href="track.url">
        <div>
          <h4 class="text-2xl">{{ track.name }}</h4>
          <p>by {{ track.artist.name }}</p>
        </div>
      </a>
    </div>
  </div>
  <div v-else>Fetching</div>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from "vue"
import axios from "axios"
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useApiKeyStore } from "@/stores/apiKey";

onMounted(() => {
  fetchSongInfo()
  fetchSimilarSongs()
})

const apiKey = useApiKeyStore()
const route = useRoute()

const trackinfo = ref()
const similartracks = ref()

async function fetchSimilarSongs() {
  similartracks.value = null
  const res = await axios(`https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${route.params.artist}&track=${route.params.track}&api_key=${apiKey.key}&limit=10&format=json`)

  similartracks.value = res.data.similartracks
}

async function fetchSongInfo() {
  trackinfo.value = null
  const res = await axios(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${apiKey.key}&artist=${route.params.artist}&track=${route.params.track}&format=json`)

  trackinfo.value = res.data.track
}
</script>

<script lang="ts">
export default {
  name: "songinfo",
};
</script>