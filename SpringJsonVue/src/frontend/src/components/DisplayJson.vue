<script setup>
import { ref, watchEffect } from 'vue'

const API_URL = `/api/messages/json`
const idText = ref([])

function getJson() {
  console.log(">>>>>")
  watchEffect(async () => {
    const url = `${API_URL}`
    idText.value = await (await fetch(url)).json()
  })
}

const someString = ref(" ... >>")
function chgSome() {
  someString.value = "someString"
}

function sum(a,b) {
  return a + b;
}

</script>
<template>
  <div>
    <button id="testButton" @click="getJson">get JSON</button>

    <div>
      ID: {{ idText.id }}
    </div>
    <div>
      Name: {{ idText.name }}
    </div>
    <div>
      DOB: {{ idText.birthDate }}
    </div>
    <div>
      Email: {{ idText.emails }}
    </div>
  </div>
</template>