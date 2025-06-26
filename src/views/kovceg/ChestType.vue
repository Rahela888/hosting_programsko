<template>
  <div class="chest_type">
    <div class="form"> 
      <h1>Choose chest type:</h1>
      <div class="slike">
        <img src="@/assets/mali_chest.png" alt="mali_chest" class="slika_chesta" @click="do_malog">
        <img src="@/assets/veliki_chest.png" alt="veliki_chest" class="slika_chesta" @click="do_velikog">
      </div>
    </div>
  </div>
</template>

<style scoped>
.chest_type {
  background-image: url('@/assets/pozadina_svega.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form {
  background-color: #FFAB56;
  display: inline-block;
  border-radius: 20px;
  padding: 200px;
  width: 700px;
}

h1 {
  
  font-size: 60px;
  color: #D66B00;
  position: relative;
  top: -180px;
  text-align: center;
}

.slike {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 200px; 
  margin-top: -120px; 
}

.slika_chesta {
  width: 100px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.2s;
}

.slika_chesta:hover {
  transform: scale(1.08);
}
</style>


<script>
export default {
  methods: {
    do_malog() {
      this.$router.push('/malichest');
    },
    do_velikog() {
      this.$router.push('/velikichest');
    },
}
}
</script>
