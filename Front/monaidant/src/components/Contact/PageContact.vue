<template>
  <div>
    <p class="explication">
      <strong>
        Bienvenue dans votre répertoire ! <br />
        Vous pouvez y ajouter vos contacts grâce à l'onglet Ajouter contact
      </strong>
    </p>
    <div>
      <b-card no-body class="containerTab">
        <b-tabs pills card>
          <b-tab title="Liste contact" active> <ListeContact /> </b-tab>
          <b-tab title="Ajouter contact"> <AddContact /> </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import ListeContact from './ListeContact'
import AddContact from './AddContact'

export default {
  name: 'PageContact',
  components: {
    ListeContact,
    AddContact
  }
}
</script>
<style>
.containerTab {
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
}
</style>
