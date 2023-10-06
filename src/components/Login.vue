<template>
 <form @submit.prevent="userLogin">
    <h1 class="text-blue-500 text-4xl">User Login</h1>
  <div class="login">
    <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your email</label>
    <input type="email" v-model="gmail" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your password</label>
    <input type="password" v-model="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  {{ error }}
  </div>
  <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
</form>


</template>

<script>
import { ref } from 'vue'
import http from '../utils/http.js'
import {useRouter} from 'vue-router'
export default {
setup(){
  let gmail = ref("");
  let password = ref("");
  let error = ref("");
  let router = useRouter();

  // User Login 
  let userLogin =async()=>{
   try{
    let resp = await http.post("/api/user/login",{
      gmail : gmail.value,
      password : password.value
    })
    if(resp.status == 200 ){
     console.log(resp);
      alert('login success')
      router.push("/");
    }else{
      throw new Error ('user login is not success!')
    }
   }catch(err){
    error.value = err.message;
   }
  }
  return{gmail,password,userLogin,error}

}
}
</script>

<style>
.login{
  max-width: 600px;
  margin : 50px auto;
}
</style>