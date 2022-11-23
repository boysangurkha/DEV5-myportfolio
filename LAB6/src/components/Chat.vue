<script setup>
    import { ref, reactive, onMounted } from 'vue';

    let username = reactive([]);
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
                        console.log(username.value)
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
            <h2>{{ username.value }}</h2>
            <p>{{ text }}</p>
        </div>
    </div>
    <div class="input">
            <input type="text" v-model="comment" placeholder="Add comment..."> 
            <button @click="addText">Post</button>
    </div>
</template>

<style scoped>
    .texts {
        background-color: rgb(237, 237, 237);
        height: 300px;
        overflow-y: scroll;
        margin-top: 40px;
        overflow-x: hidden;
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
        
        padding: 0px 1rem;
    }

    .input{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    input{
        border: none;
        border-radius: 50px;
        background-color: rgb(237, 237, 237);
        padding: 1em;
        outline: none;
    }



    input::placeholder {
        color: rgb(92, 92, 92);
        font-size: 1em;
    }
    button{
        color: rgb(255, 255, 255);
        border: none;
        border-radius: 50px;
        background-color: rgb(18, 179, 142);
        padding: 1em 2em;
        margin-left: 10px;
    }
    button:hover{
        cursor: pointer;
    }
</style>
