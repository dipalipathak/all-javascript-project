const apikey ="366436320c12579b7a28b57f3f651720";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather (city){
    const response = await fetch(apiUrl+ city + `&appid=${apikey}`);

    if(response.status=== 404 && response.ok==false){
        document.getElementById("error_message").style.display="block";
        //  document.querySelector(".weather").style.display = "none";
    }
    else{
        
    let data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src 
        = "cloud.png";
    }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src 
        = "rain.png";
}
 else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src 
    = "drizzle.png";
}
 else if(data.weather[0].main == "Clear"){
    weatherIcon.src 
    = "clear.png";
}
 else if(data.weather[0].main == "Mist"){
    weatherIcon.src 
    = "mist.png";}

    document.querySelector(".weather").
    style.display= "block";
    document.querySelector(".error").style.display = "none";
 }
}
searchBtn.addEventListener("click", ()=>{ checkWeather(searchBox.value);

});

