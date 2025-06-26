<template>
  <div class="emily_opis">
    <div class="form">
      <h1>Abigail</h1>
      <div class="uz_sliku">
        <div class="slika_emily_wrap" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
          <img
            :src="emilyMarried ? require('@/assets/abigail_srce.png') : require('@/assets/abigail.png')"
            :class="['slika_emily', { slika_emily_srce: emilyMarried }]"
            @click="toggleEmilySlika"
            alt="Emily"
          />
          <span v-if="showTooltip && !emilyMarried" class="tooltip">click if married</span>
        </div>
        <div class="emily_tekst">
          <p>Birthday: Fall 13</p>
          <p>Lives in: Pelican Town</p>
          <p>Address: Pierre's General Store</p>
        </div>
      </div>
      <div class="pokloni">
        <h2>Gifts</h2> 
        <h3>Love</h3>
        <div class="slike">
              <div class="prikaz">
            <span class="prikaz_tekst">Amethyst</span>
            <img src="@/assets/ametist.png">
          </div>
           <div class="prikaz">
            <span class="prikaz_tekst">Chocolate Cake</span>
            <img src="@/assets/cokoladna.png">
          </div>
           <div class="prikaz">
            <span class="prikaz_tekst">Pufferfish</span>
            <img src="@/assets/pufferfish.png">
          </div>
          <div class="prikaz">
            <span class="prikaz_tekst">Spicy Eel</span>
            <img src="@/assets/spicy_eel.png">
          </div>
       
        
        </div>
        <h3>Like</h3>
        <div class="slike">
          <div class="prikaz">
            <span class="prikaz_tekst">Basilisk Paw</span>
            <img src="@/assets/Basilisk_Paw.png">
          </div>
          <div class="prikaz">
            <span class="prikaz_tekst">Quartz</span>
            <img src="@/assets/quartz.png">
          </div>
        </div>
        <h3>Dislike</h3>
        <div class="slike">
          <div class="prikaz">
            <span class="prikaz_tekst">Sugar</span>
            <img src="@/assets/sugar.png">
          </div>

          <div class="prikaz">
            <span class="prikaz_tekst">Wild Horseradish</span>
            <img src="@/assets/wildhorse.png">
          </div>
          
        </div>
      </div>
      <div class="veze">
        <h2>Relationship</h2>
        <p>Abigail lives with her parents, Pierre and Caroline, in the apartment behind her father's shop. Her mother will comment that she is concerned about Abigail's interests and hobbies.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emilyMarried: false,
      showTooltip: false
    }
  },
  methods: {
    toggleEmilySlika() {
      this.emilyMarried = !this.emilyMarried;
      localStorage.setItem('emilyMarried', this.emilyMarried);
    }
  },
  mounted() {
    const saved = localStorage.getItem('emilyMarried');
    if (saved !== null) {
      this.emilyMarried = saved === 'true';
    }
  }
}
</script>

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
.slika_emily_wrap {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.slika_emily {
  width: 120px;
  height: auto;
  border-radius: 12px;
  background: #fff;
  border: 2px solid #b0a1ff;
  transition: width 0.2s;
}
.slika_emily_srce {
  width: 160px;
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
</style>
