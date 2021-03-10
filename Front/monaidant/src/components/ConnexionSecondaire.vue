<template>
  <div>
    <h3 v-if="message == 'erreur'">
      L'adresse email ou le password rentré ne sont pas correct !
    </h3>
    <h3 v-if="message == 'vide'">Veuillez remplir tous les champs !</h3>
    <form>
      <p class="h4 text-center mb-4">Connexion Aidée</p>
    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <mdb-input
        label="Adresse email"
        icon="envelope"
        type="email"
        v-model="email"
      />
      <p class="error" v-if="!$v.email.required">Adresse email requise</p>
      <p class="error" v-if="!$v.email.email">
        Votre adresse email n'est pas valide.
      </p>
    </div>

    <div
      class="form-group"
      :class="{ 'form-group--error': $v.password.$error }"
    >
      <mdb-input
        label="Mot de passe"
        icon="lock"
        type="text"
        v-model="password"
      />
      <p class="error" v-if="!$v.password.required">Mot de passe requis</p>
      <p class="error" v-if="!$v.password.minLength">
        Votre mot de passe dois contenir minimum
        {{ $v.password.$params.minLength.min }} caractères.
      </p>
    </div>

    <mdb-btn color="success" v-on:click="postConnect()">Connexion</mdb-btn>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mdbInput, mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbInput,
    mdbBtn
  },
  name: 'ConnexionSecondaire',
  data () {
    return {
      email: '',
      password: '',
      message: ''
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },

  methods: {
    postConnect () {
      if (this.email === '' || this.password === '') this.message = 'vide'
      else {
        axios
          .post('http://localhost:3000/sign-in_aider', {
            email: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response)
            this.email = ''
            this.password = ''
            this.$store.dispatch('recupTokenSecondaire', response.data.token)
            this.$router.push('/dashboard')
          })
          .catch(error => {
            this.message = 'erreur'
            console.log(error.response)
          })
      }
    }
  }
}
</script>

<style></style>
