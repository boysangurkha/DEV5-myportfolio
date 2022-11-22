<script setup>
import { ref, onMounted } from 'vue';

    let username = ref('');
    let description = ref('');

    onMounted(() => {
        const api_url = "tiktok.json"
        fetch(api_url)
            .then(response => response.json())
            .then(data => {
                username.value = data.videos[0].username;
                description.value = data.videos[0].description;
            })
    })  
</script>

<template>
  <div class="video__details">
    <h3>{{username}}</h3>
    <p>{{description}}</p>
  </div>
</template>

<style scoped>
    div{
        padding: 0 1rem;
    }
</style>
