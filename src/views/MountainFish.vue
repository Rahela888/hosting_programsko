<template>
  <div class="mountain_fish">
    <div class="form">
      <h1>Mountain Fish</h1>
      <div class="prve_tri">
        <div class="hover1">
          <span class="hover_tekst">Bullhead</span>
          <img src="@/assets/bullhead.png" alt="bullhead" class="bullhead_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Carp</span>
          <img src="@/assets/carp.png" alt="carp" class="carp_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Chub</span>
          <img src="@/assets/chub.png" alt="chub" class="chub_slk">
        </div>
      </div>
      <div class="druge_tri">
        <div class="hover1">
          <span class="hover_tekst">Perch</span>
          <img src="@/assets/perch.png" alt="perch" class="perch_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Midnight Carp</span>
          <img src="@/assets/midnight.png" alt="midnight" class="midnight_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Lingcod</span>
          <img src="@/assets/lingcod.png" alt="lingcod" class="lingcod_slk">
        </div>
      </div>
      <div class="trece_tri">
        <div class="hover1">
          <span class="hover_tekst">Largemouth Bass</span>
          <img src="@/assets/bass.png" alt="bass" class="bass_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Sturgeon</span>
          <img src="@/assets/sturgeon.png" alt="sturgeon" class="sturgeon_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Legend</span>
          <img src="@/assets/legend.png" alt="legend" class="legend_slk">
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

.mountain_fish {
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