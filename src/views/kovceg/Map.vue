<template>
  <div class="map">
    <div class="form">
      <h1>Mark the location of the chest</h1>
      <img src="@/assets/mapa_stardew.png" alt="mapa_stardew" class="mapa" />

      
      <img
        :src="selectedLocation === 'desert' ? kvacicaImg : kockicaImg"
        alt="desert"
        class="desert"
        @click="selectLocation('desert')"
        :class="{ active: selectedLocation === 'desert' }"
        style="cursor:pointer;"/>
      <img
        :src="selectedLocation === 'mine' ? kvacicaImg : kockicaImg"
        alt="mine"
        class="mine"
        @click="selectLocation('mine')"
        :class="{ active: selectedLocation === 'mine' }"
        style="cursor:pointer;"/>
      <img
        :src="selectedLocation === 'village' ? kvacicaImg : kockicaImg"
        alt="village"
        class="village"
        @click="selectLocation('village')"
        :class="{ active: selectedLocation === 'village' }"
        style="cursor:pointer;"
      />

      <button
        @click="potvrdiLokaciju"
        :disabled="!selectedLocation"
        class="potvrdi-btn">Confirm
      </button>
    </div>
  </div>
</template>

<script>
import kvacicaImg from '@/assets/kvacica.png';
import kockicaImg from '@/assets/kockica.png';

export default {
  data() {
    return {
      selectedLocation: null,
      kvacicaImg,
      kockicaImg
    }
  },
  methods: {
    selectLocation(location) {
      this.selectedLocation = location;
    },
    potvrdiLokaciju() {
      if (this.selectedLocation) {
        
        const chestData = JSON.parse(localStorage.getItem('chestData')) || {};
        
        
        const newChest = {
          location: this.selectedLocation,
          food: { ...chestData.food },       
          gems: { ...chestData.gems },       
          fish: { ...chestData.fish },
          fertilizer: { ...chestData.fertilizer }
        };
        
        
        const chests = JSON.parse(localStorage.getItem('chests')) || [];
        chests.push(newChest);
        localStorage.setItem('chests', JSON.stringify(chests));
        this.$router.push('/chests');
      }
    }
  }
}
</script>


<style scoped>
.pustinja {
  position: relative;
  top: -640px;
  right: -300px;
  width: 40px;
  height: 40px;
  transition: filter 0.2s;
}
.mine {
  position: relative;
  top: -600px;
  right: -750px;
  width: 40px;
  height: 40px;
  transition: filter 0.2s;
}
.selo {
  position: relative;
  top: -450px;
  right: -400px;
  width: 40px;
  height: 40px;
  transition: filter 0.2s;
}
.pustinja.active,
.mine.active,
.selo.active {
  filter: drop-shadow(0 0 10px #f9b767);
}
.map {
  background-image: url('@/assets/pozadina_svega.png');
  background-size: cover;
  background-position: center;
  vertical-align: 100vh;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-repeat: repeat-y;
}
.mapa {
  width: 900px;
  height: auto;
  display: block;
  margin: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  position: relative;
  right: -270px;
  top: -30px;
}
h1 {
  background-color: #f9b767;
  width: 450px;
  height: 70px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  font-size: 32px;
  color: rgb(109, 82, 0);
  box-sizing: border-box;
  position: relative;
  padding-top: 10px;
  right: -550px;
}
.potvrdi-btn {
  margin-top: 60px;
  margin-left: 350px;
  padding: 14px 38px;
  font-size: 20px;
  background: #f9b767;
  color: rgb(109, 82, 0);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: background 0.2s, color 0.2s;
  position: relative;
  top:-100px;
}
.potvrdi-btn:disabled {
  background: #eee;
  color: #aaa;
  cursor: not-allowed;
}
</style>
