<script setup lang="ts">

</script>

<template>
  <section>

    <nav aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">

          <a @click="goToHome()"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-700">
            Snapybyte</a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            <a @click="goToStart()" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 text-gray-500 hover:text-gray-700
              dark:hover:text-white">
              My
              Recordings</a>
          </div>
        </li>

      </ol>
    </nav>
    <div class=" row">
      <div class="col-4 mt-4">
        <h2 class="heading">My Recordings 25</h2>
      </div>


      <div class=" col-8 buttons">
        <button
          class="border border-grey-700 text-grey-200 text-sm py-1 px-2 rounded-full flex items-center p-2 text-base font-normal">
          <img src="../assets/img/sort-svgrepo-com.svg" height="15" width="15" />
          <pan>By Date</pan>
        </button>
        <button
          class="border border-grey-700 text-grey-200  text-sm  py-1 px-2 rounded-full flex items-center p-2 text-base font-normal">
          <img src="../assets/img/funnel.svg" height="15" width="15" />
          <span> Add Filter</span>
          <img src="../assets/img/arrow-d.svg" height="15" width="15" class="ml-2" />
        </button>
        <button
          class="bg-sky-400  text-white text-sm py-1 px-4 rounded-full flex items-center p-2 text-base font-normal"
          @click="startCapture()">
          <img src=" ../assets/img/video.svg" height="15" width="15" />
          <span> New Request</span>
        </button>
        <button @click="isOpen = true"
          class="bg-red-700  text-white text-sm py-1 px-4 rounded-full flex items-center p-2 text-base font-normal">
          <div class="">
            <img src="../assets/img/rec.svg" height="15" width="15" />
          </div>

          <span> Start Recording</span>
        </button>

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
  </section>
</template>

<style scoped>
 
section {
  padding: 0;
  margin-left: 370;

  opacity: 1;
  border-radius: 25px !important;
}
  .buttons{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;;
  
  }
  button{
    margin-left: 10px;
  }

</style>
<script>
let  gdmOptions = {
  video: true,
  audio: true
}

export default {

  
  data() {
    return {
      isOpen: false,
      
    };
  },
  methods: {
    async startCapture(displayMediaOptions) {
      let captureStream = null;
      let recorder = null;

      try {
        captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

        recorder = new MediaRecorder(captureStream);

        const chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = e => {
          const blob = new Blob(chunks, { type: chunks[0].type });
          console.log(blob);
          captureStream.getVideoTracks()[0].stop();

         let  filename = "yourCustomFileName"
          if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
          }
          else {
            var elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
          }
        };
        recorder.start();
      } catch (err) {
        console.error("Error: " + err);
      }
      return captureStream;
    },

    goToHome() {
      this.$router.push('/');
    },
    goToStart() {
      this.$router.push('/start-recording');
    }
  },
};
</script>