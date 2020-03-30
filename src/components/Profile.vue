<template>
        <div class="container">

 <form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
        <div >
            Veillez entrez votre Prénom.
           </div>
      <label >Prénom</label>
      <input type="text" placeholder="Prénom" value="" required>
    </div>
    <div class="col-md-4 mb-3">
        <div>
            Veuillez entrez votre nom.
        </div>
      <label>Nom</label>
      <input type="text" placeholder="Nom" value="" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
        <div>
            Veuillez saissir votre ville.
          </div>
      <label >Ville</label>
      <input type="text" placeholder="Ville" required>
    </div>
    <div class="col-md-3 mb-3">
        <div>
            Veuillez saissir votre Pays.
        </div>
      <label >Pays</label>
      <input type="text" placeholder="Pays" required>
    <div class="col-md-3 mb-3">
    <div>
            Veuillez saissir votre Code Postal.       
    </div>
      <label>Code Postal</label>
      <input type="text" placeholder="Code Postal" required>
    </div>

  </div>
  <button class="btn btn-primary" type="submit">Submit </button>
</form>
   </div> <!-- /container -->
</template>

<style scoped>

</style>