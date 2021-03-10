<template>
  <div class="contenu">
    <div class="affichageUpdate">
      <b-list-group
        v-for="mesContact in mesContact"
        :key="mesContact.id_user || mesContact.user_affiliate"
      >
        <ul class="listContactUpdate">
          <!-- <div class="form-group-update"> -->
          <label for="text-nom" class="labelUpdate">Nom :</label>
          <input
            v-model="user.nom"
            class="leInputUpdate"
            :placeholder="mesContact.nom"
          />

          <label for="text-prenom" class="labelUpdate">Prénom :</label>
          <input
            v-model="user.prenom"
            class="leInputUpdate"
            :placeholder="mesContact.prenom"
          />

          <label for="text-email" class="labelUpdate">Email :</label>
          <input
            v-model="user.email"
            class="leInputUpdate"
            :placeholder="mesContact.email"
          />

          <label for="text-telephone" class="labelUpdate">Téléphone :</label>
          <input
            v-model="user.telephone"
            class="leInputUpdate"
            :placeholder="mesContact.telephone"
          />
          <!-- </div> -->
          <b-button
            size="lg"
            variant="warning"
            v-on:click="Update(mesContact.id_contact)"
            >Modifier contact</b-button
          >
        </ul>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      user: {
        nom: '',
        prenom: '',
        email: '',
        telephone: ''
      },
      mesContact: '',
      myPayload: ''
    }
  },
  computed: { ...mapGetters(['getPayload']) },

  methods: {
    Update (id) {
      const updateContact = this.user
      console.log(updateContact)
      for (const key in updateContact) {
        if (updateContact[key] === '') {
          delete updateContact[key]
        }
      }
      if (updateContact) {
        axios
          .put(`http://localhost:3000/modifier-contact/${id}`, updateContact)
          .then(response => {
            console.log(response.data)
            this.user.nom = ''
            this.user.prenom = ''
            this.user.email = ''
            this.user.telephone = ''
          })
          .catch(error => {
            console.log(error.response)
            this.user.nom = ''
            this.user.prenom = ''
            this.user.email = ''
            this.user.telephone = ''
          })
      }
    }
  },

  mounted () {
    axios
      .get(
        `http://localhost:3000/getcontacts/${this.getPayload.id_user ||
          this.getPayload.user_affiliate}`
      )
      .then(response => {
        this.mesContact = response.data
      })
  }
}
</script>

<style>
.affichageUpdate {
  display: flex;
  flex-wrap: wrap;
  border: black solid 1px;
  width: 55em;
  margin: auto;
  margin-bottom: 25px;
  margin-top: 25px;
}

.listContactUpdate {
  border: 1px solid black;
  padding: 15px 15px 15px 35px;
  margin: 10px;
  text-align: left;
  width: 16em;
  font-size: 25px;
}

.container-form-update {
  width: 50em;
  margin: auto;
}

.leInputUpdate {
  font-size: 25px;
  color: black;
  line-height: 2.375rem;
  min-height: 2.375rem;
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  background: #fff;
  padding: 0 0.8125rem;
  width: 60%;
  transition: border 0.1s ease;
  box-sizing: border-box;
}

.labelUpdate {
  font-size: 25px;
  margin-right: 10px;
}

/* .form-group-update {
  width: 50em;
  max-width: 75%;
  margin: auto;
  height: 45em;
} */
</style>
