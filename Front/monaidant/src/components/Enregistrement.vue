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
      :class="{ 'form-group--error': $v.password.$error }"
    >
      <label for="text-email">Password</label><br />
      <input v-model="password" class="leInput" placeholder="Mot de passe" />
      <p class="error" v-if="!$v.password.required">Mot de passe requis</p>
      <p class="error" v-if="!$v.password.minLength">
        Votre mot de passe dois contenir minimum
        {{ $v.password.$params.minLength.min }} caractères.
      </p>
    </div>

    <b-button size="lg" variant="success" v-on:click="postUsers()"
      >S'incrire</b-button
    >
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      nom: '',
      prenom: '',
      email: '',
      password: '',
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
    password: {
      required,
      minLength: minLength(4)
    }
  },

  methods: {
    postUsers () {
      if (
        this.nom === '' ||
        this.prenom === '' ||
        this.email === '' ||
        this.password === ''
      ) {
        this.message = 'vide'
      } else {
        axios
          .post('http://localhost:3000/sign-up', {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response)
            this.nom = ''
            this.prenom = ''
            this.email = ''
            this.password = ''
            this.message = 'valide'
          })
          .catch(error => {
            console.log(error)
            this.nom = ''
            this.prenom = ''
            this.email = ''
            this.password = ''
            this.message = 'erreur'
          })
      }
    }
  }
}
</script>

<style>
</style>
