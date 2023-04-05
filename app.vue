<script setup>
import TimelineItem from "./components/TimelineItem.vue";
import Heading from "./components/Heading.vue";

const second = ref("test");

const jobsDescriptions = ref({
  freelance: [
    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    "Create e-commerce, portfolios and personal pages for a variety of clients",
  ],
  valdo: [
    "Work with a variety of different languages, platforms, frameworks, databases and content management systems such as JavaScript, Vue, Nuxt, Strapi, Saleor, WordPress, MongoDB, GraphQL, MySQL, PostgreSQL",
    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    "Assess UX and UI designs for technical feasibility",
    "Use different databases - MySQL, PostgreSQL, MongoDB ",
    "Wrote end to end tests using Cypress",
    "Maintain and improv legacy code",
    "UI libraries - Vuetify, Quasar, Bootstrap, TailwindCSS, PrimeVue",
    "Track tasks and projects progress with JIRA using Scrum methodology.",
    "Write and edit project documentation in Confluence",
    "Git, Gitlab and Jira",
  ],
  softuni: [
    "Learning Programming Fundamentals",
    "Learning Data Structures",
    "Introduction to SQL and noSQL databases",
    "JS frameworks",
    "Testing",
  ],
  marketing: [
    "Digital marketing specialist for multiple companies",
    "Main role was to optimize pages SEO - on and off page + technical SEO.",
  ],
});
</script>

<template>
  <div
    class="bg-background dark:bg-darkModeBg text-darkBLue dark:text-lightGray"
  >
    <Navbar class="bg-darkerBg/95 dark:bg-darkModeBg/95" />
    <main
      class="max-w-[1600px] px-[25px] md:px-[50px] lg:px-[100px] xl:px-[150px] w-full min-h-screen pt-36 mx-auto"
    >
      <section
        id="hero"
        class="max-w-[1100px] mx-auto flex items-start justify-center flex-col"
      >
        <div class="font-mono ml-1 mb-[30px]">Hello, my name is</div>
        <div
          class="text-[clamp(40px,_8vw,_80px)] text-darkBlue dark:text-[#fffffe] font-semibold leading-[1.1]"
        >
          Emanuil Gerganov
        </div>
        <div
          class="text-[clamp(40px,_8vw,_80px)] font-semibold leading-[0.9] text-tertiary"
        >
          Front End Web Developer
        </div>
        <div class="max-w-[540px] mt-5 text-[20px]">
          <p>
            I love creating fast, performant, accessible and optimized webpages
            using my preferred technologies - Vue.js framework for building web
            user interfaces together with TailwindCSS for styling.
          </p>
        </div>
        <a
          class="resume font-mono bg-darkBlue dark:bg-lightGray dark:text-darkModeBg text-white mt-[50px]"
          href="https://docs.google.com/document/d/13Pu0f01NvE-kR-U09HukZnXH7GWPEXtDiYY9mmt6LZg/edit?usp=sharing"
        >
          DOWNLOAD RESUME</a
        >
      </section>
      <section id="about" class="max-w-[1100px] mx-auto pt-[100px]">
        <Heading>About me</Heading>
        <div class="flex flex-col md:flex-row gap-[50px] text-[20px]">
          <div class="flex flex-col gap-[15px]">
            <p>
              Hello! My name is Emanuil Gerganov and I enjoy creating things
              that live on the internet. I have 2+ years of web development
              experience working with clients, designers, copywriters and
              developer teams. The pages I build are e-commerce, portfolios,
              blogs and business webpages.
            </p>
            <p>
              When working I always have in mind the end users experience, how
              they will see and interact with the end product. Always in a mood
              for learning new concepts and best practices or getting a deeper
              knowledge of the basics.
            </p>
            <p>
              I also have experience working with progressive web apps, SEO
              optimization, web accessibility, multiple UI libraries, databases,
              API's and other technologies.
            </p>
            <p>
              List of technologies I’ve been working with in projects and have
              experiece with:
            </p>
            <ul class="font-mono text-base columns-2 mt-5">
              <ListItem> Javascript (ES6+) </ListItem>
              <ListItem> Vue 2 + 3</ListItem>
              <ListItem> Nuxt 2 + 3 </ListItem>
              <ListItem> GraphQL </ListItem>
              <ListItem> Firebase </ListItem>
              <ListItem> Cypress </ListItem>
              <ListItem> Strapi</ListItem>
              <ListItem> Bootstrap 5 </ListItem>
              <ListItem> TailwindCSS </ListItem>
              <ListItem> Wordpress </ListItem>
            </ul>
          </div>
          <div
            class="order-first md:order-2 w-1/2 self-center md:w-full md:self-start"
          >
            <img class="rounded-2xl" src="/emanuil-gerganov.webp" />
          </div>
        </div>
      </section>
      <section id="experience" class="pt-[100px] max-w-[1100px] mx-auto">
        <Heading> Experience and studies </Heading>
        <ul>
          <TimelineItem :descriptions="jobsDescriptions.freelance">
            <template #heading>Freelance Web Developer</template>
            <template #date>April 2022 - Present</template>
          </TimelineItem>

          <TimelineItem :descriptions="jobsDescriptions.valdo">
            <template #heading
              >Front-end web developer <span>@ Valdo</span></template
            >
            <template #date>November 2020 - March 2022</template>
          </TimelineItem>
          <TimelineItem :descriptions="jobsDescriptions.softuni">
            <template #heading
              >Learning Java and Javascript <span>@ Softuni</span></template
            >
            <template #date>January 2020 - January 2021</template>
          </TimelineItem>
          <TimelineItem :descriptions="jobsDescriptions.marketing">
            <template #heading
              >Digital marketing and SEO optimization
            </template>
            <template #date>January 2015 - January 2020</template>
          </TimelineItem>
        </ul>
      </section>

      <section id="work" class="max-w-[1100px] mx-auto pt-[100px]">
        <Heading> Some of the things I have built </Heading>
        <ProjectCopy
          class="sm:text-right"
          project-image="/md-crop.png"
          imagePosition="left"
          project-url="https://emanuilgerganov.github.io/ecommerce-example/"
          :items="['Vue 2', 'Nuxt 2', 'TailwindCSS']"
        >
          <template #project-name>E-commerce App </template>
          <template #project-description
            >Minimalistic e-commerce website made with Vue 2, Nuxt 2 and
            TailwindCSS. It has the basic pages needed for e-shop, optimized for
            SEO with JSON-LD . Fetching product items from Rest API JSON. Cart
            persisting products in Local Storage.
          </template>
        </ProjectCopy>
        <ProjectCopy
          class="sm:text-left"
          project-image="/todo.png"
          imagePosition="right"
          project-url="https://emanuilgerganov.github.io/to-do/"
          :items="['Vue 3', 'Firebase', 'TailwindCSS']"
        >
          <template #project-name>To-do App </template>
          <template #project-description
            >Simple To-Do App made with Vue 3, Vite, TailwindCSS and Firebase as
            backend. Implemented user authentication with OAuth using different
            providers - Google, Facebook and Github. Persists tasks in Firestore
            database.
          </template>
        </ProjectCopy>
      </section>

      <section id="contact" class="max-w-[600px] mx-auto pt-[50px]">
        <Heading> Hire me or learn more about me</Heading>
        <p class="text-[20px] leading-[1.3] text-center">
          Open for new opportunities. Contact me by email or social media.
        </p>

        <div class="flex justify-center gap-12 items-center mt-10">
          <a
            href="https://twitter.com/GerganovEmanuil"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-twitter"
            >
              <title>Twitter</title>
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path></svg
          ></a>
          <a href="mailto: emanuilgerganov@gmail.com">
            <svg
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              data-name="Layer 2"
            >
              <path
                d="M29.94 6.68a1 1 0 0 0-.09-.18.94.94 0 0 0-.05-.11 1.6 1.6 0 0 0-.31-.24l-.17-.06H2.94a1 1 0 0 0-.21 0l-.17.06a1 1 0 0 0-.15.1 1 1 0 0 0-.15.13.93.93 0 0 0-.05.11.79.79 0 0 0-.21.39A.93.93 0 0 0 2 7v18a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V7a.93.93 0 0 0 0-.12 1 1 0 0 0-.06-.2ZM26.06 8 16 15.74 5.94 8ZM28 24H4V9l11.39 8.76a1 1 0 0 0 1.22 0L28 9Z"
              >
                <title>Email</title>
              </path>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/emanuil-gerganov/">
            <svg
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <title>LinkedIn</title>
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle></svg
          ></a>
        </div>
      </section>
    </main>

    <footer>
      <div
        class="flex text-center justify-center items-center text-black h-auto min-h-[70px] mt-[100px] p-[15px] bg-lightGray dark:bg-darkModeButton font-mono"
      >
        Built by Emanuil Gerganov with Nuxt 3 + TailwindCSS @2023
      </div>
    </footer>

    <!-- <div class="sticky bottom-0 mr-5 ">SOCIAL MEDIA LINKS</div>
    <div class="sticky bottom-0 mr-5 ">email</div> -->
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
main {
  counter-reset: section 0;
}

.resume {
  padding: 1.25rem 1.75rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  margin-top: 50px;
}
.block-enter {
  opacity: 0;
}
.block-enter-active {
  transition: opacity 2s;
}
.block-leave-active {
  transition: opacity 2s;
  opacity: 0;
}
</style>
