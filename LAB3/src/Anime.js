export default class Anime{
    constructor(temp){
        this.temp = temp;
        this.getTempForCharacter();
    }

    getTempForCharacter(){
        if(this.temp <= 5 && this.temp > 0){
            let character = "eren";
            this.getQuotes(character);
        }else if(this.temp <= 10 && this.temp > 5){
            let character = "naruto";
            this.getQuotes(character);
        }else if(this.temp <= 15 && this.temp > 10){
            let character = "saitama";
            this.getQuotes(character);
        }else if(this.temp <= 20 && this.temp > 15){
            let character = "goku";
            this.getQuotes(character);
        }else if(this.temp <= 25 && this.temp > 20){
            let character = "luffy";
            this.getQuotes(character);
        }
    }

    getQuotes(character){
        const url = `https://animechan.vercel.app/api/quotes/character?name=${character}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.displayQuotes(data);
            });
    }

    displayQuotes(data){
        const animeTitle = data[0].anime;
        document.querySelector(".anime__title").innerHTML = "It's time for a quote from " + animeTitle;

        //give me a random quote 
        const randomQuote = Math.floor(Math.random() * data.length);
        const animeQuote = data[randomQuote].quote;

        const p = document.createElement("p");
        p.innerText = animeQuote;
        p.classList.add("anime__quote");
        document.querySelector(".quote").appendChild(p);

        if(animeTitle === "One Punch Man"){
            let img = document.querySelector("#app");
            // give img background-image
            img.style.backgroundImage = "url('https://images8.alphacoders.com/669/669047.png')";
            //add class to img
            img.classList.add("bg");

            /*let img = document.createElement("img");
            img.src = "https://images8.alphacoders.com/669/669047.png";
            //add class to img
            img.classList.add("anime__img");
            // append img to anime__img
            document.querySelector("#app").appendChild(img);*/
        }
        if(animeTitle === "Attack on Titan"){
            let img = document.createElement("img");
            img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2F8%2F0%2F7%2F660213-large-eren-yeager-wallpapers-3840x2160-for-windows-10.jpg&f=1&nofb=1&ipt=0557d3e2e22160e13fd68aeb8f33fc8e0012fcc73b3455f8b68550cc08ee0cbb&ipo=images";
            //add class to img
            img.classList.add("anime__img");
            // append img to anime__img
            document.querySelector(".images").appendChild(img);
        }
        if(animeTitle === "Naruto"){
            let img = document.createElement("img");
            img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FnORJizV.jpg&f=1&nofb=1&ipt=b84249b616bc1b9bb28a53c3ebdbdc820b81340d214d74f395ea68b8c3c528da&ipo=images";
            //add class to img
            img.classList.add("anime__img");
            // append img to anime__img
            document.querySelector(".images").appendChild(img);
        }
        if(animeTitle === "Dragon Ball Z"){
            let img = document.createElement("img");
            img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fgoku-new-dragon-ball-z-art_bGZqa26UmZqaraWkpJRobWllrWdma2U.jpg&f=1&nofb=1&ipt=40c1cb98996d1f5dfdbb015a5cd52431e59e238a73dfab801200752efadf62c7&ipo=images";
            //add class to img
            img.classList.add("anime__img");
            // append img to anime__img
            document.querySelector(".images").appendChild(img);
        }
        if(animeTitle === "One Piece"){
            let img = document.createElement("img");
            img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F7P50iRv.jpg&f=1&nofb=1&ipt=ebf71ab2d30e0e9d0015e6a781e479f5ae8c65d6e239e6898cdefb510158363d&ipo=images";
            //add class to img
            img.classList.add("anime__img");
            // append img to anime__img
            document.querySelector(".images").appendChild(img);
        }
    }
}
