<script setup lang="ts">
const routes = ref([
  {
    label: 'Главная',
    value: '/',
  },
  {
    label: 'Исполнители',
    value: '/artists',
  },
])
</script>

<template>

  <div class="border-t border-b bg-white">
    <div class="flex gap-2 max-w-5xl mx-auto px-4">
      <router-link
          v-for="item in routes"
          class="p-2 hover:bg-gray-100 cursor-pointer"
          tag="a"
          :to="item.value"
      >{{item.label}}</router-link>
    </div>

  </div>
</template>

<style scoped>

</style>