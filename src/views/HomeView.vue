<template>
  <Header :isShow="true"/>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <Filter />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        <Pizza/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Filter from "@/components/Filter.vue";
import Sort from "@/components/Sort.vue";
import Pizza from "@/components/Pizza.vue";
import Header from '@/components/Header.vue'
import { ref } from "@vue/reactivity";
</script>