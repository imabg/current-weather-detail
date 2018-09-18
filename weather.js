class Weather{
    constructor(){
        this.key = "599701b3e428647e126f0a586fb33c98";
    }
    async showWeather(city){
       const response  = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`)
       const data = await response.json();

       return{
           data
       }

    }
}