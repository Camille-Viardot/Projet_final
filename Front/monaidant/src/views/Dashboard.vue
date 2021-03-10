<template>
  <div class="contentAll">
    <br />
    <h1>Vous pouvez cliquer sur les images pour accéder aux différentes pages</h1>
    <br />
    <div class="contentLogo">
      <div class="phoneBook">
        <h1>Répertoire téléphonique</h1>
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
        <h1>Liens utiles</h1>
        <router-link to="/pageliens"
          ><img src="../assets/Images/image_site2.png"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {}
}
</script>

<style>
.contentAll {
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(183, 206, 235);
}
.contentLogo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 60%;
  padding: 25px;
  border: 2px solid #7cacdf;
  background-color: #aad6ee;
  border-radius: 10px;
}
.phoneBook {
  margin-left: 15px;
  margin-right: 15px;
}

.calendrier {
  margin-left: 15px;
  margin-right: 15px;
}
.lien {
  margin-left: 15px;
  margin-right: 15px;
}

img {
  width: 20em;
  border-radius: 25px;
}
</style>
