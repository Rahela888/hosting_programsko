<template>
   
<div class="register">
     <div class="form">
    <h1>Register</h1>
    <br/>

    <label for="username"></label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required  v-model="username"/>

    <br />
    <br/>

    <label for="email"></label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required  v-model="email"/>

    <br />
    <br />

    <label for="password"></label>
    <input type="password" id="password" name="password" placeholder="Input your password" required v-model="password" />

    <br />
    <br />
<div class="gumb">
    <button type="submit" @click="do_login">Submit</button>
</div>
</div>
</div>

</template>




<style scoped>

.register{


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

input[type="email"] {
background-color: #CD9149;
border-radius: 10px ;
text-align: center; 
color:974805;
width: 600px;
padding: 40px;

}

</style>

<script>

export default {
  data() {
    return {

      username: '',
      email:'',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    do_login() {
      if (!this.username || !this.password) {
        this.errorMessage = 'Please fill in all boxses!';
      } else {
        this.errorMessage = '';
        this.$router.push('/login');
      }
    }
  }
}
</script>