export default class Anime{
    constructor(temp){
        this.temp = temp;
        this.getTempForCharacter();
    }

    getTempForCharacter(){
        if(this.temp <= 10 && this.temp > 5){
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
        console.log(character);
    }
}