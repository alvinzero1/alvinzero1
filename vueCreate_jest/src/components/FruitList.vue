<!-- FruitList.vue -->
<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'

const fruits = ref(["apple", "banana", "orange"])

const numFruits = computed(() => {
  return fruits.value.length
})

function addFruit(fruit) {
  fruits.value.push(fruit)
}

</script>

<template>
  <div>
    <ol>
      <li v-for="fruit in fruits" :key="fruit">
        {{ fruit }}
      </li>
    </ol>
    <p>
      Number of fruits: {{ numFruits }}
    </p>
  </div>
</template>
