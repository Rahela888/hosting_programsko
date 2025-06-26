<template>
  <div class="emily_opis">
    <div class="form">
      <h1>Wizard</h1>
      <div class="uz_sliku">
        <div class="slika_emily_wrap">
          <img
            src="@/assets/wizard.png"
            class="slika_emily"
            alt="Wizard"
          />
        </div>
        <div class="emily_tekst">
          <p>Birthday: Winter 17</p>
          <p>Lives in: Cindersap Forest</p>
          <p>Address: Wizard's Tower</p>
        </div>
      </div>
      <div class="pokloni">
        <h2>Gifts</h2>
        <h3>Love</h3>
        <div class="slike">
          <div class="prikaz">
            <span class="prikaz_tekst">Purple Mushroom</span>
            <img src="@/assets/ljubicasta.png">
          </div>
          <div class="prikaz">
            <span class="prikaz_tekst">Solar Essence</span>
            <img src="@/assets/solar_essence.png">
          </div>
          <div class="prikaz">
            <span class="prikaz_tekst">Super Cucumber</span>
            <img src="@/assets/supercucumber.png">
          </div>
        </div>
        <h3>Like</h3>
        <div class="slike">
          <div class="prikaz">
            <span class="prikaz_tekst">Quartz</span>
            <img src="@/assets/quartz.png">
          </div>
          <div class="prikaz">
            <span class="prikaz_tekst">Iridium bar</span>
            <img src="@/assets/iridiumbar.png">
          </div>
        </div>
        <h3>Dislike</h3>
        <div class="slike">
          <div class="prikaz">
            <span class="prikaz_tekst">Clay</span>
            <img src="@/assets/clay.png">
          </div>
          <div class="prikaz">
            <span class="prikaz_tekst">grape</span>
            <img src="@/assets/grape.png">
          </div>
        </div>
      </div>
      <div class="veze">
        <h2>Relationship</h2>
        <p>The Wizard, also known as M. Rasmodius, is a villager who lives in the Wizard's Tower to the far west of Cindersap Forest.</p>
      </div>
    </div>
  </div>
</template>



<style scoped>
.emily_opis {
  background-image: url('@/assets/pozadina_svega.png');
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
  font-weight: bold;
}
.form {
  background-color: #FFAB56;
  border-radius: 20px;
  padding: 40px 50px;
  width: 500px;
  margin-top: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #974805;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin-bottom:50px;
}
h1 {
  font-size: 50px;
  color: #80461B;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  background-color: #CD9148;
  border-radius: 20px;
}
h2 {
  font-size: 35px;
  color: #80461B;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  background-color: #CD9148;
  border-radius: 10px;
}
h3 {
  font-size: 25px;
  color: #80461B;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  background-color: #CD9148;
  border-radius: 20px;
}
.uz_sliku {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 36px;
  width: 100%;
}

.slika_emily {
  width: 120px;
  height: auto;
  border-radius: 12px;
  background: #fff;
  border: 2px solid #b0a1ff;
  transition: width 0.2s;
}

.tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 15px;
  white-space: nowrap;
  z-index: 2;
  pointer-events: none;
  opacity: 0.92;
  box-shadow: 0 2px 8px #0003;
}
.emily_tekst {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 2.2;
  flex: 1;
}
.emily_tekst p {
  margin: 0 0 8px 0;
  text-align: center;
}
.emily_tekst p:last-child {
  margin-bottom: 0;
}
.pokloni {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}
.slike {
  display: flex;
  flex-direction: row;
  gap: 28px;
  margin-bottom: 18px;
  justify-content: center;
}


.prikaz{
    position:relative;
display:inline-block;
}

.prikaz_tekst{
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

.prikaz:hover .prikaz_tekst{
visibility: visible;
  opacity: 1;
}

.link a{

  color: #562B00;       
  text-decoration: underline;

}
</style>