<script>
import ButtonCounter from './ButtonCounter.vue'
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      text: "hello",
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      },
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      firstName: 'John',
      lastName: 'Doe',

      activeColor: 'red',
      fontSize: 30,

      awesome: true,

      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],

      name: 'Vue.js',

      newItem2: '',

      // Watchers
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',


      // props
      post: {
        id: 1,
        title: 'My Journey with Vue'
      }

    }
  },

  watch: {
    // Watchers
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer()
      }
    }
  },

  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      var v1 = this.obj.nested.count;
      return this.author.books.length > v1 ? 'Yes' : 'No'
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      // these will work as expected.
      this.obj.nested.count++

    },
    arrPush() {
      this.obj.arr.push('baz')
    },

    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    },

    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`)
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },

    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },

    // Watchers
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }

  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.obj.nested.count}.`)
    console.log(`>>>> ${this.fullName = 'Teresa Choo'}`)
    console.log(this.$refs.sets)
    console.log(this.$refs.newItem2)
    console.log(this.$refs.title)
  },
  components: {
    ButtonCounter
  },

  // Props are declared using the props option:
  props: {
    title: String,
    likes: Number
  }
}
</script>

<template>
  <h3>{{ text }}</h3>
  <button @click="increment">Count is: {{ obj.nested.count }}</button>
  <p>{{ obj.arr.length }}</p>
  <button @click="arrPush">Push</button>

  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">firstname: {{ firstName }}</div>
  <ul>
    <li v-for="(book, index) in author.books">
      {{ index }} - {{ book }}
    </li>
  </ul>

  <button @click="awesome = !awesome">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <h1 v-show="ok">Hello!</h1>

  <ul v-for="numbers in sets" ref="sets">
    <li v-for="n in even(numbers)">
      {{ n }}
    </li>
  </ul>


  <!-- `greet` is the name of the method defined above -->
  <button @click="greet">Greet</button>

  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>

  <br>
  <p>Message is: {{ newItem2 }}</p>
  <input v-model.lazy="newItem2" type="text" placeholder="edit me" ref="newItem2"/>
  {{ newItem2 }}

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <!-- Watchers -->
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>

  <h3>Here are many child components!</h3>
	<ButtonCounter />
	<ButtonCounter />
	<ButtonCounter />

  <BlogPost :id="post.id" :title="post.title" ref="title"/>

  

</template>

<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
