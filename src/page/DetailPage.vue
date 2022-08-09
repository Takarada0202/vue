<template>
    <div>
        <h1>{{this.$BoardContents[pageId].title}}</h1>
        <h2>{{this.$BoardContents[pageId].description}}</h2>
        <router-link to="/board">뒤로가기</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routerParams : this.$route.params,
            pageId : this.$route.params.pageId
        }
    }
}
</script>

<style>

</style>