<template>
  <div class="affichage">
    <b-list-group v-for="mesContacts in mesContacts" :key="mesContacts.id">
      <p class="listContact">
        Name: {{ mesContacts.name }} <br />
        Prénom: {{mesContacts.prenom}} <br />
        Email: {{ mesContacts.email }} <br />
        Téléphone: {{mesContacts.telephone}}
      </p>
    </b-list-group>
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

  methods: {},
  mounted () {
    axios
      .get(`http://localhost:3000/getcontacts/${this.getPayload.id}`)
      .then(response => {
        this.mesContacts = response.data
      })
  }
}
</script>

<style>
.affichage {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.listContact {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>
