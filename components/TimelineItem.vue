<script setup>
const props = defineProps(["descriptions"]);
</script>

<template>
  <li
    class="border-l-2 py-3 pl-5  border-l-darkBlue dark:border-l-tertiary border-solid flex flex-col"
  >
    <h3 class="text-[22px] leading-[1.3] font-medium">
      <slot name="heading"></slot>
    </h3>
    <p class="font-mono text-[13px] mb-6">
      <slot name="date"></slot>
    </p>
    <ul>
      <ListItem v-for="(description, index) in descriptions" :key="index">
        {{ description }}
      </ListItem>
    </ul>
  </li>
</template>
