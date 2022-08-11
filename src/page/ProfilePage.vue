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
    <div v-else id="container">
      <img :src="userImg[userId-1].url" alt="" id="userImg">
      <h2 id="userName">Name : {{userList[userId-1].name}}</h2>
      <h3 id="userAddress">Address : ({{userList[userId-1].address.zipcode}}) {{userList[userId-1].address.street}}</h3>
      <h3 id="userPhon">Phone : {{userList[userId-1].phone}}</h3>
      <h3 id="userEmail"><a :href="'mailto:' + userList[userId-1].email">{{userList[userId-1].email}}</a></h3>
    </div>

</template>

<script>
export default {

    data() {
        return {
            userList : null,
            userId : this.$route.params.id,
            userImg :'',
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
                }
            })
            // .catch(function(error) {
            // console.log(error);
            // });
        },
        fetchImgData: function() {
            let self = this;

            this.$axios.get('https://jsonplaceholder.typicode.com/photos/')
            .then(function(response) {
                // response
                if(response.status !== 200){
                    alert('통신에러!');
                    self.userImg = [];
                }else{
                    self.userImg = response.data;
                }
            })
            // .catch(function(error) {
            // console.log(error);
            // });
        }
    },

    mounted() {
        this.fetchData();
        this.fetchImgData();
    },
    
}
</script>

<style>
  #container {
    min-width: 500px;
    max-width: 1200px;
    height: 600px;
    margin: 30px auto;
    text-align: center;
    border: 3px solid #eee;
    border-radius: 10px;
  }
  #userImg {
    width: 300px;
    height: 300px;
    margin-top: 20px;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 50%;
  }
</style>