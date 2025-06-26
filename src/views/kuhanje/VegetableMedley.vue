<template>
  <div class="kuhanje">
    <div class="form">
      <h1>Vegetable Medley</h1>
      <div class="uz_sliku">
          <img src="@/assets/vegetable.png" class="slika" alt="VegetableMedley"/>

        <div class="tekst">
          <p>Energy: +165</p>
          <p>Health: +74</p>
        </div>
      </div>
      <div class="pregled">
        <h3>Ingredients</h3>
        <div class="ok">
        <p>1 Tomato</p>
        <p>1 Beet</p>
        </div>
        <h3>Gifts</h3>
        <div class="ok">
       <p> Jodi, Leah and Lewis love this item.</p>
       </div>
        <h3>Bundle</h3>
        <div class="ok">
          <p>Vegetable Medley is not used in any bundles.</p>
        </div>
      </div>
      
    </div>
  </div>
</template>


<style scoped>
.kuhanje {
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
h3 {
  font-size: 35px;
  color: #80461B;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  background-color: #CD9148;
  border-radius: 10px;
}

.uz_sliku {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 36px;
  width: 100%;

  
}

.slika {
  width: 70px;
  height: auto;
 
  transition: width 0.2s;
}


.tekst {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 2.2;
  flex: 1;
   border-radius: 20px;
text-decoration: underline;
  border: 2px solid #6d4000;
  position:relative;
  line-height: 1;
}

.pregled {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}

.ok{
font-size:20px;


}




</style>