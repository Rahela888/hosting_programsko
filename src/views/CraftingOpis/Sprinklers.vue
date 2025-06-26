<template>
<div class=sprinklers>

<div class=form>
<h2>Sprinkler</h2>
<p>1 copper bar</p>
<p>1 iron bar</p>
 <h2>Quality Sprinkler</h2>
<p>1 gold bar</p>
<p>1 iron bar</p>
<p>1 Refined Quartz</p>
<h2>Iridium Sprinkler</h2>
<p>1 gold bar</p>
<p>1 iridium bar</p>
<p>1 battery pack</p>

</div>


</div>


</template>


<style scoped>  


.sprinklers {
   background-image:url('@/assets/pozadina_svega.png');
background-size: cover;
background-position: center;
vertical-align: 100vh;
height: 100%;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-repeat: repeat-x;
}

.form {
  background-color:#FFAB56;
  border-radius: 20px;
  padding: 100px;
  width: 500px;
  margin:auto ;
  margin-bottom:50px;
  margin-top:50px;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    
}

h2{

margin-bottom:12px;
   font-size: 30px;
    color: black;
    font-family: Press Start 2P, sans-serif;
    font-weight: bold;
    margin-top: 20px;
    background: #CD9148;
    padding: 10px;
    width:500px;
    border-radius: 20px;
    align-content: center;
    display:inline-block;
    row-gap: 55px;
    position:relative;

}



p{
 font-family: Press Start 2P, sans-serif;
 font-size: 20px;
    color: #562B00;
    text-align: center;
   position:relative;
  font-weight:bold;

}




</style>