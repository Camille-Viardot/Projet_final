<template>
<mdb-footer style="background-color: #aad6ee; color: black;" class="font-small pt-4 mt-4">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Mon aidant ligne</h5>
          <p>Un site qui vous permet de faciliter votre approche d'internet.</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3" style="color: black;">
      <mdb-container fluid>
        &copy; 2021 Copyright: Camille Viardot
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style></style>
