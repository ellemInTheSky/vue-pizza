<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import {getDocument} from '@/composables/getDocument'

onMounted (() => {
  getDocument()
})

</script>

<style lang="scss">
@import url("./assets/css/app.css");
</style>