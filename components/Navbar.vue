<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const addBodyClass = () => {
  document.body.classList.toggle("overflow-hidden");
};

const target = ref(null);
const menuCheckbox = ref(null);

onClickOutside(target, (event) => {
  if ((menuCheckbox.value.checked = true)) menuCheckbox.value.checked = false;
  if (document.body.classList.contains("overflow-hidden"))
    document.body.classList.remove("overflow-hidden");
});
</script>

<template>
  <header
    class="flex items-center bg-background dark:text-white text-headline h-[100px] fixed w-full z-10 px-[25px] md:px-10 lg:px-[50px]"
  >
    <div class="flex justify-between items-center w-full">
      <button
        @click="toggleDark()"
        title="Toggle theme"
        class="flex flex-col items-center justify-center"
      >
        <svg
          v-if="isDark === false"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-12 h-12 text-[#2cb67d]"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            class="fill-sky-400/20 stroke-sky-500"
          ></path>
          <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
            class="stroke-sky-500"
          ></path>
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" class="w-12 h-12">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            class="fill-sky-400/20"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            class="fill-sky-500"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            class="fill-sky-500"
          ></path>
        </svg>
        <div v-if="isDark === true">Dark mode</div>
        <div v-else>Light mode</div>
      </button>
      <!-- <div>
        <a href="#hero"
          ><img src="/log.png" height="60" width="60" alt="LOGO"
        /></a>
      </div> -->
      <nav class="hidden md:flex items-center font-mono">
        <ol class="flex gap-5 menu-items items-center">
          <li class="flex before:mr-[5px] cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li class="flex before:mr-[5px] cursor-pointer">
            <a
              href="#experience
            "
              >Experience</a
            >
          </li>
          <li class="flex before:mr-[5px] ursor-pointer">
            <a href="#work">Work</a>
          </li>
          <li class="flex before:mr-[5px] cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ol>

        <button class="ml-7">
          <a
            class="leading-[1] bg-button dark:bg-darkModeButton w-max cursor-pointer dark:text-white px-[50px] py-[18px] mt-[10%]"
            href="https://docs.google.com/document/d/13Pu0f01NvE-kR-U09HukZnXH7GWPEXtDiYY9mmt6LZg/edit?usp=sharing"
            >RESUME</a
          >
        </button>
      </nav>
    </div>
    <aside ref="target" class="flex md:hidden font-mono">
      <input ref="menuCheckbox" id="menu__toggle" type="checkbox" />
      <label class="menu__btn relative z-20" for="menu__toggle">
        <div
          @click="addBodyClass"
          class="center before:bg-black dark:before:bg-darkModeButton after:bg-black dark:after:bg-darkModeButton cursor-pointer z-20"
        >
          <div class="bg-black dark:bg-darkModeButton"></div>
        </div>
      </label>
      <nav
        class="menu__box flex fixed flex-col justify-center items-center top-0 right-[-100%] h-full bg-darkerBg dark:bg-darkModeBg"
      >
        <ol class="menu-items menu-items-mobile list-none text-center">
          <li>
            <a class="menu__item transition-all duration-500" href="/#hero"
              >Home</a
            >
          </li>
          <li>
            <a class="menu__item" href="#about">About</a>
          </li>
          <li>
            <a class="menu__item" href="#experience">Experience</a>
          </li>
          <li>
            <a class="menu__item" href="#work">Work</a>
          </li>
          <li>
            <a class="menu__item" href="#contact">Contact</a>
          </li>
        </ol>
        <a
          class="leading-[1] dark:text-white dark:bg-darkModeButton bg-button w-max cursor-pointer px-[50px] py-[18px] mt-[10%]"
          href="/"
          >RESUME</a
        >
      </nav>
    </aside>
  </header>
</template>

<style scoped>
.menu-items li {
  width: 100%;
  counter-increment: item 1;
}
.menu-items-mobile a {
  padding: 3px 20px 20px;
}
.menu-items li:before {
  content: "0" counter(item) ".";
  /* margin-bottom: 5px; */
}
#menu__toggle {
  display: none;
  opacity: 0;
  left: -9999px;
  position: absolute;
}
#menu__toggle:checked ~ .menu__box {
  right: 0 !important;
}

#menu__toggle:checked + .menu__btn > .center:before {
  transform: translateY(12px) rotate(135deg);
}
#menu__toggle:checked + .menu__btn > .center:after {
  transform: translateY(-12px) rotate(-135deg);
}
#menu__toggle:checked + .menu__btn > .center div {
  transform: scale(0);
}
.center {
  width: 50px;
}

.center:before,
.center:after,
.center div {
  position: relative;
  /* background: white; */
  content: "";
  display: block;
  height: 2px;
  border-radius: 3px;
  margin: 10px 0;
  transition: 0.5s;
}
.menu__box {
  /* display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* top: 0; */
  /* right: -100%; */
  /* width: 300px; */
  width: min(75vw, 400px);
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transition-duration: 0.5s;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  /* color: #333; */
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;
}
.menu__item:hover {
  background-color: #cfd8dc;
}
</style>
