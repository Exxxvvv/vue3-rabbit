<template>
  <div class="layout">
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup name="Layout">
  import {RouterView} from 'vue-router'
  import LayoutNav from './components/LayoutNav.vue';
  import LayoutHeader from './components/LayoutHeader.vue';
  import LayoutFooter from './components/LayoutFooter.vue';
</script>

<style scoped>

</style>