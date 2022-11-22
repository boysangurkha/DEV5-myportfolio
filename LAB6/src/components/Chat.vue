<script setup>
    import { ref, reactive, onMounted } from 'vue';

    let username = ref('');
    let texts = reactive([]);


    onMounted(() => {
        const api_url = "https://lab5-p379.onrender.com/api/v1/messages"
        fetch(api_url)
            .then(response => response.json())
            .then(data => {
                username.value = data[192].user;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].user == username.value) {
                        texts.push(data[i].text);
                        console.log(data[i].text);
                        console.log(username.value);
                    }
                }
            })
    });





</script>

<template>
    <div class="texts">
        <div class="container" v-for="text in texts" :key="text">
            <h2>{{ username }}</h2>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
    .texts {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }
</style>
