<script setup lang="ts">
import {useArtist} from "~/composables/useArtist";

const route = useRoute()
const { findById } = useArtist()
const artist = ref(null)

onMounted(async () => {
  artist.value = await findById(route.params.artistId);
});
</script>

<template>
  <div>
    <div class="mb-5 grid grid-cols-[400px,_1fr,_60px] grid-rows-[80px,_1fr] gap-5">
      <div class="row-span-2">
        <div class="rounded-xl overflow-hidden shadow-sm">
          <NuxtImg
              src="https://placehold.co/400x300"
              width="400"
              height="300"
              placeholder="blur"
              alt="Photo"
          />
        </div>
      </div>
      <card>
        <h2 class="text-4xl font-bold">{{artist?.name}}</h2>
      </card>
      <card class="row-span-2">3</card>
      <card>
        <div>{{artist?.genres.join(' · ')}}</div>
        <div>Страна — {{artist?.countries.join('/')}}</div>
        <div>Город — {{artist?.cities.join('/')}}</div>
      </card>
    </div>
    <div class="grid grid-cols-[400px,_1fr] gap-5">
      <card header="Concerts">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </card>
      <card header="History">
        {{artist?.description}}
      </card>
      <card header="Top songs">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </card>
      <card header="Discography">
        <template #header:after>
          <div class="italic">
            All · Studio · Single · Live
          </div>
        </template>
        <div class="flex gap-2">
          <router-link
              v-for="album in artist?.albums.slice(0, 4)"
              :to="'/artists/' + artist.id + '/albums/' + album.id"
              class="w-full"
          >
            <img class="w-full h-full block object-cover rounded-lg" :src="album.coverUrl" alt="">
          </router-link>
        </div>
      </card>
      <card header="News">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </card>
      <card header="Photo">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
      </card>
      <card>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </card>
    </div>
    <pre>{{artist}}</pre>
  </div>
</template>

<style scoped>

</style>