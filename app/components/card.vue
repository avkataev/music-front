<script setup lang="ts">
const props = defineProps(['header', 'header:after'])
const isOpen = ref(false)
</script>

<template>
<div class="bg-white p-5 rounded-xl shadow-sm">
  <div
      v-if="$slots.header || $slots['header:after'] || props.header"
      class="mb-5 flex items-center justify-between"
  >
    <div
        v-if="$slots.header || props.header"
        @click="isOpen = true"
        class="text-2xl font-bold"
    >
      <slot name="header">{{props.header}}</slot>
    </div>
    <div
        v-if="$slots['header:after']"
    >
      <slot name="header:after">{{props['header:after']}}</slot>
    </div>
  </div>
  <slot/>
<div v-if="isOpen" class="fixed top-0 left-0 w-full h-full overflow-auto">
  <div @click="isOpen = false" class="w-full h-full bg-[#f5f5fa] opacity-75"></div>
  <div
      class="absolute top-1/2 left-1/2 bg-white p-5 rounded-xl"
      style="transform: translate(-50%)"
  >
    <div
        v-if="$slots.header || $slots['header:after'] || props.header"
        class="mb-5 flex items-center justify-between"
    >
      <div
          v-if="$slots.header || props.header"
          class="text-2xl font-bold"
      >
        <slot name="header">{{props.header}}</slot>
      </div>
      <div
          v-if="$slots['header:after']"
      >
        <slot name="header:after">{{props['header:after']}}</slot>
      </div>
    </div>
    <slot/>
  </div>
</div>
</div>
</template>

<style scoped>

</style>