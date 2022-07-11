<template>
  <div class="main ">
    <TheWelcome />
    <div class=" mt-3 row">

      <div class="flex col-5 tq">
        <h3>Recordings</h3>
        <h3 class="title">Title</h3>
      </div>

      <div class=" col-7 row">
        <h3 class="col-3">Views</h3>
        <h3 class="col-3">Size</h3>
        <h3 class="col-10">Last Modified</h3>
      </div>
      <!-- <div class="">
      </div> -->
    </div>

    <div class=" mt-3 row ">
      <div class="row col-5">
        <div class="col-4">
          <img
            src="//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" />
        </div>
        <div class="col-8">
          <h5>Getting it right the first time</h5>
          <p>The Video description is shown here <br>if the user has added it.</p>
        </div>
      </div>

      <div class="row col-7">
        <div class="col-2">
          <h5 class="">324</h5>
        </div>
        <div class="col-3">
          <h5 class="t1">923KB</h5>
        </div>
        <div class="col-4">
          <h5 class="t1">3 Months ago</h5>
        </div>

        <div class="col-2">
          <h1>...</h1>
        </div>


      </div>

    </div>

    <div class=" mt-3 row ">
      <div class="row col-5">
        <div class="col-4">
          <img
            src="//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" />
        </div>
        <div class="col-8">
          <h5>Getting it right the first time</h5>
          <p>The Video description is shown here <br>if the user has added it.</p>
        </div>
      </div>

      <div class="row col-7">
        <div class="col-2">
          <h5 class="">324</h5>
        </div>
        <div class="col-3">
          <h5 class="t1">923KB</h5>
        </div>
        <div class="col-4">
          <h5 class="t1">3 Months ago</h5>
        </div>

        <div class="col-2">
          <h1>...</h1>
        </div>


      </div>

    </div>

    <div class=" mt-3 row ">
      <div class="row col-5">
        <div class="col-4">
          <img
            src="//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" />
        </div>
        <div class="col-8">
          <h5>Getting it right the first time</h5>
          <p>The Video description is shown here <br>if the user has added it.</p>
        </div>
      </div>

      <div class="row col-7">
        <div class="col-2">
          <h5 class="">324</h5>
        </div>
        <div class="col-3">
          <h5 class="t1">923KB</h5>
        </div>
        <div class="col-4">
          <h5 class="t1">3 Months ago</h5>
        </div>

        <div class="col-2">
          <h1>...</h1>
        </div>


      </div>

    </div>

    <div class=" mt-3 row ">
      <div class="row col-5">
        <div class="col-4">
          <img
            src="//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg" />
        </div>
        <div class="col-8">
          <h5>Getting it right the first time</h5>
          <p>The Video description is shown here <br>if the user has added it.</p>
        </div>
      </div>

      <div class="row col-7">
        <div class="col-2">
          <h5 class="">324</h5>
        </div>
        <div class="col-3">
          <h5 class="t1">923KB</h5>
        </div>
        <div class="col-4">
          <h5 class="t1">3 Months ago</h5>
        </div>

        <div class="col-2">
          <h1>...</h1>
        </div>


      </div>

    </div>

  </div>

</template>

<style scoped>
.main {
  padding: 0;
  margin-left: 360px;
  top: 34px;
  opacity: 1;
 
}
p{
  font-size: small;
  text-align: left;
  font: normal normal normal 12px/18px Poppins;
  letter-spacing: 0px;
  color: #A3BAC6;
  opacity: 1;
  margin-top:12px;
}
img {
  border-radius: 6px;
  width: 120px;
  height: 65px;
}


.flex {
  display: flex;
  justify-content: space-between;
  align-items: normal;
}
.text-1{
  margin-right: 30px;
  align-items: baseline;
}
.t1{
  margin-left: 25px;
}
.text{
  align-items: baseline;;
}
.row{
  justify-content: space-between;
      flex-wrap: nowrap;
}
.tq{
  justify-content: space-between;
  align-items: baseline;
}
.title{
 margin-right:60%;
}
.ti{
margin-right: 60%;
}
</style>
<script>
import axios from 'axios'
import TheWelcome from '@/components/TheWelcome.vue';
export default {
  components: { TheWelcome },
  data() {
    return {
      
    TheWelcomemessage: 'Hello Vue!',
      recorded: []
    }
  },
  methods: {
    listVideo() {
     

      const options = {
        method: 'GET',
        url: 'www.themealdb.com/api/json/v1/1/categories.php',
        
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  },
  mounted() {
    listVideo()
  },
}
</script>
