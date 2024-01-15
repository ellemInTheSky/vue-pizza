<template>
  <div class="categories">
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        :class="{ active: isActive === category }"
        @click="filterPizzas(category)">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();

const categories = ref([
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
]);
const isActive = ref("Все");

const filterPizzas = (category) => {
  isActive.value = category;
  if (category === "Все") {
    store.commit("getPizzas");
  } else {
    store.commit("filterPizzas", category);
  }
};

</script>

<style lang="scss" scoped></style>
