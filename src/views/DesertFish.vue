<template>
    <div class="desert_fish">
    <div class="form">
<h1>Desert Fish</h1>

  <div class="hover1">
    <span class="hover_tekst">Scorpion Carp</span>
 <img src="@/assets/scorpionc.png" alt="scorpionc" class="scorpion_slk">
 </div>
   <div class="hover1">
    <span class="hover_tekst">Sandfish</span>
 <img src="@/assets/sandfish.png" alt="sandfish" class="sandfish_slk">
  </div>
  </div>
  </div>
  </template>


<style scoped>

.desert_fish {
  background-image: url('@/assets/pozadina_svega.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background-color: #FFAB56;
  border-radius: 20px;
  padding: 50px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

.prve_tri, .druge_tri, .trece_tri, .cetvrte_tri, .pete_tri {
  display: flex;
  justify-content:center;
  margin-bottom: 20px;
  gap:100px;
   width: 40px;
  height: 70px;
 
  
}

h1{
    font-size: 40px;
    color: #80461B;
    text-align: center;
   position:relative;
   top:-25px;
}

.hover1:hover .hover_tekst{

    visibility: visible;
  opacity: 1;
}

.hover1{
    position:relative;
display:inline-block;
}

.hover_tekst{

    visibility: hidden;
  width: 120px;
  background-color: #562B00;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* iznad slike */
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;


}


</style>