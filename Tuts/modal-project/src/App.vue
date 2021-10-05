<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name"><br>
  <button @click="handleClick">Click me</button><br>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
        <template v-slot:links>
            <a href="#">Sign up now</a><br><br>
            <br>
            <a href="#">more info</a>
        </template>

        <h1>Ninja Giveaway</h1>
        <p>Grab your Ninja swag for half price</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
        <template v-slot:lists>
            <ul>
              <li>India</li>
              <li>Pakistan</li>
              <li>China</li>
              <li>Indonsia</li>
              <li>Japan</li>
            </ul>
        </template>
      <h1>Greetings Humans</h1>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">Open Modal 2</button>
</template>

<script>

import Modal from './components/Modal';

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return  {
      title: 'My First Vue.js App :)',
      header: 'Sign up for the give away',
      text: 'Grab your ninja swag for half a price',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },

    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }

  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
