<template>
  <div id="app">
    <Deconnexion v-if="getPayload" />
    <router-view />
  </div>
</template>

<script>
import Deconnexion from '../src/components/Deconnexion'
import { mapGetters } from 'vuex'

export default {
  components: {
    Deconnexion
  },
  computed: { ...mapGetters(['getPayload']) }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  font-family: 'Luciole';
  src: url('/Font/Luciole-Regular.tff') format('ttf');
}

* {
  font-family: Luciole;
}
</style>
