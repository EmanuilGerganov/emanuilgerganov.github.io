<script setup>
import TimelineItem from "./components/TimelineItem.vue";
import Heading from "./components/Heading.vue";

const second = ref("test");

const jobsDescriptions = ref({
  freelance: [
    "Write modern, performant, maintainable code for a diverse array of client and internal projects",
    "Create ecommerce, portofolios and personal pages for a variety of clients",
  ],
  valdo: [
    "Work with a variety of different languages, platforms, frameworks, databases and content management systems such as JavaScript, Vue, Nuxt, Strapi, WordPress, MongoDB, GraphQL, MySQL, PostgreSQL",
    "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    "Use different databases - MySQL, PostgreSQL, MongoDB ",
    "Wrote end to end tests using Cypress",
    "Maintained and improved legacy code",
    "UI libraries - Vuetify, Quasar, Bootstrap, TailwindCSS",
    "Write and edit project documentation in Confluence",
    "Git, gitlab and jira",
    "Made 2 projects with Vue 2 + Nuxt 2, one with Strapi as a backend/CMS and the other with SAleor a python made GraphQL e-commerce platform product for handling stores",
  ],
  softuni: [
    "Learning Programming Fundamentals",
    "Introduciton to SQL and NOsql Databases",
    "Testing",
  ],
  markering: [""],
});
</script>

<template>
  <div
    class="bg-background dark:bg-darkModeBg text-headline dark:text-darkModePar"
  >
    <Navbar class="bg-darkerBg dark:bg-darkModeBg" />
    <main
      class="max-w-[1600px] px-[25px] md:px-[50px] lg:px-[100px] xl:px-[150px] w-full min-h-screen mx-auto"
    >
      <section
        id="hero"
        class="min-h-screen max-w-[1000px] mx-auto flex items-start justify-center flex-col"
      >
        <div class="font-mono ml-1 mb-[30px]">Hello, my name is</div>
        <div
          class="text-[clamp(40px,_8vw,_80px)] text-headline dark:text-darkModeHead font-semibold leading-[1.1]"
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
            using my preferred technologies - Javascript framework Vue for
            building web user interfaces together with TailwindCSS for styling.
          </p>
        </div>
        <a
          class="resume font-mono bg-button dark:bg-darkModeButton dark:text-white text-headline mt-[50px]"
          href="/"
          >Download my Resume</a
        >
      </section>
      <section id="about" class="max-w-[900px] mx-auto py-[100px]">
        <Heading>About me</Heading>
        <div class="flex flex-col md:flex-row gap-[50px] text-[20px]">
          <div class="flex flex-col gap-[15px] basis-3/5">
            <p>
              Hello! My name is Emanuil Gerganov and I enjoy creating things
              that live on the internet. I have 2+ years of web development
              experience working with clients, designers, copywriters and
              developer teams. The pages I build are e-commerce, portfolios,
              blogs and business webpages.
            </p>

            <p>
              When working I always have in mind the end user experience, how he
              will see and interact with the end product. Always in a mood for
              learning new concepts and best practices or getting a deeper
              knowledge of the basics.
            </p>

            <p>
              I also have experience working with progressive web apps, SEO
              optimization, web accessibility, multiple UI libraries,
              databases,API's and other technologies.
            </p>
            <p>
              List of technologies I’ve been working with in projects and have
              experiece with:
            </p>
            <ul class="skills-list font-mono text-[13px] columns-2">
              <li class="relative pl-5 mb-[10px]">Javascript (ES6+)</li>
              <li class="relative pl-5 mb-[10px]">Vue 2 + 3</li>
              <li class="relative pl-5 mb-[10px]">GrahpQl</li>
              <li class="relative pl-5 mb-[10px]">Firebase</li>
              <li class="relative pl-5 mb-[10px]">Cypress</li>
              <li class="relative pl-5 mb-[10px]">Strapi</li>
              <li class="relative pl-5 mb-[10px]">TailwindCSS</li>
              <li class="relative pl-5 mb-[10px]">Bootstrap 5</li>
              <li class="relative pl-5 mb-[10px]">Nuxt 2 + 3</li>
              <li class="relative pl-5 mb-[10px]">Wordpress</li>
            </ul>
          </div>
          <div class="basis-2/5">
            <img
              src="/selfie.jpg"
            />
          </div>
        </div>
      </section>
      <section id="experience" class="py-[100px] max-w-[700px] mx-auto">
        <Heading> Experience and studies </Heading>
        <ul>
          <TimelineItem :descriptions="jobsDescriptions.freelance">
            <template #heading>Freelancing web developer</template>
            <template #date>March 2022 - Present</template>
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
          <TimelineItem :descriptions="jobsDescriptions.softuni">
            <template #heading
              >Digital marketing and SEO optimization
            </template>
            <template #date>January 2015 - January 2020</template>
          </TimelineItem>
        </ul>
      </section>

      <section id="work" class="max-w-[1000px] mx-auto">
        <Heading> Some of the things I have built </Heading>
        <ProjectCopy
          class="sm:text-right"
          project-image="/md-crop.png"
          imagePosition="left"
          project-url="https://emanuilgerganov.github.io/ecommerce-example/"
          :items="['Vue 2', 'Nuxt 2', 'TailwindCSS']"
        >
          <template #project-name>Eccomerce App </template>
          <template #project-description
            >Minimalistic ecommerce page made with Vue 2, Nuxt 2 and
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
          <template #project-name>To do App </template>
          <template #project-description
            >Simple ToDo App made with Vue 3, Vite, TailwindCSS and Firabase as
            backend. Implemented user authentication with OAuth using different
            providers - Google, Facebook and Github. Persists tasks in Firestore
            database.
          </template>
        </ProjectCopy>
      </section>

      <section id="contact" class="max-w-[600px] mx-auto py-[100px]">
        <Heading> Hire me or learn more about me</Heading>
        <p class="text-[20px] leading-[1.3] text-center">
          Open for new opportunities. Contact me by email, social media,
        </p>
      </section>
    </main>
    <footer
      class="flex justify-center items-center h-auto min-h-[70px] p-[15px] bg-slate-200"
    >
      <div class="font-mono">
        Built by Emanuil Gerganov with Nuxt 3 + TailwindCSS @2022
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
main {
  counter-reset: section 0;
}
.skills-list li:before {
  content: "▹";
  position: absolute;
  left: 0px;
  font-size: 14px;
  line-height: 17px;
}

.resume {
  padding: 1.25rem 1.75rem;
  /* font-size: var(--fz-sm); */
  /* font-family: var(--font-mono); */
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
