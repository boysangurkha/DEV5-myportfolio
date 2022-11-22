<script setup>
    import { ref, reactive, onMounted } from 'vue';
    import 'animate.css';

    let src = ref('');
    let videos = reactive({videos: []});
    let animation = ref("");

    onMounted(() => {
        let api_url = "tiktok.json"
        fetch(api_url)
            .then(response => response.json())
            .then(data => {
                src.value = data.videos[0].video;
                videos.videos = data.videos;
            })
    });

    const nextVideo = () => {
        animation.value = "animate__fadeOut";
        setTimeout(() => {
            src.value = videos.videos[1].video;
            animation.value = "animate__fadeIn";
        }, 500);
    }



</script>

<template>
    <div class="video">
        <div class="controls">
            <a @click="nextVideo" href="#" class="controls__next">&#709;</a>
        </div>
        <video :class="animation" class="animate__animated " :src="src" autoplay muted></video>
    </div>
</template>

<style scoped>
    video{
        width: 100%;
        max-height: 100%;
    }
    .controls{
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        z-index: 10;
    }

    .controls__next{
        font-size: 2em;
    }

    .video{
        position: relative;
        width: 100%;
    }
</style>
