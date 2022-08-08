<template>
  <div>
    <custom-hearder />
    <router-view></router-view>
    <h1>Main Page</h1>
    <p>Hello world</p>
    <hr />
    <CustomList :Count="2" />
    <CustomList  :Count="3" :SubTitle="'Hello world'" />
    <CustomList  />
    <CustomList :Title="'Title'" :Count="10" :SubTitle="'Hello world'" />
    <CustomList  />
  </div>
</template>

<script>
import CustomList from './components/li-item.vue'
import CustomHearder from './components/CustomHeader.vue'
export default {
  components: {
    CustomList ,
    CustomHearder,
  }
}
</script>

<style>

</style>