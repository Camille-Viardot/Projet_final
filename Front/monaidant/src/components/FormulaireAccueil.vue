<template>
  <div class="container-form">
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Inscription" active> <Enregistrement /> </b-tab>
        <b-tab title="Connexion"> <Connexion /> </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Enregistrement from './Enregistrement'
import Connexion from './Connexion'

export default {
  name: 'FormulaireAccueil',
  components: {
    Enregistrement,
    Connexion
  }
}
</script>

<style>
.container-form {
  width: 60em;
  max-width: 75%;
  margin: auto;
}
.error {
  display: block;
  color: Red;
  text-shadow: black 0.5px 0px;
}

.leInput {
  font-family: 'Lato', sans-serif;
  font-size: 25px;
  color: black;
  line-height: 2.375rem;
  min-height: 2.375rem;
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  background: #fff;
  padding: 0 0.8125rem;
  width: 40%;
  transition: border 0.1s ease;
  box-sizing: border-box;
}

label {
  font-size: 2em;
}

.buttonInscription {
  font-size: 20px;
}

</style>
