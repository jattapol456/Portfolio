<template lang="pug">
  header
    .container.fixed.z-40
      .w-full.h-16.shadow-md.flex.justify-around.items-center
        .flex.items-center
          .uppercase.font-bold.text-3xl 
            a Jattapol

        .menu-left
          ul.flex.items-center.space-x-10
            <nuxt-link :to="{ path: '/',hash:'#About'}">About</nuxt-link>
            <nuxt-link :to="{ path: '/',hash:'#Resume'}">Resume</nuxt-link>
            <nuxt-link :to="{ path: '/',hash:'#Skills'}">Skills</nuxt-link>
            <nuxt-link :to="{ path: '/',hash:'#Projects'}">Projects</nuxt-link>

</template>

<script lang="ts">
export default({
  
})

</script>

<style lang="scss" scoped>

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  &:hover, :focus {
    color: darken(rgb(255, 255, 255), 20%);
  }
}
.menu-left a {
  display: inline-block;
  position: relative;
  padding-bottom: 0px;
  transition: color .35s ease;
  &:before {
    content: '';
    display:block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    transition: width 0s ease, background .35s ease;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: rgb(255, 255, 255); 
    transition: width .35s ease;
  }
  &:hover:before {
    width: 100%;
    background-color: rgb(255, 255, 255); 
    transition: width .35s ease;
  }
  &:hover:after {
    width: 100%;
    background: transparent;
    transition: all 0s ease;
  }
}
</style>