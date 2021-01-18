<template>
  <div>
    <h3 v-if="message == 'erreur'">
      L'adresse email ou le password rentré ne sont pas correct !
    </h3>
    <h3 v-if="message == 'vide'">Veuillez remplir tous les champs !</h3>

    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <label for="text-email">Email:</label><br />
      <input v-model="email" class="leInput" placeholder="Enter email" />
      <p class="error" v-if="!$v.email.required">Adresse email requise</p>
      <p class="error" v-if="!$v.email.email">
        Votre adresse email n'ai pas valide.
      </p>
    </div>
    <br />

    <div
      class="form-group"
      :class="{ 'form-group--error': $v.password.$error }"
    >
      <label for="text-email">Password</label><br />
      <input
        v-model="password"
        class="leInput"
        placeholder="Enter your password"
      />
      <p class="error" v-if="!$v.password.required">Mot de passe requis</p>
      <p class="error" v-if="!$v.password.minLength">
        Votre mot de passe dois contenir minimum
        {{ $v.password.$params.minLength.min }} caractères.
      </p>
    </div>

    <b-button variant="success" v-on:click="postConnect()">Connexion</b-button>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Connexion',
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
      minLength: minLength(5)
    }
  },

  methods: {
    postConnect () {
      if (this.email === '' || this.password === '') this.message = 'vide'
      else {
        axios
          .post('http://localhost:3000/sign-in', {
            email: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response)
            this.email = ''
            this.password = ''
            this.$store.dispatch('recupToken', response.data.token)
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
