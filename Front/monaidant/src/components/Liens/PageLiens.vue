<template>
  <div class="container-form-liens">
    <p class="explication">
      <strong class="explication"
        >Bienvenue dans page de liens ! <br />
        Vous pouvez y ajouter des liens grâce à l'onglet Ajouter lien <br>
        Cliquez sur l'image pour accéder rapidement à vos sites enregistrés</strong
      >
    </p>
    <div class="about">
      <b-card no-body class="cardLiens">
        <b-tabs pills card>
          <b-tab title="Liste liens" active> <ListeLiens /> </b-tab>
          <b-tab title="Ajouter lien"> <AddLiens /> </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import ListeLiens from './ListeLiens'
import AddLiens from './AddLiens'

export default {
  name: 'PageLiens',
  components: {
    ListeLiens,
    AddLiens
  }
}
</script>
<style>

.explication {
  font-size: 25px;
}

.cardLiens {
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
}
</style>
