<template>
  <div class="login">
  <div class ="form">
    <h1>Login</h1>
    
    <p>Don't have an account? <a href="/register"><span class="r_color">Register</span></a></p>
    <br/>
      <label for="username"></label>
      <input type ="text" id="username" name="username" placeholder="Enter your username" required v-model="username" />
    <br />
    <br />
    <br />
    <br />
      <label for="password"></label>
      <input type ="password" id="password" name="password" placeholder="Input your password" required  v-model="password"/>
      <br />
    <br />
    <br />
  <div class="guumb">
    <button type="submit" @click="do_manage">Login</button>
  </div>
  </div>
    <br />
    <br />
    <br />

 






  </div>
  
</template>

<style scoped>
.login{


background-image: url('@/assets/pozadina_svega.png');
background-size: cover;
background-position: center;
vertical-align: 100vh;
height: 100vh;
width: 100vw;
display: flex;
background-repeat: repeat-y;
}

h1{

  font-size:60px;
}





.form{
 background-color:#FFAB56;
  border-radius: 20px;
  padding: 330px;
  width: 500px;
  margin:auto ;
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
}

input[type="text"] {
background-color: #CD9149;
border-radius: 10px ;
text-align: center;
color:974805;
width: 600px;
padding: 40px;

}
input[type="password"] {
background-color: #CD9149;
border-radius: 10px ;
text-align: center;
color:974805;
width: 600px;
padding: 40px;
}


  button {
    background-color: #974805;
    color: #FFAB56;
    
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 20px;
    cursor: pointer;
    width: 200px;
  }

.r_color{
  color:#E37383;
  font-weight: bold;
  border-bottom: #974805;
  cursor:pointer ;
}


</style>


<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    do_manage() {
      if (!this.username || !this.password) {
        this.errorMessage = 'Please fill in both username and password!';
      } else {
        this.errorMessage = '';
        this.$router.push('/manag');
      }
    }
  }
}
</script>


