``` vue
<!-- https://www.youtube.com/watch?v=bci6zbsp0RI -->
<!--
  $ npm init vue@latest
  $ vue --version 
    @vue/cli 5.0.8
 -->
<!-- Post.vue -->
<template>
  <div v-for="post in postData">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const postData = ref([])

const getPost = async () => {
  return fetch('https://json.com/posts')
    .then(response => response.json)
}

onMounted(() => {
  getPost().then(data => {
    postData.value = daata
  })
})
</script>
```
