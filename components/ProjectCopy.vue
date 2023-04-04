<script setup>
const props = defineProps([
  "projectImage",
  "items",
  "imagePosition",
  "projectUrl",
]);
</script>

<template>
  <div
    class="grid md:grid-cols-12 justify-center text-left items-center mb-[70px]"
  >
    <a
      :href="projectUrl"
      class="order-first md:order-none md:row-[1/2] md:col-[1/8] h-full"
      :class="{ 'md:col-[6/-1]': imagePosition === 'right' }"
    >
      <img :src="projectImage" />
    </a>

    <div
      class="order-last md:order-none md:row-[1/2] md:col-[7/-1]"
      :class="{ 'md:col-[1/7]': imagePosition === 'right' }"
    >
      <p class="font-mono text-[13px] my-2.5">Featured Project</p>
      <h3
        class="text-[clamp(24px,_5vw,_28px)] dark:text-white mb-5 leading-[1.1]"
      >
        <a :href="projectUrl">
          <slot name="project-name">Project name</slot>
        </a>
      </h3>
      <div
        class="text-[18px] text-white dark:text-lightGray md:leading-[1.3] project-description py-5 px-5 md:p-6 bg-darkBlue bg-opacity-90 dark:bg-opacity-100"
      >
        <p>
          <slot name="project-description">description</slot>
        </p>
      </div>
      <ul
        class="flex font-mono gap-3 my-3 md:justify-start"
        :class="{ 'md:justify-end': imagePosition === 'left' }"
      >
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
      <div
        class="flex font-mono gap-3 my-3 md:justify-start"
        :class="{ 'md:justify-end': imagePosition === 'left' }"
      >
        <svg
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <title>GitHub</title>
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
        <a :href="projectUrl">
          <svg
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <title>External Link</title>
            <path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            ></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
