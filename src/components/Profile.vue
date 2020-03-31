<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 ">
        <div class="panel panel-default">
          <div class="panel-heading"><h4>Profil</h4></div>
          <div class="panel-body">
            <div class="box box-info">
              <div class="box-body">
                <div class="col-sm-4">
                  <div align="center"><img alt="User Pic"
                                           src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                                           id="profile-image1" class="img-circle img-responsive">
                  </div>
                </div>
                <div class="col-sm-7">
                  <h4 style="color:#00b1b1;">Brice Lasagne</h4>
                  <span><p>Developpeur/Designer</p></span>
                </div>
                <div class="clearfix"></div>
                <hr style="margin:5px 0 5px 0;">
                <div class="col-sm-4 col-xs-6 tital ">Prénom:</div>
                <div class="col-sm-7 col-xs-6 ">Brice</div>
                <div class="clearfix"></div>
                <div class="bot-border"></div>

                <div class="col-sm-4 col-xs-6 tital ">Nom:</div>
                <div class="col-sm-7"> Lasagne</div>
                <div class="clearfix"></div>
                <div class="bot-border"></div>

                <div class="col-sm-4 col-xs-6 tital ">Date d'inscription:</div>
                <div class="col-sm-7">15 Jun 2017</div>

                <div class="clearfix"></div>
                <div class="bot-border"></div>
                <div class="col-sm-4 col-xs-6 tital ">Derniére connexion le :</div>
                <div class="col-sm-7">11 Jun 1999</div>

                <div class="clearfix"></div>
                <div class="bot-border"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-10 ">
      <div class="panel-heading"><h4>Mes taches</h4></div>
    </div>
    <div class="col-sm-4 col-xs-6 tital ">Nom:</div>
    <div class="col-sm-7">Status</div>
    <div class="clearfix"></div>
    <div class="bot-border"></div>
  </div>
</template>

<script>
</script>

<style>
  input.hidden {
    position: absolute;
    left: -9999px;
  }

  #profile-image1 {
    cursor: pointer;

    width: 100px;
    height: 100px;
    border: 2px solid #03b1ce;
  }

  .tital {
    font-size: 16px;
    font-weight: 500;
  }

  .bot-border {
    border-bottom: 2px #f8f8f8 solid;
    margin: 5px 0 5px 0
  }
</style>
