<template>
    <div class="fishing">
        <div class="form">
           
        <h1>Choose a fishing spot you want to fish</h1>
        <br/>
        <h2 @click="ocean" class="ok">Ocean fish</h2>
        <h2 @click="river" class="ok">River fish</h2>
        <h2 @click="mountain" class="ok">Mountain fish</h2>
        <h2 @click="desert" class="ok">Desert fish</h2>
        <h2 @click="ginger" class="ok">Ginger island fish</h2>
           
        </div>



    </div>
</template>


<style scoped>  


.fishing {
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

.form {
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

.ok:active
 {
  background-color: #644210;
  color: #fff;
}

h2{

margin-bottom:12px;
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
    row-gap: 55px;
    position:relative;
    cursor:pointer;

}



h1{

 font-size: 40px;
    color: #80461B;
    text-align: center;
   position:relative;
   top:-25px;

}




</style>

<script>
export default {
  methods: {
    river() {
      this.$router.push('/RiverFish');
    },
    mountain() {
      this.$router.push('/MountainFish');
    },
    ocean() {
      this.$router.push('/OceanFish');
    },
    desert() {
      this.$router.push('/DesertFish');
    },
    ginger() {
      this.$router.push('/GingerIsland');
    }

}
}
</script>