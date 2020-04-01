<template>
<div class="container">
	<div class="row">
        
        
       <div class="col-md-11 ">

<div class="card ">
  <div class="card-heading text-white bg-primary">  <h4>Profile</h4></div>
   <div class="card-body">
       
    <div class="box box-info">
        
        <div class="box-body">
           <div class="col-sm-">
                     <div  align="center"> <img alt="User Pic" src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Pale' id="profile-image1" class="rounded-circle img-responsive"> 
                     </div>
            </div>
            <div class="col--1 ">
            <h4 style="color:#00b1b1;">Brice Lasagne</h4>
              <span><p>Developpeur/Designer</p></span>            
            </div>
            <div class="clearfix"></div>
            <hr style="margin:6px 0 9px 0;">
    
              
<div class="  col-12 tital" >Name:</div><div class="col order-0 tital">Brice</div>

  <div class="clearfix bot-border"></div>

<div class="col-12 tital " >Last Name:</div><div class="col order-12"> Lasagne</div>

  <div class="clearfix bot-border"></div>

<div class="col-12 tital " >Joined:</div><div class="col order-12">15 mars 2017</div>

  <div class="clearfix bot-border"></div>

<div class="col-12 tital " >Last connection:</div><div class="col order-12">31 mars 2020</div>

            </div>
          </div>      
        </div> 
     </div><br>
         <button href='#'  type="button" class="btn btn-outline-primary">Edit</button><br>
   </div> 
	</div><br>

      
    <div class="card-heading text-white bg-primary col-md-11 ">  <h4 >Tasks</h4></div>

<div class="table-responsive col-md-11">
  <table class="table ">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Create:</th>
      <th scope="col">End date:</th>
      <th scope="col">Priority</th>
      <th scope="col">Archive</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Feuille impots</td>
      <td>31/03/2020</td>
      <td>25/04/2020</td>
      <td>Haute</td>
      <td class="align-middle" style="text-align: center">
          <button type="button" class="btn btn-outline-info btn-sm m-0 ">Archive</button></td>
    <tr>
      <th scope="row">2</th>
      <td>Rendre CRA</td>
      <td>20/04/2020</td>
      <td>30/04/2020</td>
      <td>Basse</td>
       <td class="align-middle" style="text-align: center">
          <button type="button" class="btn btn-outline-info btn-sm m-0 waves-effect">Archive</button></td>
    </tr>
  </tbody>
  </table>
</div>

  <div class="clearfix"></div>
<div class="bot-border"></div>



</div>

</template>

<style>
#profile-image1 {
    cursor: pointer;
    
     width: 110px;
    height: 110px;
	border:2px solid #03b1ce ;}
	.tital{ font-size:16px; font-weight:500;}
	 .bot-border{ border-bottom:2px #f8f8f8 solid;  margin:7px 0  5px 0}
</style>