<template>
  <h2
    class="flex relative items-center w-full text-[clamp(22px,_5vw,_32px)] whitespace-nowrap m-[10px_0px_40px] text-darkBlue after:bg-white  dark:text-tertiary numbered-heading font-semibold before:font-mono after:font-mono"
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
.numbered-heading:after {
  content: "";
  display: block;
  position: relative;
  top: -5px;
  width: 300px;
  height: 1px;
  margin-left: 20px;
  /* background-color: navy; */
}
</style>
