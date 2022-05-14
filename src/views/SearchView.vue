<template>
  <h1 class="text-4xl">Search by Song name</h1>
  <div>
    Songame:
    <input type="text" v-model="state.songName" class="mt-5 ml-2 mr-4 bg-gray-700 p-2 rounded" @keyup="fetchSongs"
      placeholder="Start typing" />
  </div>
  <div>
    (Optional) Artist:
    <input type="text" v-model="state.songArtist" class="mt-5 ml-2 mr-4 bg-gray-700 p-2 rounded" @keyup="fetchSongs" />
  </div>
  <div v-if="apiResult">
    <div v-for="track in apiResult.trackmatches.track" :key="track" class="p-3 pl-5 bg-gray-700 my-4 flex flex-row rounded">

        <div>
          <h4 class="text-2xl">{{ track.name }}</h4>
          <p>by {{ track.artist }}</p>
        </div>
        <RouterLink :to="{ name: 'songinfo', params: { artist: track.artist, track: track.name } }"
          class="bg-green-600 ml-auto h-14 p-4 rounded hover:bg-green-700 duration-200">
          Info</RouterLink>
        <a :href="`https://www.youtube.com/results?search_query=${track.name} ${track.artist}`" target="_blank"
          class="bg-yellow-600 ml-4 h-14 p-4 rounded hover:bg-yellow-700 duration-200">
          Search YT
        </a>
        <a :href="track.url" target="_blank" class="bg-red-700 h-14 p-4 ml-4 rounded hover:bg-red-800 duration-200">
          last.fm
        </a>
    </div>
  </div>
  <div v-else class="mt-12">
    <div class="mt-5 text-2xl bg-gray-700 rounded p-5 inline">
      Please search for a song, to get results
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue"
import axios from "axios"
import { useApiKeyStore } from "@/stores/apiKey"

const apiKey = useApiKeyStore()

const state = reactive({songName: "", songArtist: "" })

const apiResult = ref()

async function fetchSongs() {
  const res = await axios(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${state.songName}&artist=${state.songArtist}&api_key=${apiKey.key}&format=json`)
  apiResult.value = res.data.results
}
</script>
<script lang="ts">
export default {
  name: "searchsong"
};
</script>