<template>
  <div>
    <h1>Contact</h1>
    <div id="container">
      <form action="get">
        <input type="text" placeholder="Name" id="name" required>
        <input type="number" placeholder="PhoneNumber" id="phoneNumber" required>
        <input type="email" placeholder="Email" id="email" required>
        <input type="text" placeholder="Content" id="contnet"  required  >
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#container {
  width: 500px;
  height: 1200px;
}
  form {
    display: flex;
    flex-direction: column;
    margin: 10px ;
  }
</style>