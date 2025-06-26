<template>
<div class="zadaci">
<div class="papirus">
    <h1>Choose the type of quest</h1>
  <h2><span class="help" @click="na_help_zadatke">-Help wanted-</span></h2>
  <h2><span class="story" @click="na_story">-Story quest-</span></h2>
    <h2><span class="special" @click="na_special">-Special orders-</span></h2>
</div>
</div>
</template>



<script>
export default {
  methods: {
    na_help_zadatke() {
      this.$router.push('/help_wanted');
    },
    na_story() {
      this.$router.push('/story_zadaci');
    },
    na_special() {
      this.$router.push('/special_orders');
    }
  }
}
</script>




<style scoped>
.zadaci {
background-image: url('@/assets/pozadina_svega.png');
background-size: cover;
background-position: center;
vertical-align: 100vh;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
min-height: 100vh; 
background-image: url('@/assets/pozadina_svega.png');
background-size: cover;
background-position: center;
vertical-align: 100vh;
height: 100vh;
width: 100vw;
display: flex;
background-repeat: repeat-y;


}

.papirus{
 background-color:#FFAB56;
  border-radius: 30px;
  padding: 330px;
  width: 200px;
  background-position: center;
  margin-bottom:50px;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: Press Start 2P, sans-serif;
  color: #974805;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;  
  margin-left: 250px; 
  margin:0;


}

.help{

background-color:#CD9148;
color:black;
border-radius:20px;
display:inline-block;
padding:20px;
width:450px;
cursor: pointer;

}


.story{
background-color:#CD9148;
color:black;
border-radius:20px;
display:inline-block;
padding:20px;
width:450px;
cursor: pointer;


}


.special{

background-color:#CD9148;
color:black;
border-radius:20px;
display:inline-block;
padding:20px;
width:450px;
cursor: pointer;
 transition: background 0.15s, color 0.15s;

}


.help:active,
.story:active,
.special:active {
  background-color: #644210;
  color: #fff;
}


h1{
    font-size:50px;
    color:#80461B;
    text-align: center;
    font-family: Press Start 2P, sans-serif;
    white-space: nowrap;


}




</style>