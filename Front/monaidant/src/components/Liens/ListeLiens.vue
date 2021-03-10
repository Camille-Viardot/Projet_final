<template>
  <div class="contenu">
    <div class="containerCard">
      <b-list-group
        v-for="mesLiens in mesLiens"
        :key="mesLiens.id_user || mesLiens.user_affiliate"
      >
        <ul class="listLiens">
          <li><strong>Nom</strong>: {{ mesLiens.nom }}</li>
          <li><a v-bind:href="mesLiens.lien" target="_blank"
            ><img :src="mesLiens.image" class="imageLien"
          /></a></li>

          <button
            type="button"
            class="btn btn-danger"
            v-on:click="deleteLien(mesLiens.id_lien)"
          >
            Supprimer
          </button>
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
      mesLiens: '',
      myPayload: ''
    }
  },
  computed: { ...mapGetters(['getPayload']) },

  methods: {
    deleteLien (id) {
      axios
        .post(`http://localhost:3000/delete-lien/${id}`)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  mounted () {
    axios
      .get(
        `http://localhost:3000/getLiens/${this.getPayload.id_user ||
          this.getPayload.user_affiliate}`
      )
      .then(response => {
        this.mesLiens = response.data
      })
  }
}
</script>

<style>
.affichageLiens {
  display: flex;
  flex-wrap: wrap;
  width: 50em;
}

.listLiens {
  border: 1px solid black;
  padding: 15px 15px 15px 35px;
  margin: 10px;
  text-align: left;
  font-size: 25px;
}

.imageLien {
  max-width: 200px;
  max-height: 200px;
}
</style>
