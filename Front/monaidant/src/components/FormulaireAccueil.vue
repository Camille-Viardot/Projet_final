<template>
  <div class="container-form-accueil">
    <b-card no-body>
      <b-tabs
        pills
        card
        style="background-color: #CBF0F6; border: 1px solid #4A91D3"
      >
        <b-tab title="Inscription" active> <Enregistrement /> </b-tab>
        <b-tab title="Connexion "> <Connexion /> </b-tab>
        <b-tab title="Connexion Aidée"> <ConnexionSecondaire /> </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Enregistrement from './Enregistrement'
import Connexion from './Connexion'
import ConnexionSecondaire from './ConnexionSecondaire'

export default {
  name: 'FormulaireAccueil',
  components: {
    Enregistrement,
    Connexion,
    ConnexionSecondaire
  }
}
</script>

<style>
.container-form-accueil {
  width: 50em;
  max-width: 75%;
  margin: auto;
  height: 45em;
}

.error {
  display: block;
  color: Red;
  text-shadow: black 0.5px 0px;
}
</style>
