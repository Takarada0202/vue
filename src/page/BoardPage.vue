<template>
  <div>
    <h1>Board</h1>
    
    
    <custom-list :Count="1" :Title="'Test1'" :SubTitle="'Hello World1'" />
    <custom-list :Count="3" :Title="'Test2'" :SubTitle="'Hello World2'" />
    <custom-list :Count="5" :Title="'Test3'" :SubTitle="'Hello World3'" />
    <custom-list :Count="2" :Title="'Test4'" :SubTitle="'Hello World4'" />
    <custom-list :Count="3" :Title="'Test5'" :SubTitle="'Hello World5'" />
    <custom-list :Count="4" :Title="'Test6'" :SubTitle="'Hello World6'" />
    <custom-list :Count="2" :Title="'Test7'" :SubTitle="'Hello World7'" />
    <custom-list :Count="1" :Title="'Test8'" :SubTitle="'Hello World8'" />
    <custom-list :Count="7" :Title="'Test9'" :SubTitle="'Hello World9'" />
  </div>
</template>

<script>
import CustomList from "../components/li-item.vue"
export default {
  components : {
    CustomList,
  },
data() {
  return {
    routeParams : this.$route.params
  }
}
}
</script>

<style>

</style>