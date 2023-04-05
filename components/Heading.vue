<template>
  <h2
    class="after:block after:content-[''] after:relative after:top-[-5px] after:w-[300px] after:h-[1px] after:ml-5 dark:after:bg-white after:bg-lightGray flex relative items-center w-full text-[clamp(22px,_5vw,_32px)] whitespace-nowrap m-[10px_0px_40px] text-darkBlue  dark:text-tertiary numbered-heading font-semibold before:font-mono after:font-mono"
  >
    <slot>Section Heading</slot>
  </h2>
</template>

<style scoped>
.numbered-heading:before {
  position: relative;
  bottom: 4px;
  counter-increment: section 1;
  content: "0" counter(section) ".";
  margin-right: 10px;
  font-size: clamp(15px, 3vw, 20px);
  font-weight: 400;
}

</style>
