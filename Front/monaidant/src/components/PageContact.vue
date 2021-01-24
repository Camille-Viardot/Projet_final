<template>
  <div>
      <Deconnexion />
    <div class="about">
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Liste contact" active> <ListeContact /> </b-tab>
          <b-tab title="Ajouter contact"> <AddContact /> </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import ListeContact from '../components/ListeContact'
import AddContact from '../components/AddContact'
import Deconnexion from '../components/Deconnexion'

export default {
  name: 'PageContact',
  components: {
    ListeContact,
    AddContact,
    Deconnexion
  }
}
</script>
