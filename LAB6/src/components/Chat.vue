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
                    }
                }
            })
    });

    //post request
    const postMessage = () => {
        const api_url = "https://lab5-p379.onrender.com/api/v1/messages"
        fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: username.value,
                text: texts[texts.length - 1]
            })
        })
    }

    let comment = "";
    const addText = () => {
        texts.push(comment);
        postMessage();
    }




</script>

<template>
    <div class="texts">
        <div class="container" v-for="text in texts" :key="text">
            <h2>{{ username }}</h2>
            <p>{{ text }}</p>
        </div>
        <div class="input">
            <input type="text" v-model="comment" placeholder="Add comment..."> 
            <button @click="addText">Post</button>
        </div>
    </div>
</template>

<style scoped>
    .texts {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }
    h2 {
        font-size: 0.9em;
        font-weight: 900;
    }
    p {
        color: black;
        font-size: 0.8em;
        margin-top: -10px;
    }
    .container{
        background-color: rgb(237, 237, 237);
        padding: 0px 1rem;
    }

    .input{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        padding: 0px 1rem;
        width: 100%;
    }
    input{
        border: none;
        border-radius: 50px;
        background-color: rgb(237, 237, 237);
        padding: 6px 0px 6px 9px;
    }
    input::placeholder {
        color: rgb(150, 150, 150);
        font-size: 0.8em;
    }
    button{
        color: rgb(150, 150, 150);
        border: none;
        background-color: rgb(255, 255, 255);
    }
</style>
