<template>
  <div @click="isOpen = !isOpen" class="sort">
    <div class="sort__label">
      <svg
        :class="{ active: isOpen }"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C" />
      </svg>
      <b>Сортировка по:</b>
      <span>{{ isActive }}</span>
    </div>
    <div class="sort__popup" :class="{ active: isOpen == true }">
      <ul>
        <li
          v-for="item in sortText"
          @click="sortPizzas(item)"
          :class="{ active: isActive === item }">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();
const isOpen = ref(false);
const sortText = ref(["популярности", "цене", "алфавиту"]);
const isActive = ref("популярности");

const sortPizzas = (sort) => {
  isActive.value = sort
  if (  sort === "цене") {
    store.commit("sortPizzas", "price")
  } else if (sort === "алфавиту") {
    store.commit("sortPizzas", "name")
  } else if (sort === "популярности") {
    store.commit("getPizzas")
  }
}
</script>

<style lang="scss" scoped></style>
