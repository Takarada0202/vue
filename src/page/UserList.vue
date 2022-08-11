<template>

    <div v-if="userList === null" class="loader">
        <img width="70" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" />
        <h4>데이터를 불러오는 중입니다.</h4>
    </div>
    <div v-else-if="userList.length < 1" class="loader">
        <h4>
            <img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
            유저가 발견되지 않았습니다.
        </h4>
    </div>
    <div v-else>
        <ul>
            <li v-for="(user,idx) in userList" :key="idx">
                <h4>{{ user.name }}<router-link style="float: right; margin-right: 30px" :to="{name : 'Profile', params:
                 {
                    id : user.id,
                 } }">Go UserProfile</router-link></h4>
                <hr />
            </li>
        </ul>
    </div>
    <div>
        <p></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userList : null
        }
    }, 
    methods: {
        fetchData: function() {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(function(response) {
                // response
                if(response.status !== 200){
                    alert('통신에러!');
                    self.userList = [];
                }else{
                    self.userList = response.data;
                    console.log(response);
                }
            })
            .catch(function(error) {
            console.log(error);
            });
        }
    },
    
    mounted() {
        this.fetchData();
    },
}
</script>

<style>
    @import ""
</style>