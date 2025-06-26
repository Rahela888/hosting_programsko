<template>
  <div class="help">
    <div class="form">

      <h1>Check active help quest</h1>
      <ul>
        <li>
          <input type="checkbox" id="introductions">
          <label for="introductions">
            Introductions
            <span class="tooltip">greet all 28 villagers</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="howtowinfriends">
          <label for="howtowinfriends">
            How to win friends
            <span class="tooltip">give anyone a gift</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="meetthewizard">
          <label for="meetthewizard">
            Meet the Wizard
            <span class="tooltip">enter the wizard's tower</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="mayorsshorts">
          <label for="mayorsshorts">
            Mayor's shorts
            <span class="tooltip">find and return Mayor Lewis' purple shorts(Marnie's bedroom)</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="pamisthirsty">
          <label for="pamisthirsty">
            Pam is thirsty
            <span class="tooltip">bring Pam ginger ale</span>
          </label>
        </li>
         <li>
          <input type="checkbox" id="carvingpumpkins">
          <label for="carvingpumpkins">
            Carving pumpkins
            <span class="tooltip">bring Caroline a pumpkin</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="explorethemine">
          <label for="explorethemine">
            Explore the mine
            <span class="tooltip">enter the mines/reach lvl 5 in the mines</span>
          </label>
        </li>
      </ul>
<button @click="do_manag" class="manage">Back to manage</button>
    </div>
  </div>
</template>

<style scoped>
.help {
  background-image: url('@/assets/pozadina_svega.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-repeat: repeat-y;
}

.form {
  background-color: #FFAB56;
  border-radius: 30px;
  padding: 50px 60px 50px 60px; /* Smanjen padding */
  width: 700px;                /* Šira forma */
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  color: #974805;
  text-align: center;
}

h1 {
  font-size: 50px;
  color: #80461B;
  text-align: center;
  
  white-space: nowrap;
  margin-bottom: 38px;
  position: static; /* Vrati na default */
  top: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;
  position: static;
  left: 0;
  top: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  font-size: 25px;
  justify-content: flex-start;
}

input[type="checkbox"] {
  width: 28px;
  height: 28px;
  accent-color: #80461B;
  margin-right: 18px;
  margin-left: 0;
  cursor: pointer;
  transform: scale(1.15);
}

label {
  cursor: pointer;
  font-size: 1em;
  color: #80461B;
  font-family: inherit;
  user-select: none;
  background: #CD9148;
  border-radius: 20px;
  padding: 10px 22px;
  width: 520px;
  display: inline-block;
  position: relative;
  white-space: nowrap;
}

.tooltip {
  visibility: hidden;
  opacity: 0;
  width: 260px;
  background: #fffbe6;
  color: #7c4a00;
  text-align: left;
  border-radius: 8px;
  padding: 12px 18px;
  position: absolute;
  left: 50%;
  top: -60px;
  transform: translateX(-50%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.13);
  font-size: 1em;
  z-index: 2;
  transition: opacity 0.2s;
  pointer-events: none;
  border: 1.5px solid #e6c27a;
  white-space: normal;
}

label:hover .tooltip,
label:focus-within .tooltip {
  visibility: visible;
  opacity: 1;
}

.manage{

 background-color: #974805;
    color: #FFAB56;
    border-radius: 10px;
    padding: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 300px;
    font-size:25px;


}

</style>

<script>
export default {
  methods: {
    do_manag() {
      this.$router.push('/manag');
    }

}
}
</script>