<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Map v-bind:position="position" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Map from './components/Map.vue';
import Position from './classes/Position';

@Component({
  components: {
    Map
  },
})
export default class App extends Vue {
  position = new Position(1, 2);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
