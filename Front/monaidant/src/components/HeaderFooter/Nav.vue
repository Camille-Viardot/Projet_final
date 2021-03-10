<template>
  <div>
    <mdb-navbar style="background-color: #4785D7; color: black;" dark>
      <mdb-navbar-brand>
        Bienvenue {{ getPayload.prenom }} {{ getPayload.nom }}
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <div>
          <mdb-btn
            color="secondary"
            v-if="getPayload.id_user"
            v-on:click="pageInscription()"
          >
            Ajouter compte
          </mdb-btn>
          <mdb-btn color="primary" v-on:click="pageprofil()">
            Retour profil
          </mdb-btn>
          <mdb-btn color="danger" v-on:click="signOut()">
            Deconnexion
          </mdb-btn>
          </div>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbBtn
} from 'mdbvue'

export default {
  name: 'Nav',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbBtn
  },

  computed: {
    ...mapGetters(['getPayload'])
  },

  methods: {
    pageprofil () {
      this.$router.push('/dashboard')
    },

    signOut () {
      this.$store.dispatch('deleteToken')
      this.$router.push('/')
    },

    pageInscription () {
      this.$router.push('/creeraider')
    }
  }
}
</script>

<style>
</style>
