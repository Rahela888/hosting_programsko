<template>
    <div class="river_fish">
    <div class="form">
<h1>River Fish</h1>
<div class="prve_tri">
  <div class="hover1">
    <span class="hover_tekst">Angler</span>
 <img src="@/assets/angler.png" alt="angler" class="angler_slk">
  </div>

  <div class="hover1">
 <span class="hover_tekst">Salmon</span>
<img src="@/assets/salmon.png" alt="salmon" class="salmon_slk">
</div>

<div class="hover1">
<span class="hover_tekst">Pike</span>
<img src="@/assets/pike.png" alt="pike" class="pike_slk">
</div>
</div>
<div class="druge_tri">
  <div class="hover1">
    <span class="hover_tekst">Shad</span>
    <img src="@/assets/shad.png" alt="shad" class="shad_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Tiger Trout</span>
    <img src="@/assets/tigertrout.png" alt="tigert" class="tigert_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Rainbow Trout</span>
    <img src="@/assets/rainbowt.png" alt="rainbowt" class="rainbow_slk">
  </div>
</div>

<div class="trece_tri">
  <div class="hover1">
    <span class="hover_tekst">Dorado</span>
    <img src="@/assets/dorado.png" alt="dorado" class="doraro_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Chub</span>
    <img src="@/assets/chub.png" alt="chub" class="chub_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Catfish</span>
    <img src="@/assets/catfish.png" alt="catfish" class="catfish_slk">
  </div>
</div>

</div>
</div>
</template>

<style scoped>

.river_fish {
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