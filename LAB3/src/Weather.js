import Anime from "./Anime.js";

export default class Weather{
    constructor(api_key){
        this.apiKey = api_key;
        // console.log("Weather class initialized" + this.apiKey);
        this.getLocation();
    }

    // Get user's location
    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        }else{
            console.log("Geolocation is not supported by this browser");
        }
    }


    getWeather(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;


        const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${this.apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("weather", JSON.stringify(data));
                console.log(data);
                this.displayWeather(data);
            });

    }

    displayWeather(data){
        const city = data.data[0].city_name;
        const temp = data.data[0].app_temp;
        document.querySelector(".weather__temp").innerText = "The temperature is " + temp + "°C" + " in " + city;
        const anime = new Anime(temp);
    }
}