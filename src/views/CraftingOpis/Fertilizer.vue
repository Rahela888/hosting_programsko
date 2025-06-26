<template>
<div class=gnojivo>

<div class=form>
<h2>Basic Fertilizer</h2>
<p>sap</p>
 <h2>Quality Fertilizer</h2>
<p>4 sap</p>
<p>any fish</p>
<h2>Deluxe Fertilizer</h2>
<p>1 iridium bar</p>
<p>40 sap</p>
<p>1 void essence</p>
<h2>Speed-Gro </h2>
<p>5 moss</p>
<p>1 pine tar</p>



</div>


</div>


</template>


<style scoped>  


.gnojivo {
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