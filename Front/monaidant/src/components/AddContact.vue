<template>
  <div class="container">
    <h3 v-if="message == 'vide'">Veuillez remplir tous les champs !</h3>
    <h3 v-if="message == 'erreur'">Cette adresse existe déjà !</h3>
    <h3 v-else-if="message == 'valide'">
      Bravo, vous êtes maintenant enregistré !
    </h3>

    <div class="form-group" :class="{ 'form-group--error': $v.nom.$error }">
      <label for="text-nom">Nom</label><br />
      <input v-model="nom" class="leInput" placeholder="Nom" />
      <p class="error" v-if="!$v.nom.required">Nom requis</p>
      <p class="error" v-if="!$v.nom.minLength">
        Votre Nom doit contenir minimum
        {{ $v.nom.$params.minLength.min }} caractères.
      </p>
    </div>
    <br />

    <div class="form-group" :class="{ 'form-group--error': $v.prenom.$error }">
      <label for="text-prenom">Prénom</label><br />
      <input v-model="prenom" class="leInput" placeholder="Prénom" />
      <p class="error" v-if="!$v.prenom.required">Prénom requis</p>
      <p class="error" v-if="!$v.prenom.minLength">
        Votre Prénom doit contenir minimum
        {{ $v.prenom.$params.minLength.min }} caractères.
      </p>
    </div>
    <br />

    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <label for="text-email">Email</label><br />
      <input v-model="email" class="leInput" placeholder=" Adresse email" />
      <p class="error" v-if="!$v.email.required">Adresse email requise</p>
      <p class="error" v-if="!$v.email.email">
        Votre adresse email n'est pas valide.
      </p>
    </div>
    <br />

    <div
      class="form-group"
      :class="{ 'form-group--error': $v.telephone.$error }"
    >
      <label for="text-email">Telephone</label><br />
      <input v-model="telephone" class="leInput" placeholder="Telephone" />
      <p class="error" v-if="!$v.telephone.required">Telephone requis</p>
      <p class="error" v-if="!$v.telephone.minLength">
        Le téléphone dois contenir minimum
        {{ $v.telephone.$params.minLength.min }} chiffres.
      </p>
    </div>

    <b-button size="lg" variant="success" v-on:click="addContact()"
      >S'incrire</b-button
    >
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      message: ''
    }
  },
  validations: {
    nom: {
      required,
      minLength: minLength(2)
    },
    prenom: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    telephone: {
      required,
      minLength: minLength(4)
    }
  },

  computed: { ...mapGetters(['getPayload']) },

  methods: {
    addContact () {
      if (
        this.nom === '' ||
        this.prenom === '' ||
        this.email === '' ||
        this.telephone === ''
      ) {
        this.message = 'vide'
      } else {
        const newContact = {
          nom: this.nom,
          prenom: this.prenom,
          telephone: this.telephone,
          email: this.email,
          user_affiliate_user:
            this.getPayload.id_user || this.getPayload.id_aider,
          user_affiliate_aider:
            this.getPayload.id_user || this.getPayload.id_aider
        }
        console.log(newContact)
        axios
          .post('http://localhost:3000/new-contact', newContact)
          .then(response => {
            console.log(response)
            this.nom = ''
            this.prenom = ''
            this.email = ''
            this.telephone = ''
            this.message = 'valide'
            this.$store.state.allContacts.push(newContact)
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
