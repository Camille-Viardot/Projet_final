<template>
  <div class="container">
    <h3 v-if="message == 'vide'">Veuillez remplir tous les champs !</h3>
    <h3 v-if="message == 'erreur'">Cette adresse existe déjà !</h3>
    <h3 v-else-if="message == 'valide'">
      Bravo, vous avez ajouté un nouveau lien !
    </h3>

    <form>
      <p class="h4 text-center mb-4">Inscription</p>
      <div class="grey-text">
        <div class="form-group" :class="{ 'form-group--error': $v.nom.$error }">
          <mdb-input label="Nom" icon="user" type="text" v-model="nom" />
          <p class="error" v-if="!$v.nom.required">Nom requis</p>
          <p class="error" v-if="!$v.nom.minLength">
            Votre Nom doit contenir minimum
            {{ $v.nom.$params.minLength.min }} caractères.
          </p>
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.lien.$error }"
        >
          <mdb-input label="Lien" icon="user" type="text" v-model="lien" />
          <p class="error" v-if="!$v.lien.required">Lien requis</p>
          <p class="error" v-if="!$v.lien.minLength">
            Votre Lien doit contenir minimum
            {{ $v.lien.$params.minLength.min }} caractères.
          </p>
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.image.$error }"
        >
          <mdb-input label="Adresse image" icon="envelope" v-model="image" />
          <p class="error" v-if="!$v.image.required">Image requise</p>
          <p class="error" v-if="!$v.image.minLength">
            Votre photo doit contenir minimum
            {{ $v.image.$params.minLength.min }} caractères.
          </p>
        </div>

        <mdb-btn color="success" v-on:click="addLien()"> Ajouter lien </mdb-btn>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
import { mdbInput, mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbInput,
    mdbBtn
  },
  data () {
    return {
      nom: '',
      lien: '',
      image: '',
      message: ''
    }
  },
  validations: {
    nom: {
      required,
      minLength: minLength(2)
    },
    lien: {
      required,
      minLength: minLength(2)
    },
    image: {
      required,
      minLength: minLength(2)
    }
  },

  computed: { ...mapGetters(['getPayload']) },

  methods: {
    addLien () {
      if (this.nom === '' || this.lien === '' || this.image === '') {
        this.message = 'vide'
      } else {
        const newLien = {
          nom: this.nom,
          lien: this.lien,
          image: this.image,
          user_affiliate_user:
            this.getPayload.id_user || this.getPayload.id_aider,
          user_affiliate_aider:
            this.getPayload.id_user || this.getPayload.id_aider
        }
        console.log(newLien)
        axios
          .post('http://localhost:3000/new-lien', newLien)
          .then(response => {
            console.log(response)
            this.nom = ''
            this.lien = ''
            this.image = ''
            this.message = 'valide'
            this.$store.state.allLiens.push(newLien)
          })
          .catch(error => {
            console.log(error.response)
          })
      }
    }
  }
}
</script>

<style></style>
