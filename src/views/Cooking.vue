<template>
<div class="cooking">
<div class="form">
<h1>Choose recipe you want to read</h1>


<div class="prve_tri">
  <div class="hover1">
    <span class="hover_tekst" >Vegetable Medley</span>
 <img src="@/assets/vegetable.png" alt="vegetable" class="slika" @click="do_vegetable">
  </div>

  <div class="hover1">
 <span class="hover_tekst">Omelet</span>
<img src="@/assets/omlet.png" alt="omlet" class="slika"  @click="do_omlet">
</div>

<div class="hover1">
<span class="hover_tekst">Salad</span>
<img src="@/assets/salad.png" alt="salad" class="slika" @click="do_salad"></div>
</div>

<div class="druge_tri">
   <div class="hover1">
  <span class="hover_tekst">Chocolate Cake</span>
<img src="@/assets/cokoladna.png" alt="cokoladna" class="slika" @click="do_cokoladna">
  </div>
  <div class="hover1">
  <span class="hover_tekst">Cheese Cauliflower</span>
<img src="@/assets/sir_cvjetaca.png" alt="sir_cvjetaca" class="slika" @click="do_kali">
</div>
<div class="hover1">
<span class="hover_tekst">Baked Fish</span>
<img src="@/assets/pecena_riba.png" alt="pecena_riba" class="slika" @click="do_bakedfish">

</div>

</div>

<div class="trece_tri">
  <div class="hover1">
  <span class="hover_tekst">Complete Breakfast</span>
<img src="@/assets/cijeli_dorucak.png" alt="cijeli_dorucak" class="slika" @click="do_dorucka">
  </div>
  <div class="hover1">
<span class="hover_tekst">Pizza</span>
<img src="@/assets/piza.png" alt="piza" class="slika" @click="do_piza">
  </div>
  <div class="hover1">
<span class="hover_tekst">Fish Taco</span>
<img src="@/assets/fish_taco.png" alt="fish_taco" class="slika" @click="do_fishtaco">
</div>
</div>

<div class="cetvrte_tri">
  <div class="hover1">
  <span class="hover_tekst">Hashbrowns</span>
<img src="@/assets/hashbrowns.png" alt="hashbrowns" class="slika" @click="do_hashbrowns">
  </div>
<div class="hover1">
<span class="hover_tekst">Bread</span>
<img src="@/assets/kruh.png" alt="kruh" class="slika" @click="do_bread">
</div>
<div class="hover1">
<span class="hover_tekst">Pink Cake</span>
<img src="@/assets/pink_cake.png" alt="pink_cake" class="slika" @click="do_pinkcake">
</div>
</div>

<div class="pete_tri">
 
  <div class="hover1">
<span class="hover_tekst">Rhubarb Pie</span>
<img src="@/assets/rhubarb_pie.png" alt="rhubarb_pie" class="slika" @click="do_rhubarbpie">
  </div>
<div class="hover1">
<span class="hover_tekst">Spicy eel</span>
<img src="@/assets/spicy_eel.png" alt="spicy_eel" class="slika" @click="do_spicy">
</div>
<div class="hover1">
<span class="hover_tekst">Maki roll</span>
<img src="@/assets/maki_roll.png" alt="maki_roll" class="slika" @click="do_makiroll">
</div>
</div>

</div>
</div>

</template>

<style scoped>

.cooking {
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

.slika{

cursor: pointer;


}

.slika:hover {
  transform: scale(1.08);
}

</style>

<script>
export default {
  methods: {
    do_vegetable() {
      this.$router.push('/vegetablemedley');
    },
    do_spicy() {
      this.$router.push('/spicyeeel');
    },
     do_salad() {
      this.$router.push('/salad');
    },
     do_omlet() {
      this.$router.push('/omlet');
    },
     do_makiroll() {
      this.$router.push('/makiroll');
    },
     do_hashbrowns() {
      this.$router.push('/hashbrowns');
    },
     do_fishtaco() {
      this.$router.push('/fishtaco');
    },
     do_bread() {
      this.$router.push('/bread');
    },
     do_bakedfish() {
      this.$router.push('/bakedfish');
    },
     do_dorucka() {
      this.$router.push('/completebreakfast');
    },
     do_pinkcake() {
      this.$router.push('/pinkcake');
    },
     do_rhubarbpie() {
      this.$router.push('/rhubarbpie');
    },
     do_cokoladna() {
      this.$router.push('/chocolatecake');
    },
    do_kali() {
      this.$router.push('/cheesec');
    },
do_piza() {
      this.$router.push('/pizza');
    }
  }
}
</script>