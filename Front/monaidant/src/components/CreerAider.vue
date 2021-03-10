<template>
  <div class="containerCreaAider">
    <h3 v-if="message == 'vide'">Veuillez remplir tous les champs !</h3>
    <h3 v-if="message == 'erreur'">Cette adresse existe déjà !</h3>
    <h3 v-else-if="message == 'valide'">
      Bravo, nouvelle utilisateur créé !
    </h3>
    <form>
      <p class="h4 text-center mb-4">Créer un compte utilisateur</p>
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
          :class="{ 'form-group--error': $v.prenom.$error }"
        >
          <mdb-input label="Prénom" icon="user" type="text" v-model="prenom" />
          <p class="error" v-if="!$v.prenom.required">Prénom requis</p>
          <p class="error" v-if="!$v.prenom.minLength">
            Votre Prénom doit contenir minimum
            {{ $v.prenom.$params.minLength.min }} caractères.
          </p>
        </div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.email.$error }"
        >
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
      </div>
      <div class="text-center">
        <mdb-btn color="success" v-on:click="postUsers()">S'inscrire</mdb-btn>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import { mdbInput, mdbBtn } from 'mdbvue'

export default {
  components: { mdbInput, mdbBtn },
  name: 'CreerAider',
  computed: { ...mapGetters(['getPayload']) },

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
          .post('http://localhost:3000/sign-up_aider', {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            password: this.password,
            user_affiliate: this.getPayload.id_user
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
.containerCreaAider {
  margin: 15px 15px 15px 15px;
  padding: 15px 15px 15px 15px;
  border: black solid 1px;
  max-width: 40%;
  margin-left: auto;
  margin-right: auto;
}
</style>
