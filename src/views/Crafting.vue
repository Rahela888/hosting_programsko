<template>
  <div class="izrada">
    <div class="form">
      <h1>Check a crafting recipe you 
        want to craft</h1>
      <p><span class="bombe" @click="bombe">Bombs</span></p>
      <div class="slike_bombi">
        <div class="hover1">
          <span class="hover_tekst" >Cherry bomb</span>
          <img src="@/assets/cherry_bomb.png" alt="cherry_bomb" class="cherry_bomb_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Bomb</span>
          <img src="@/assets/bomb.png" alt="bomb" class="bomb_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Mega bomb</span>
          <img src="@/assets/mega_bomb.png" alt="mega_bomb" class="mega_bomb_slk">
        </div>
      </div>

      <p><span class="ograda" @click="ograde">Fences</span></p>
      <div class="slike_ograda">
        <div class="hover1">
          <span class="hover_tekst">Stone fence</span>
          <img src="@/assets/stone_fence.png" alt="stone_fence" class="stone_fence_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Hardwood fence</span>
          <img src="@/assets/hardwood_fence.png" alt="hardwood_fence" class="hardwood_fence_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Wood fence</span>
          <img src="@/assets/wood_fence.png" alt="wood_fence" class="wood_fence_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Gate</span>
          <img src="@/assets/gate.png" alt="gate" class="gate_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Iron fence</span>
          <img src="@/assets/iron_fence.png" alt="iron_fence" class="iron_fence_slk">
        </div>
      </div>

      <p><span class="izrada_hrane" @click="stvari">Artisan Equipment</span></p>
      <div class="slike_izrade">
        <div class="prve_tri_izrade">
          <div class="hover1">
            <span class="hover_tekst">Dehidrator</span>
            <img src="@/assets/dehidrator.png" alt="dehidrator" class="dehidrator_slk">
          </div>
          <div class="hover1">
            <span class="hover_tekst">Fish Smoker</span>
            <img src="@/assets/fish.png" alt="fish" class="fish_slk">
          </div>
          <div class="hover1">
            <span class="hover_tekst">Cask</span>
            <img src="@/assets/cask.png" alt="cask" class="cask_slk">
          </div>
        </div>
        <div class="druge_tri_izrade">
          <div class="hover1">
            <span class="hover_tekst">Oil Maker</span>
            <img src="@/assets/oil.png" alt="oil" class="oil_slk">
          </div>
          <div class="hover1">
            <span class="hover_tekst">Cheese Press</span>
            <img src="@/assets/cheese.png" alt="cheese" class="cheese_slk">
          </div>
          <div class="hover1">
            <span class="hover_tekst">Loom</span>
            <img src="@/assets/Loom.png" alt="Loom" class="Loom_slk">
          </div>
        </div>
        <br>
        <div class="trece_tri_izrade">
          <div class="hover1">
            <span class="hover_tekst">Bee house</span>
            <img src="@/assets/bee.png" alt="bee" class="bee_slk">
          </div>
          <div class="hover1">
            <span class="hover_tekst">Preserves Jar</span>
            <img src="@/assets/jar.png" alt="jar" class="jar_slk">
          </div>
          <div class="hover1">
            <span class="hover_tekst">Mayonese Machine</span>
            <img src="@/assets/mayonese.png" alt="mayonese" class="mayonese_slk">
          </div>
        </div>
      </div>

      <p><span class="voda" @click="prskalice">Sprinklers</span></p>
      <div class="slike_gnojiva">
        <div class="hover1">
          <span class="hover_tekst">Iridium sprinkler</span>
          <img src="@/assets/iridiumsprinkler.png" alt="iridumsprinkler" class="iridumsprinkler_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Quality sprinkler</span>
          <img src="@/assets/qsprinkler.png" alt="qsprinkler" class="qsprinkler_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Sprinkler</span>
          <img src="@/assets/sprinkler.png" alt="sprinkler" class="sprinkler_slk">
        </div>
      </div>

      <p><span class="gnojivo" @click="gnojivo">Fertilizer</span></p>
      <div class="slike_gnojiva">
        <div class="hover1">
          <span class="hover_tekst">Quality Fertilizer</span>
          <img src="@/assets/quality_gro.png" alt="quality_gro" class="quality_gro_slk" >
        </div>
        <div class="hover1">
          <span class="hover_tekst">Speed-Gro</span>
          <img src="@/assets/speed_gro.png" alt="speed_gro" class="speed_gro_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Basic Fertilizer</span>
          <img src="@/assets/basic_gro.png" alt="basic_gro" class="basic_gro_slk">
        </div>
        <div class="hover1">
          <span class="hover_tekst">Deluxe Fertilizer</span>
          <img src="@/assets/deluxe_gro.png" alt="deluxe_gro" class="deluxe_gro_slk">
        </div>
      </div>  
    </div>
  </div>
</template>


<style scoped>  
.izrada{

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

.form{
background-color:#FFAB56;   
border-radius: 20px;
padding: 100px;
width: 500px;
margin:auto ;
margin-bottom:50px;
margin-top:50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
font-family: Press Start 2P, sans-serif;
color: #974805;
text-align: center;

}
h1{
  font-size:40px;
    color:#80461B;
    text-align: center;
    font-family: Press Start 2P, sans-serif;
    margin-top:25px;
    position: relative;
    top:-45px;
}

.bombe, .ograda, .izrada_hrane, .gnojivo, .voda {
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
    letter-spacing: 6px;
    position:relative;
    top:-30px;
    cursor:pointer;
  
}

.prve_tri_izrade, .druge_tri_izrade, .trece_tri_izrade {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:75px;
  display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:75px;

}

.slike_bombi, .slike_ograda, .slike_izrade, .slike_gnojiva {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    position:relative;
    top:-20px;
}

.slike_gnojiva {

gap:50px;

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


.bombe:active,
.izrada_hrane:active,
.ograda:active,
.voda:active,
.gnojivo:active {
  background-color: #644210;
  color: #fff;
}

</style>


<script>
export default {
  methods: {
    bombe() {
      this.$router.push('/Bombs');
    },
    ograde() {
      this.$router.push('/Fences');
    },
    stvari() {
      this.$router.push('/ArtisanEquipment');
    },
    gnojivo() {
      this.$router.push('/Fertilizer');
    },
    prskalice() {
      this.$router.push('/Sprinkles');
    }

}
}
</script>