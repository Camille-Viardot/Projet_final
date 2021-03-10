<template>
  <div class="container">
    <h3 v-if="message == 'vide'">Veuillez remplir tous les champs !</h3>
    <h3 v-if="message == 'erreur'">Cette adresse existe déjà !</h3>
    <h3 v-else-if="message == 'valide'">
      Bravo, votre contact est maintenant enregistré !
    </h3>
    <form>
      <p class="h4 text-center mb-4">Ajouter un nouveau contact</p>
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
          <mdb-input label="Adresse email" icon="envelope" type="email" v-model="email"/>
        <p class="error" v-if="!$v.email.required">Adresse email requise</p>
        <p class="error" v-if="!$v.email.email">
          Votre adresse email n'est pas valide.
        </p>
      </div>

       <div
          class="form-group"
          :class="{ 'form-group--error': $v.telephone.$error }"
        >
          <mdb-input label="Téléphone" icon="lock" type="text" v-model="telephone"/>
        <p class="error" v-if="!$v.telephone.required">Telephone requis</p>
        <p class="error" v-if="!$v.telephone.minLength">
          Le téléphone dois contenir minimum
          {{ $v.telephone.$params.minLength.min }} chiffres.
        </p>
      </div>

      <mdb-btn color="success" v-on:click="addContact()">
        Ajouter contact
      </mdb-btn>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mdbInput, mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbInput,
    mdbBtn
  },
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
      minLength: minLength(10)
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

<style>
.containerAddContact {
  height: 60em;
}
</style>
