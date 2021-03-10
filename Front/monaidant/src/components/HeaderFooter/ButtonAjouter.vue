<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-button
          class="buttonAjouter"
          variant="secondary"
          v-on:click="pageInscription()"
          >Ajouter compte</b-button
        >
        <br />
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Deconnexion',
  components: {},

  computed: {
    ...mapGetters(['getPayload'])
  },

  methods: {
    pageInscription () {
      this.$router.push('/creeraider')
    }
  }
}
</script>

<style>
</style>
