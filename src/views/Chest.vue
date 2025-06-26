<template>
<div class="new_old_chest">
<div class="form">
<h1><span class="new" @click="novi_kovceg">New chest</span></h1>
<br/>
<br/>
<br/>


<h1><span class="old" @click="stari_kovceg">Old chest</span></h1>
</div>
</div>

</template>

<style scoped>
.new_old_chest {
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

.form{

background-color:#FFAB56;
display:inline-block;
border-radius: 20px;
padding: 200px;
width: 700px;

}

.new{
background-color:#CD9148;
color:black;
border-radius:20px;
display:inline-block;
padding:20px;
width:450px;
cursor: pointer;

}

.old{
    background-color:#CD9148;
color:black;
border-radius:20px;
display:inline-block;
padding:20px;
width:450px;
cursor: pointer;
}

.old:active,
.new:active {
  background-color: #644210;
  color: #fff;
}


</style>


<script>
export default {
  methods: {
    novi_kovceg() {
      this.$router.push('/chesttype');
    },
    stari_kovceg() {
      this.$router.push('/chests');
    }
  

  }
}
</script>
