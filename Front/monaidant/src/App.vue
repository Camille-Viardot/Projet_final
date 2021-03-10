<template>
  <div id="app">
    <Nav v-if="getPayload" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from '../src/components/HeaderFooter/Nav'
import Footer from '../src/components/HeaderFooter/Footer'
import { mapGetters } from 'vuex'

export default {
  components: {
    Nav,
    Footer
  },
  computed: { ...mapGetters(['getPayload']) }
}
</script>

<style>
#app {
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

</style>
