<template>
  <div>
    <Deconnexion />
    <p>Veuillez cliquer sur l'image pour accéder aux diffentes pages</p>
    <div class="content">
      <div class="phoneBook">
        <h1>Repertoire téléphonique</h1>
        <router-link to="/pagecontact"
          ><img src="../assets/Images/phone_book.png"
        /></router-link>
      </div>
      <div class="calendrier">
        <h1>Calendrier</h1>
        <a
          href="https://calendar.google.com/calendar/u/0/r?pli=1"
          target="_blank"
          ><img src="../assets/Images/image_calendrier.png" class="calendrier"
        /></a>
      </div>
      <div class="lien">
        <h1>Liens utile</h1>
        <router-link to="/pagecontact"
          ><img src="../assets/Images/phone_book.png"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Deconnexion from '../components/Deconnexion'
export default {
  name: 'Dashboard',
  components: {
    Deconnexion
  }
}
</script>

<style>
.content {
  display: flex;
  margin: auto;
}
.phoneBook {
  margin: auto;
  flex-wrap: wrap;

}

.calendrier {
  margin: auto;
  flex-wrap: wrap;

}
.lien {
  margin: auto;
  flex-wrap: wrap;

}

img {
  width: 40em;
  border-radius: 25px;
}
</style>
