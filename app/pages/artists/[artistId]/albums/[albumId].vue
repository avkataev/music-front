<script setup lang="ts">
import {useAlbum} from "~/composables/useAlbum";

const route = useRoute()
const { findById } = useAlbum()
const album = ref(null)

onMounted(async () => {
  album.value = await findById(route.params.albumId);
});
</script>

<template>
  <div>
    <div class="mb-5 grid grid-cols-[300px,_1fr,_60px] grid-rows-[80px,_1fr] gap-5">
      <div class="row-span-2 w-full h-[300px] ">
        <div class="rounded-xl overflow-hidden h-full shadow-sm">
          <img
              class="object-contain w-full h-full"
              :src="album?.coverUrl"
              width="400"
              height="300"
              alt="Photo"
          />
        </div>
      </div>
      <card>
        <h2 class="text-4xl font-bold">{{album?.title}}</h2>
      </card>
      <card class="row-span-2">3</card>
      <card>
        <div>{{album?.genres.join(' · ')}}</div>
        <div>Страна — {{album?.countries.join('/')}}</div>
        <div>Город — {{album?.cities.join('/')}}</div>
      </card>
    </div>
    <div class="grid grid-cols-[300px,_1fr] gap-5">
      <card header="Concerts">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      </card>
      <card header="History">
        {{album?.description}}
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
          <div
              v-for="album in album?.albums.slice(0, 4)"
              class="w-full"
          >
            <img class="w-full h-full block object-cover" :src="album.coverUrl" alt="">
          </div>
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
    <pre>{{album}}</pre>
  </div>
</template>

<style scoped>

</style>