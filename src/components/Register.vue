<template>
  
<form @submit.prevent="userRegister">
  <h1 class="text-blue-500 text-4xl">User Register</h1>
  <div class="login">
    <div class="relative z-0 w-full mb-6 group text-left">
      <input type="text" v-model="name" name="floating_name"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_name"  class=" peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
  </div>

    <div class="relative z-0 w-full mb-6 group text-left">
      <input type="email" v-model="gmail" name="floating_email"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email"  class=" peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
 
  <div class="relative z-0 w-full mb-6 group text-left">
      <input type="password" v-model="password" name="floating_password"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      <span>{{ error_password }}</span>
  </div>
  
  <div class="relative z-0 w-full mb-6 group text-left">
      <input type="password" v-model="confirm_password" name="confirm_password"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
      <span>{{ error_password }}</span>
    </div>

  <div class="relative z-0 w-full mb-6 group text-left">
      <input type="tel" v-model="phone" name="floating_phone"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
  </div>
  <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
  </div>
</form>


</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import http from '../utils/http.js'
export default {

setup(){
  let name=ref("");
  let gmail=ref("");
  let password=ref("");
  let confirm_password=ref("");
  let phone=ref("");
  let router= useRouter();
  let error = ref("")
  let error_password= ref("");

  // Api Data Fetch for User Register
  let userRegister=async()=>{
           try{
            if(password.value === confirm_password.value){
                let response =  await http.post("/api/user/register",{
                    name : name.value,
                    gmail : gmail.value,
                    password : password.value,
                    confirm_password : confirm_password.value,
                    phone : phone.value
            })
            if(response.status == 200 ){
                alert('register success');        
            }else{
              throw new Error('Not valid');
            }
            router.push("/");
                }else{
                  console.log('pass is not same');
                  error_password.value = 'Please fill the password!';
                  password.value = "";
                  confirm_password.value = "";
                }   
            //  if(password.value === confirm_password.value){
            //     let response =  await fetch("http://localhost:8087/api/user/register",{
            //     method : "POST",
            //     headers : {
            //         "Content-type" : "application/json"
            //     },
            //     body:JSON.stringify({
            //         name : name.value,
            //         gmail : gmail.value,
            //         password : password.value,
            //         confirm_password : confirm_password.value,
            //         phone : phone.value
            //     })
            // })
            // if(response.status == 200 ){
            //     alert('register success');        
            // }else{
            //   throw new Error('Not valid');
            // }
            // router.push("/");
            //     }else{
            //       console.log('pass is not same');
            //       error_password.value = 'Please fill the password!';
            //       password.value = "";
            //       confirm_password.value = "";
            //     }    
           }catch(err){
            error.value= err.message;
           }
        }

  return {name,gmail,password,confirm_password,phone,error_password,userRegister};
}

}
</script>

<style>



</style>