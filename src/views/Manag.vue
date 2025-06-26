<template>
<div class ="manage">
<div class="form">
    <h1>Choose what to manage</h1>
    <br/>
<div class="chest" @click="na_chest">
    <p><span class="kovceg" >Chest</span></p> <img src="@/assets/Chest-removebg-preview.png" alt="c_image" class="c_image">
    
</div>
<br/>
<div class="npc" @click="na_npc"> 
     <p><span class="robin">Npc and relationships</span></p> <img src="@/assets/ljudi_manage.png" alt="c_image" class="c_image">
</div>

<br/>

<div class="quest" @click="na_quests">
     <p><span class="aktivni">Active quests</span></p> <img src="@/assets/speach.png" alt="c_image" class="c_image">
</div>

<br/>

<div class = "crafting" @click="na_crafting">
     <p><span class="izrada">Crafting</span></p> <img src="@/assets/pikeks.png" alt="c_image" class="c_image">
</div>

<br/>

<div class="cooking" @click="na_cooking">
     <p><span class="kuhanje" >Cooking</span></p> <img src="@/assets/pink_cake.png" alt="c_image" class="c_image">
</div>

<br/>

<div class="fish" @click="na_fishing">
     <p><span class="riba">Fishing</span></p> <img src="@/assets/ribica.png" alt="c_image" class="c_image">
</div>
</div>
</div>
</template>


<style>
html {
  scroll-behavior: smooth;
}
</style>


<style scoped>
.manage{
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


h1{
    font-size:40px;
    color:#80461B;
    text-align: center;
    font-family: Press Start 2P, sans-serif;
}

.form{
  background-color:#FFAB56;
  border-radius: 20px;
  padding: 100px;
  width: 500px;
  margin:auto ;
  margin-bottom:50px;
  margin-top:50px;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}


.chest {
  background-color: #CD9148;
  width: 450px;
  height: 120px;
  display:flex;
 align-items: center;                     
  border-radius: 20px;
  font-size: 32px;
  color: black;
  box-sizing: border-box;
  position:relative;
  padding-top: 10px;
    cursor:pointer;
  
  
}

.kovceg{
  position: absolute;
  right: 0;
  left:0;
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 3px;
  bottom:27px; 
  font-weight: bold;
  color:black;
  
}
 



.quest{

  background-color: #CD9148;
  width: 450px;
  height: 120px;
  display:flex;
 align-items: center;                     
  border-radius: 20px;
  font-size: 32px;
  color: black;
  box-sizing: border-box;
  position:relative;
  padding-top: 10px;
  cursor:pointer;}

.aktivni{
  position: absolute;
  right: 0;
  left:0;
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 3px;
  bottom:27px; 
  font-weight: bold;
  color:black;
   
}


.crafting{

  background-color: #CD9148;
  width: 450px;
  height: 120px;
  display:flex;
 align-items: center;                     
  border-radius: 20px;
  font-size: 32px;
  color: black;
  box-sizing: border-box;
  position:relative;
  padding-top: 10px;
  cursor:pointer;
}

.izrada{
  position: absolute;
  right: 0;
  left:0;
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 3px;
  bottom:27px; 
  font-weight: bold;
  color:black;
   
}



.cooking{

  background-color: #CD9148;
  width: 450px;
  height: 120px;
  display:flex;
 align-items: center;                     
  border-radius: 20px;
  font-size: 32px;
  color: black;
  box-sizing: border-box;
  position:relative;
  padding-top: 10px;
   cursor:pointer;
}

.kuhanje{
  position: absolute;
  right: 0;
  left:0;
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 3px;
  bottom:27px; 
  font-weight: bold;
  color:black;
}



.fish{

  background-color: #CD9148;
  width: 450px;
  height: 120px;
  display:flex;
 align-items: center;                     
  border-radius: 20px;
  font-size: 32px;
  color: black;
  box-sizing: border-box;
  position:relative;
  padding-top: 10px;
   cursor:pointer;
}

.riba{
  position: absolute;
  right: 0;
  left:0;
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 3px;
  bottom:27px; 
  font-weight: bold;
  color:black;
  
}

.npc{
  background-color: #CD9148;
  width: 450px;
  height: 120px;
  display:flex;
 align-items: center;                     
  border-radius: 20px;
  font-size: 32px;
  color: black;
  box-sizing: border-box;
  position:relative;
  padding-top: 10px;
   cursor:pointer;

}

.robin{
  position: absolute;
  right: 0;
  left:0;
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 1px;
  bottom:27px; 
  font-weight: bold;
  color:black;
   
}

.c_image {
  width: 40px;
  height: 70px;
  margin-left:15px;
 

}


.chest:active,
.npc:active,
.fish:active,
.crafting:active,
.quest:active,
.cooking:active {
  background-color: #644210;
  color: #fff;
}


</style>


<script>
export default {
  methods: {
    na_chest() {
      this.$router.push('/Chest');
    },
    na_fishing() {
      this.$router.push('/Fishing');
    },
    na_npc() {
      this.$router.push('/NpcAndRelationship');
    },
    na_cooking() {
      this.$router.push('/Cooking');
    },
    na_crafting() {
      this.$router.push('/Crafting');
    },
    na_quests() {
      this.$router.push('/Quest');
    }

}
}
</script>