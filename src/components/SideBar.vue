<template>

  <aside class="w-64 fixed  h-screen bg-gray-50 rounded dark:bg-gray-80" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul class="space-y-2">
        <li>
          <a @click="goToHome()" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="../assets/img/video-player.png" height="24" width="24" />
            <span class="ml-3">My Recordings</span>
          </a>
        </li>
        <li>
          <a @click="goToStart()" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
           
            <img src="../assets/img/share-svgrepo-com.svg" height=" 24" width="24" />
            <span class="ml-3">Request</span>
          </a>

        </li>

      </ul>
    </div>
  </aside>

</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
   
    goToHome() {
      this.$router.push('/');
    },
    goToStart() {
      this.$router.push('/start-recording');
    },
    startCapture() {
      this.$router.push('/start')
    }
  }
}
</script>