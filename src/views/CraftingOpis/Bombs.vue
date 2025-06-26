<template>
<div class=bombs>

<div class=form>
<h2>Cherry bomb</h2>
<p>4 copper ore</p>
<p>1 coal</p>
 <h2>Bomb</h2>
<p>4 iron ore</p>
<p>1 coal</p>
<h2>Mega bomb</h2>
<p>4 gold ore</p>
<p>1 solar essence</p>
<p>1 void essence</p>


</div>


</div>


</template>


<style scoped>  


.bombs {
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