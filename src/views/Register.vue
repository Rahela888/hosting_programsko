<template>
   
<div class="register">
     <div class="form">
    <h1>Register</h1>
    <br/>
  
    <input type="text" id="username" name="username" placeholder="Enter your username" required  v-model="username"/>

    <br />
    <br/>

  
    <input type="email" id="email" name="email" placeholder="Enter your email" required  v-model="email"/>

    <br />
    <br />

   
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
   padding: 40px;    
  width: 700px; 
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
color: #974805;
  width: 400px;      
  padding: 20px;      
  border: none; 
}
input[type="password"] {
background-color: #CD9149;
border-radius: 10px ;
text-align: center;
color: #974805;
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
color: #974805;
width: 600px;
padding: 40px;

}

</style>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase.js'

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async do_login() {
      if (!this.username?.trim()) {
        alert('Please enter username!');
        return;
      }

      if (!this.email?.trim()) {
        alert('Please enter email!');
        return;
      }

      if (!this.password?.trim()) {
        alert('Please enter password!');
        return;
      }

      this.loading = true;

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          this.email.trim(), 
          this.password
        );
        
        const user = userCredential.user;

        localStorage.setItem('user', JSON.stringify({
          uid: user.uid,
          email: user.email,
          username: this.username.trim()
        }));

        this.$router.push('/login');

      } catch (error) {
        let errorMsg = 'Registration failed!';
        
        if (error.code === 'auth/email-already-in-use') {
          errorMsg = 'This email is already registered!';
        } else if (error.code === 'auth/invalid-email') {
          errorMsg = 'Please enter a valid email!';
        } else if (error.code === 'auth/weak-password') {
          errorMsg = 'Password must be at least 6 characters!';
        }
        
        alert(errorMsg);

      } finally {
        this.loading = false;
      }
    }
  }
}
</script>










