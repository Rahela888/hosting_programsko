<template>
<div class ="veze">
 <div class="form">
    <h1>Choose an NPC you'd like to check out:</h1>
<p><span class="zene_vjencanje">Bachelorettes</span></p>

<div class="slike_zena">
    <div class="prve_tri_zene">
        <div class="emily1">
            <span class="emily_tekst">Emily</span>
    <img src="@/assets/emily.png" alt="emily" class="emily_slk" @click="do_emily">
        </div>
  <div class="haley1">
            <span class="haley_tekst">Haley</span>
    <img src="@/assets/haley.png" alt="haley" class="haley_slk" @click="do_haley">
  </div>

      <div class="leah1">
            <span class="leah_tekst">Leah</span>
    <img src="@/assets/leah.png" alt="leah" class="leah_slk" @click="do_leah">
      </div>
    </div>



<div class="druge_tri_zene">
    
      <div class="maru1">
            <span class="maru_tekst">Maru</span>
    <img src="@/assets/maru.png" alt="maru" class="maru_slk" @click="do_maru">
      </div>

      <div class="penny1">
            <span class="penny_tekst">Penny</span>
    <img src="@/assets/penny.png" alt="penny" class="penny_slk" @click="do_penny">
      </div>


      <div class="abigail1">
            <span class="abigail_tekst">Abigail</span>
    <img src="@/assets/abigail.png" alt="abigail" class="abigail_slk" @click="do_abigail">
      </div>
</div>

</div>


<p><span class="muskarci_vjencanje">Bachelors</span></p>

<div class="slike_muskaraca">
<div class="prva_tri_muskarca">

    <div class="alex1">
            <span class="alex_tekst">Alex</span> 
    <img src="@/assets/alex.png" alt="alex" class="alex_slk" @click="do_alex">  
    </div>

    <div class="elliot1">
            <span class="elliot_tekst">Elliot</span>
    <img src="@/assets/elliot.png" alt="elliot" class="elliot_slk" @click="do_elliot">
    </div>

    <div class="harvey1">
            <span class="harvey_tekst">Harvey</span>
    <img src="@/assets/harvey.png" alt="harvey" class="harvey_slk" @click="do_harvey">
    </div>

</div>



<div class="druga_tri_muskarca">

    <div class="sam1">
            <span class="sam_tekst">Sam</span>
    <img src="@/assets/sam.png" alt="sam" class="sam_slk" @click="do_sam">
    </div>

    <div class="sebastian1">
            <span class="sebastian_tekst">Sebastian</span>
    <img src="@/assets/sebastian.png" alt="sebastian" class="sebastian_slk" @click="do_sebastian">
    </div>

    <div class="shane1">
            <span class="shane_tekst">Shane</span>
    <img src="@/assets/shane.png" alt="shane" class="shane_slk" @click="do_shane">
    </div>

</div>   
</div>




<p><span class="odrasli_i_djeca">Non-marriage candidates</span></p>

<div class="slike_ne_vjencani">
    
<div class="cetiri_slk_1">

    <div class="willy1">
            <span class="willy_tekst">Willy</span>
    <img src="@/assets/willy.png" alt="willy" class="willy_slk" @click="do_willy">
    </div>

    <div class="wizard1">
            <span class="wizard_tekst">Wizard</span>
    <img src="@/assets/wizard.png" alt="wizard" class="wizard_slk" @click="do_wizard">
    </div>

    <div class="robin1">
            <span class="robin_tekst">Robin</span>
    <img src="@/assets/robin.png" alt="robin" class="robin_slk" @click="do_robin">
    </div>

    <div class="demetrious1">
            <span class="demetrious_tekst">Demetrious</span>
    <img src="@/assets/demetrious.png" alt="demetrious" class="demetrious_slk" @click="do_demetrious">
    </div>

</div>

<div class="cetiri_slk_2">

    <div class="abigail1">
            <span class="abigail_tekst">Marnie</span>
    <img src="@/assets/marnie.png" alt="marnie" class="marnie_slk" @click="do_marnie">
    </div>

    <div class="abigail1">
            <span class="abigail_tekst">Pierre</span>
    <img src="@/assets/pierre.png" alt="pierre" class="pierre_slk" @click="do_pierre">
    </div>
    <div class="abigail1">
            <span class="abigail_tekst">Lewis</span>
    <img src="@/assets/lewis.png" alt="lewis" class="lewis_slk" @click="do_lewis">
    </div>

    <div class="abigail1">
            <span class="abigail_tekst">Linus</span>
    <img src="@/assets/linus.png" alt="linus" class="linus_slk" @click="do_linus">
    </div>

</div>
<div class="cetiri_slk_3">

    <div class="abigail1">
            <span class="abigail_tekst">Gus</span>
    <img src="@/assets/gus.png" alt="gus" class="gus_slk" @click="do_gus">
    </div>

    <div class="abigail1">
            <span class="abigail_tekst">Pam</span>
    <img src="@/assets/pam.png" alt="pam" class="pam_slk" @click="do_pam">
    </div>

    <div class="abigail1">
            <span class="abigail_tekst">Caroline</span>
    <img src="@/assets/caroline.png" alt="caroline" class="caroline_slk" @click="do_caroline">
    </div>

    <div class="abigail1">
            <span class="abigail_tekst">Kent</span>
    <img src="@/assets/kent.png" alt="kent" class="kent_slk" @click="do_kent">
    </div>

    <div class="abigail1">
            <span class="abigail_tekst">Jodi</span>
    <img src="@/assets/jodi.png" alt="jodi" class="jodi_slk" @click="do_jodi">
    </div>

</div>
 
 </div>


</div>
</div>
    
</template>





<style scoped>
.veze{
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
  width: 700px;
  margin:auto ;
  margin-bottom:50px;
  margin-top:50px;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


}

h1{
      font-size:50px;
    color:#80461B;
    text-align: center;
    font-family: Press Start 2P, sans-serif;
}


.zene_vjencanje, .muskarci_vjencanje, .odrasli_i_djeca {
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
}

.prve_tri_zene{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:75px;
}
.druge_tri_zene{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:75px;
}

.prva_tri_muskarca{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:75px;
}

.druga_tri_muskarca{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:75px;
}

.cetiri_slk_1, .cetiri_slk_2, .cetiri_slk_3 {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap:35px;
}

.emily1,.haley1, .leah1, .maru1, .penny1{

position:relative;
display:inline-block;

}


.emily_tekst,.haley_tekst, .leah_tekst, .maru_tekst, .penny_tekst{


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

.emily1:hover .emily_tekst,.haley1:hover .haley_tekst,
.leah1:hover .leah_tekst,
.maru1:hover .maru_tekst,
.penny1:hover .penny_tekst {
  visibility: visible;
  opacity: 1;
}

.abigail_tekst,.alex_tekst, .elliot_tekst, .harvey_tekst, .sam_tekst, .sebastian_tekst, .shane_tekst,
.willy_tekst, .wizard_tekst, .robin_tekst, .demetrious_tekst{

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

.abigail1,.alex1, .elliot1, .harvey1, .sam1, .sebastian1, .shane1,
.willy1, .wizard1, .robin1, .demetrious1{

    position:relative;
display:inline-block;
}



.abigail1:hover .abigail_tekst,.alex1:hover .alex_tekst,
.elliot1:hover .elliot_tekst,
.harvey1:hover .harvey_tekst,
.sam1:hover .sam_tekst,
.sebastian1:hover .sebastian_tekst,
.shane1:hover .shane_tekst,
.willy1:hover .willy_tekst,
.wizard1:hover .wizard_tekst,
.robin1:hover .robin_tekst,
.demetrious1:hover .demetrious_tekst {
  visibility: visible;
  opacity: 1;

}

</style>


<script>
export default {
  methods: {
    do_emily() {
      this.$router.push('/emily_opis');
    },
    do_haley() {
      this.$router.push('/haley_opis');
    },
    do_leah() {
      this.$router.push('/leah_opis');
    },
    do_maru() {
      this.$router.push('/maru_opis');
    },
    do_penny() {
      this.$router.push('/penny_opis');
    },
    do_abigail() {
      this.$router.push('/abigail_opis');
    },
    do_alex() {
      this.$router.push('/alex_opis');
    },
    do_elliot() {
      this.$router.push('/elliot_opis');
    },
    do_harvey() {
      this.$router.push('/harvey_opis');
    },
    do_sam() {
      this.$router.push('/sam_opis');
    },
    do_sebastian() {
      this.$router.push('/sebastian_opis');
    },
    do_shane() {
      this.$router.push('/shane_opis');
    },
    do_willy() {
      this.$router.push('/willy_opis');
    },
    do_wizard() {
      this.$router.push('/wizard_opis');
    },
    do_robin() {
      this.$router.push('/robin_opis');
    },
    do_demetrious() {
      this.$router.push('/demetrious_opis');
    },
    do_marnie() {
      this.$router.push('/marnie_opis');
    },
    do_pierre() {
      this.$router.push('/pierre_opis');
    },
    do_lewis() {
      this.$router.push('/lewis_opis');
    },
    do_linus() {
      this.$router.push('/linus_opis');
    },
    do_gus() {
      this.$router.push('/gus_opis');
    },
    do_pam() {
      this.$router.push('/pam_opis');
    },
    do_caroline() {
      this.$router.push('/caroline_opis');
    },
    do_kent() {
      this.$router.push('/kent_opis');
    },
    do_jodi() {
      this.$router.push('/jodi_opis');
    }
  }
}
</script>
