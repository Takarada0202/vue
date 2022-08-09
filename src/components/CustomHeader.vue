<template>
  <div id="header">
    <router-link to="home">Home</router-link>
    <router-link to="about">About</router-link>
    <router-link to="board">Board</router-link>
    <router-link to="contac">Contact</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #header {
    width: auto;
    border: 1px solid black;
    padding: 20px;
    font-size: 20px;
  }
  #header a { 
    font-style: none;
    color: black;
    margin: 0 10px;
    text-decoration: none;
  }
</style>