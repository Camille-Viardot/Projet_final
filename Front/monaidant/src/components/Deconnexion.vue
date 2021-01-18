<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-brand>Bienvenue sur votre page personnelle {{ getPayload.prenom }}</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-button variant="danger" v-on:click="signOut()">Deconnexion</b-button>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {},

  computed: {
    ...mapGetters(['getPayload'])
  },

  methods: {
    signOut () {
      this.$store.dispatch('deleteToken')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
