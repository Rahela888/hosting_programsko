<template>
  <div class="ginger_fish">
    <div class="form">
      <h1>Ginger Island Fish</h1>
      <div class="prve_tri">
        <div class="hover1">
          <span class="hover_tekst">Stingray</span>
          <img src="@/assets/stingray.png" alt="stingray" class="stingray_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Super Cucumber</span>
          <img src="@/assets/supercucumber.png" alt="supercucumber" class="supercucumber_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Tuna</span>
          <img src="@/assets/tuna.png" alt="tuna" class="tuna_slk">
        </div>
      </div>
      <div class="druge_tri">
        <div class="hover1">
          <span class="hover_tekst">Tilapia</span>
          <img src="@/assets/tilapia.png" alt="tilapia" class="tilapia_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Pufferfish</span>
          <img src="@/assets/pufferfish.png" alt="pufferfish" class="pufferfish_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Lionfish</span>
          <img src="@/assets/lionfish.png" alt="lionfish" class="lionfish_slk">
        </div>
      </div>
      <div class="trece_tri">
        <div class="hover1">
          <span class="hover_tekst">Octopus</span>
          <img src="@/assets/octopus.png" alt="octopus" class="octopus_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Lava Eel</span>
          <img src="@/assets/lavaeel.png" alt="lavaeel" class="lavaeel_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Blue Discus</span>
          <img src="@/assets/blue.png" alt="blue" class="blue_slk">
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.ginger_fish {
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