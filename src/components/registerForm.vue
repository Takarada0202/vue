<template>
  <div class="flex">
    <form action="post">
      <input v-model="Id" type="text" placeholder="Id" id="id">
      <input v-model="Password" type="password" placeholder="Password" id="password">
      <input v-model="RePassword" type="password" placeholder="RePassword" id="repassword">
      <input  type="submit" @click="click(Id,Password,RePassword)" name="" id="">
      <p>{{Password}}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    Id : '',
    Password : '',
    RePassword :'',
  }}
}

</script>

<style>
  .flex{
    display: flex;
    flex-direction:column ;
    width: 200px;
    margin: 20px;
  }
  .flex input {
    margin: 10px;
  }
</style>