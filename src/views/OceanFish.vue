<template>
    <div class="ocean_fish">
        <div class="form">
<h1>Ocean Fish</h1>
<div class="prve_tri">
  <div class="hover1">
    <span class="hover_tekst">Albacore</span>
 <img src="@/assets/albacore.png" alt="albacore" class="albacore_slk">
  </div>

  <div class="hover1">
 <span class="hover_tekst">Eel</span>
<img src="@/assets/eel.png" alt="eel" class="eel_slk">
</div>

<div class="hover1">
<span class="hover_tekst">Seacucumber</span>
<img src="@/assets/seacucumber.png" alt="seacucumber" class="seacucumber_slk">
</div>
</div>
<div class="druge_tri">
  <div class="hover1">
    <span class="hover_tekst">Flounder</span>
    <img src="@/assets/flounder.png" alt="flounder" class="flounder_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Tuna</span>
    <img src="@/assets/tuna.png" alt="tuna" class="tuna_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Sardine</span>
    <img src="@/assets/sardine.png" alt="sardine" class="sardine_slk">
  </div>
</div>

<div class="trece_tri">
  <div class="hover1">
    <span class="hover_tekst">Herring</span>
    <img src="@/assets/herring.png" alt="herring" class="herring_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Squid</span>
    <img src="@/assets/squid.png" alt="squid" class="squid_slk">
  </div>

  <div class="hover1">
    <span class="hover_tekst">Crimsonfish</span>
    <img src="@/assets/crimsonfish.png" alt="crimsonfish" class="crimsonfish_slk">
  </div>
</div>


    


</div>
</div>

    

</template>


<style scoped>

.ocean_fish {
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