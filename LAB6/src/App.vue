<script setup>

  import VideoPlayer from './components/VideoPlayer.vue'
  import VideoDetails from './components/VideoDetails.vue'
  import Chat from './components/Chat.vue'

</script>

<template>
  <div class="app">
    <div class="video"><VideoPlayer /></div>
    <div class="title"><VideoDetails /></div>
    <div class="comments"><Chat /></div>
  </div>
</template>

<style scoped>
  .app {
    display: grid;
    grid-template-columns: 3fr 9fr;
    font-family: "Lato", sans-serif;
    grid-template-rows: 1fr 19fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
    "video title"
    "video comments";
    position: fixed;
  }

  .video { 
    grid-area: video; 
  }
  .title { 
    grid-area: title; 
  }
  .comments { 
    grid-area: comments; 
  }
</style>
