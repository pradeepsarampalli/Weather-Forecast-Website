const inputText = document.getElementById("textinput")
let apiGeocode= "your gepcode api here"; 
let apiOpenWeather = "your openweather api here";
let city = ""

const contentsection = document.querySelector(".content-section")
const notfound = document.querySelector('.notfound')
const leftnl = document.querySelectorAll(".left-section-display p")
const rightnl = document.querySelectorAll(".right-section-display p")
const centernl = document.querySelectorAll(".center-section-display p")
const centerinfonl = document.querySelectorAll(".center-section-info p")
const cities = document.querySelectorAll("cities")
const weatherimg = document.getElementById("weather-img")


async function fetchCity(city){
    try{
    if(!city){
        contentsection.style = "display: none !important"
        notfound.style="display: block"
    }
    else{
    const response = await fetch(`https://geocode.maps.co/search?q=${city}&api_key=${apiGeocode}`);
    const data = await response.json();
    lat = data[0].lat
    lon = data[0].lon
    notfound.style="display: none"
    contentsection.style="display: grid"
    fetchWeather(lat,lon)
    }
    }
    catch(error){
        contentsection.style = "display:  none !important;"
        notfound.style="display: block"
    }
}
async function fetchWeather(lat,lon){
try{
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiOpenWeather}`);
const data = await response.json();
let leftinfo = [convertToTime(data.sys.sunrise),convertToTime(data.sys.sunset),Number(data.coord.lon).toFixed(2) +"°",Number(data.coord.lat).toFixed(2)+"°",data.clouds.all+" %"]
let j =0;
for(let i =1;i<leftnl.length;i+=2){
    leftnl[i].textContent = leftinfo[j];
    j++;
}
let rightinfo = [(Number(data.main.feels_like)-272).toFixed(2)+"°C",(Number(data.main.temp_min)-273.15).toFixed(2)+"°C",(Number(data.main.temp_max)-273.15).toFixed(2)+"°C",data.visibility+" m",data.clouds.all]
j =0;
for(let i =1;i<rightnl.length;i+=2){
    rightnl[i].textContent = rightinfo[j];
    j++;
}
let centerinfo = [data.main.humidity+" %",data.main.pressure + " hPa",data.wind.speed+" kmph"]
weatherimg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
j =0;
for(let i =1;i<centernl.length;i+=2){
    centernl[i].textContent = centerinfo[j];
    j++;
}
let centersecinfo = [data.name,(Number(data.main.temp)-273.15).toFixed(2)+"°C" ,data.weather[0].main]

for(let i =0;i<centerinfonl.length;i++){
    centerinfonl[i].textContent = centersecinfo[i];
}
 notfound.style="display: none"
    contentsection.style="display: grid"
}
catch(error){
    contentsection.style = "display:  none !important;"
    notfound.style="display: block"
}

}
function search(){
    city = inputText.value
    fetchCity(city);
}

function searchViaOption(citi){
    if(citi === 'Current Location'){
        window.onload =fetchCurrentCity();

    function fetchCurrentCity(){
    navigator.geolocation.getCurrentPosition((position)=>{
            fetchWeather(position.coords.latitude,position.coords.longitude)
    },()=>{
        contentsection.style = "display: none !important"
        notfound.style="display: block"
    })
}
    }
    else{
    city = citi;
    fetchCity(city)
    }
}


document.addEventListener("keydown",(event)=>{
    if(inputText.value)
    if(event.key ==="Enter"){
        search();
        inputText.value=""
    }
});

function fetchCurrentCity(){
    navigator.geolocation.getCurrentPosition((position)=>{
            fetchWeather(position.coords.latitude,position.coords.longitude)
    },()=>{
        contentsection.style = "display: none !important"
        notfound.style="display: block"
    })
}
function convertToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit'});
}