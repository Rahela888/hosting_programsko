<template>
<div class ="home" @click="nalogin">
    <h1>Planner Valley</h1>
    </div>    
</template>

<style scoped>
.home{
background-image:url('@/assets/home_pozadina.png');
background-size: cover;
background-position: center;
height: 100vh;
vertical-align: 100%;
display: flex;
justify-content: center;
 cursor: pointer;
}


h1{
font-family: Press Start 2P, sans-serif;
font-size: 100px;
color: #D66B00;


}

</style>


<script>
export default {
  methods: {
    nalogin() {
      this.$router.push('/login');
    }
  }
}
</script>