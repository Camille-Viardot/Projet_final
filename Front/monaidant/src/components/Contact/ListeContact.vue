<template
  ><div>
    <div class="containerCard">
      <mdb-card
        class="listContact"
        v-for="mesContacts in mesContacts"
        :key="mesContacts.id_user || mesContacts.user_affiliate"
      >
        <div>
          <mdb-card-body>
            <mdb-card-title>
              <strong> {{ mesContacts.nom }} {{ mesContacts.prenom }} </strong>
            </mdb-card-title>
            <mdb-card-text>
              <ul>
                <li><strong> Email </strong>: {{ mesContacts.email }}</li>
                <li>
                  <strong> Téléphone </strong>: {{ mesContacts.telephone }}
                </li>
              </ul>
            </mdb-card-text>
            <mdb-btn
              color="danger"
              v-on:click="deleteContact(mesContacts.id_contact)"
            >
              Supprimer
            </mdb-btn>
          </mdb-card-body>
        </div>
      </mdb-card>
    </div>

    <button type="button" class="btn btn-warning" v-on:click="pageUpdate()">
      Modifier contact
    </button>
    <br />
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { mdbCard, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  },
  data () {
    return {
      mesContacts: '',
      myPayload: ''
    }
  },
  computed: { ...mapGetters(['getPayload']) },

  methods: {
    deleteContact (id) {
      axios
        .post(`http://localhost:3000/delete-contact/${id}`)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    pageUpdate () {
      this.$router.push('/modifiercontact')
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
.containerCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
}
</style>
