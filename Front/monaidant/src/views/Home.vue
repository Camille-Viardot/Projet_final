<template>
  <div class="containerAccueil">
    <mdb-jumbotron fluid class="mb-5" style="background-color: #aad6ee;">
      <mdb-container>
        <h2 class="display-3">Mon Aidant Ligne</h2>
        <p class="lead">
          Bienvenue sur Mon Aidant Ligne
        </p>
      </mdb-container> </mdb-jumbotron
    >
    <FormulaireAccueil />
  </div>
</template>

<script>
import FormulaireAccueil from '../components/FormulaireAccueil'
import { mdbJumbotron, mdbContainer } from 'mdbvue'

export default {
  name: 'Home',
  components: {
    FormulaireAccueil,

    mdbJumbotron,
    mdbContainer
  }
}
</script>

<style>
.containerAccueil {
  background-color: rgb(183, 206, 235);
}

</style>
