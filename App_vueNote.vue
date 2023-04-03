<script setup>
import { reactive, ref, computed, onMounted, watch } from 'vue'   //
import ChildComp from './ChildComp.vue'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')

const titleClass = ref('title')

const count = ref(0)

const text = ref('')

const awesome = ref(true)

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])
const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

const p = ref(null)

// ChildComp
const greeting = ref('Hello from parent')

const msg = ref('from parent')


function increment() {
  count.value++
}

function toggle() {
  awesome.value = !awesome.value
}

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false }) //
  newTodo.value = ''
}
function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
  p.value.textContent = 'mounted'
})

watch(count, (newCount) => {
  // yes, console.log() is a side effect
  console.log(`new count is: ${newCount}`)
})
watch(filteredTodos, (size) => {
  console.log(`filteredTodos lgth is: ${size.length}`)
})
</script>

<template>
  <p>Count is: {{ counter.count }}</p>

  <h4 :class="titleClass">Make me red</h4>

  <button @click="increment">count is: {{ count }}</button><br>

  <input v-model="text" placeholder="Type here">
  {{ text }}<br>

  <button @click="toggle">toggle</button>
  <h3 v-if="awesome">Vie is awesome</h3>
  <h3 v-else>Oh no 😢</h3><br>

  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>

  <p ref="p">hello, no mounted</p>

  <!-- <ChildComp /> -->
  <ChildComp :msg="greeting" />

  <!-- <ChildComp @response="(msg) => childMsg = msg" />
          <p>{{ childMsg }}</p> -->

  <ChildComp>Message: {{ msg }}</ChildComp>
</template>

<style>
.title {
  color: red;
}

.done {
  text-decoration: line-through;
}
</style>


<!-- **** ChildComp.vue
<script setup>
const props = defineProps({
    msg: String
})

const emit = defineEmits(['response'])
emit('response', 'hello from child')

</script>

<template>
    <h2>{{ msg || 'No props passed yet' }}</h2>
    <slot>Fallback content</slot>
</template> -->
