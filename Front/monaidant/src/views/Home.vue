<template>
  <b-jumbotron>
    <template v-slot:header> Mon Aidant Ligne </template>

    <template v-slot:lead> Bienvenue sur Mon Aidant Ligne. </template>

    <hr class="my-4" />

    <FormulaireAccueil />
  </b-jumbotron>
</template>

<script>
import FormulaireAccueil from '../components/FormulaireAccueil'

export default {
  name: 'Home',
  components: {
    FormulaireAccueil
  }
}
</script>
