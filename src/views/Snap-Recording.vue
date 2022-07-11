<template>
  <div class="main">
    <the-welcome />

    <div class="border-dashed border-2 border-grey-600 rounded-lg box ">

      <div class="">
        <img src="../assets/img/folder.png" id="img" />
      </div>
      <div class="">
        <h1 class="text-1 tracking-wide">Say hello to the world!</h1>
      </div>
      <div class="">
        <p class="text-2">
          Record your first video/audio and share it what your team, friends, <br>followers and customers.
        </p>
      </div>

      <div class=" buttons">
        <button
          class="bg-red-700  text-white text-sm py-1 px-4 rounded-full flex items-center p-2 text-base font-normal"
          data-modal-toggle="authentication-modal" @click="isOpen = true">
          <div class="">
            <img src="../assets/img/rec.svg" height="15" width="15" />
          </div>

          <span> Start Recording</span>
        </button>
        <button
          class="bg-sky-400  text-white text-sm py-1 px-4 rounded-full flex items-center p-2 text-base font-normal"
          @click="startCapture()">
          <img src="../assets/img/video.svg" height="15" width="15" />
          <span> New Request</span>
        </button>

      </div>
    </div>

    <div class="row">
      <div class="card-1 col-6">

      </div>
      <div class="card-2 col-6">
        <h2 class="mt-5">Want more controls & better <br> quality recording?</h2>
        <button
          class="bg-sky-400  text-white text-sm py-1 px-4 rounded-full flex items-center p-2 text-base font-normal mt-5">

          <span> Download the desktop recorder</span>
        </button>


      </div>
    </div>
  </div>



  <!-- Main modal -->

  <div v-show="isOpen" class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        ">
    <div class="max-w-lg p-6 bg-white rounded-md shadow-lg">
      <div class="flex items-center justify-between">
        <h3 class="text-2xl">New Recording</h3>
        <svg @click="isOpen = false" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-900 cursor-pointer"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="mt-4">
        <p class="mb-4 text-sm">
          Save the recording in
        </p>
        <div class="flex justify-center">
          <div class="mb-5 xl:w-96">
            <select class="form-select appearance-none
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example">
              <option selected>Select a project</option>
              <option value="1">Project One</option>
              <option value="2">Project Two</option>
              <option value="3">project Three</option>
            </select>

            <div class="flex justify-content-between mt-3">
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Record Screen</span>
              <label for="green-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">

                <input type="checkbox" value="" id="green-toggle" class="sr-only peer" checked>
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                </div>

              </label>
            </div>
            <div class="flex justify-content-between mt-3">
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Record Camera</span>
              <label for="green-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">

                <input type="checkbox" value="" id="green-toggle" class="sr-only peer" checked>
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                </div>

              </label>
            </div>

            <div class="flex justify-content-between mt-3">
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Record mic</span>
              <label for="green-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">

                <input type="checkbox" value="" id="green-toggle" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
                </div>

              </label>
            </div>
          </div>
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
.box{

  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width:80%;
  height: 600px;

}
#img{
  top: 100px;
 bottom: auto;
  margin-left: 40%;
  height: 180px;
  background: #ECEBED 0% 0% no-repeat padding-box;
  opacity: 1;
}
.text-1{
  top: 160px;
  height: 21px;
  text-align: center;
  font: normal normal medium 22px/33px Poppins;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: medium;
  color: #000000;
  opacity: 1;
}
.text-2{
  top: 200px;
  left: 2px;
  
  text-align: center;
  font: normal normal normal 14px/20px Helvetica Neue;
  letter-spacing: 0px;
  color: #637C8E;
  opacity: 1;
}

 .buttons {
   top: 220px;
   margin-left: 30%;
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: baseline;
  
 }

 button {
   margin-left: 10px;
 }
.row{
  top: 70px;
 
  padding-bottom: 150px;
}
 .card-1{
    width: 491px;
    height: 262px;
    background: transparent url('../assets/img/rec.png') 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 48px #0000001A;
    border-radius: 10px;
    opacity: 1;
 }

 .card-2{
    text-align: left;
    font: normal normal medium Poppins;
    font-size: 26px;
    letter-spacing: 0px;
    color: #21455E;
    opacity: 1;
 }
</style>
<script>
import TheWelcome from '@/components/TheWelcome.vue';
export default {
  components: { TheWelcome },

    data() {
      return {
        isOpen: false
      }
    },
   methods: {
    async startCapture(displayMediaOptions) {
      let captureStream = null;

      try {
        captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      } catch (err) {
        console.error("Error: " + err);
      }
      return captureStream;
    }
   },
}
</script>
