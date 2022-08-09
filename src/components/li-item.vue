<template>
    <div>
        <h1 v-if="Title">{{Title}}</h1>
        <p v-else class="untitled">
            untitled
        </p>
        <ul v-if="Count && SubTitle">
            <li v-for="key in Count " :key="key"><router-link :to="{name: 'detail', params:
            {
                pageId : key,
            } }">{{SubTitle}}</router-link></li>
        </ul>
  </div>
</template>

<script>
export default {
    props : {
        Title : String,
        Count : Number,
        SubTitle : String,
        Idx : Number,
    }
}
</script>

<style>

</style>