<script setup>
const props = defineProps(["descriptions"]);
</script>

<template>
  <li class="border-l-2 py-3 pl-5 dark:border-l-tertiary border-l-darkModeButton  border-solid flex flex-col">
    <h3 class="text-[22px] leading-[1.3] font-medium">
      <slot name="heading"></slot>
    </h3>
    <p class="font-mono text-[13px] mb-6">
      <slot name="date"></slot>
    </p>
    <p
      class="text-[18px] pl-[30px] mb-[10px] line-through[1.3] before:content-['▹'] dark:before:text-tertiary relative before:absolute before:left-0"
      v-for="description in descriptions"
      :key="item"
    >
      {{ description }}
    </p>
  </li>
</template>
