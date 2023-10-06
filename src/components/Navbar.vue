<template>
    <header>
      <h1>Sneaker</h1>
      <img src="../assets/sneakers-logo.avif" class="h-11 mr-9" alt="12px">
      <nav>
          <router-link :to="{name : 'home'}">Home</router-link>
          <router-link :to="{name:'Login'}">Login</router-link>
          <router-link :to="{name:'Register'}">Register</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
    }
    header h1 {
      color: blue;
      font-size: 48px;
    }
    header a {
      color: #bbb;
      text-decoration: none;
      margin-left: 20px;
    }
    header a.router-link-active {
      color: #444;
      font-weight: bold;
    }
  </style>