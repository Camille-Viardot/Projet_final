<template>
  <div class="contenu">
    <div class="affichage">
      <b-list-group
        v-for="mesContacts in mesContacts"
        :key="mesContacts.id_user || mesContacts.user_affiliate"
      >
        <ul class="listContact">
          <li><strong>Name</strong>: {{ mesContacts.nom }}</li>
          <li><strong>Prénom</strong>: {{ mesContacts.prenom }}</li>
          <li><strong>Email</strong>: {{ mesContacts.email }}</li>
          <li><strong>Téléphone</strong>: {{ mesContacts.telephone }}</li>
        </ul>
      </b-list-group>
    </div>
    <b-button size="lg" variant="primary" v-on:click="pageprofil()"
      >Retour profil</b-button
    >
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      mesContacts: '',
      myPayload: ''
    }
  },
  computed: { ...mapGetters(['getPayload']), ...mapGetters(['getContact']) },

  methods: {
    pageprofil () {
      this.$router.push('/dashboard')
    }
  },
  mounted () {
    axios
      .get(
        `http://localhost:3000/getcontacts/${this.getPayload.id_user ||
          this.getPayload.user_affiliate}`
      )
      .then(response => {
        this.mesContacts = response.data
      })
  }
}
</script>

<style>
.affichage {
  display: flex;
  width: 100em;
}

.listContact {
  border: 1px solid black;
  padding: 15px 15px 15px 25px;
  margin: 10px;
  text-align: left;
}
</style>
