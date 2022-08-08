<template>
  <div>
    <custom-hearder />
    <router-view></router-view>

  </div>
</template>

<script>

import CustomHearder from './components/CustomHeader.vue'
export default {
  components: {
    CustomHearder,
  }
}
</script>

<style>

</style>