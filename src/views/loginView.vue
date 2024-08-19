<template>
    <button @click="signUp = !signUp">Sign / Login</button>
    <div v-if="signUp">
    <div>
      <h1>HeHeHeHeHe</h1> 
      <label>Name: <input type="text" v-model="name"></label><br><br>
      <label>Surname:<input type="text" v-model="surname"></label><br><br>
      <label>Age: <input type="text" v-model="age"></label><br><br>
      <label>Fav code language: <input type="text" v-model="fav_coding_lang"></label><br><br>
      <label>Fav car: <input type="text" v-model="fav_car"></label><br><br>
      <label>Eye colour: <input type="text" v-model="eye_color"></label><br><br>
      <label>Username: <input type="text" v-model="username"></label><br><br> 
      <label>Password: <input type="password" v-model="password" ></label>  <button value="enter" @click="addUser">submit</button>
    </div>
</div>
<div v-else>
        <h1>Login here:</h1>
        <div>
            <label>Enter your Username:</label>
            <input type="text" v-model="username"><br><br>
            <label>Enter your Password:</label>
            <input type="password" v-model="password"><br><br>
            <button value="enter" @click="loginUser">login</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            surname: '',
            age: '',
            fav_coding_lang: '',
            fav_car: '',
            eye_color: '',
            username: '',
            password: '',
            signUp: true
        }
    },
    computed: {
        addUser(){
            this.$store.dispatch('addUser', this.$data)
        },
        loginUser(){
            this.$store.dispatch('loginUser', this.$data);
            location.reload()
        }
    }
}
</script>
<style>
    
</style>