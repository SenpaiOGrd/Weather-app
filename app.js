let valuesearch = document.querySelector("#valueSearch");
let city=document.querySelector("#city");
let temp=document.querySelector("#temp");
let description=document.querySelector(".description");
let clouds=document.querySelector("#clouds");
let humidity=document.querySelector("#humidity");
let pressure=document.querySelector("#pressure");
let form=document.querySelector("#form");
let main=document.querySelector("main");


form.addEventListener("submit",(e) => {
    e.preventDefault();
    if(valuesearch.value !=""){
        searchWeather();
    }
})

let id='d7e0ad9fe06e504c1fc8b6a8d30699e0';
let url ='https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod==200){
            let cityName=document.querySelector(".cityName");
            cityName.innerText= data.name;
            let flag=document.querySelector(".flag");
            flag.src='https://flagsapi.com/'+data.sys.country+'/shiny/32.png'

            let tempImg=document.querySelector(".tempImg");
            tempImg.src='https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';

            let degree=document.querySelector(".degree");
            degree.innerText=data.main.temp;

            description.innerText=data.weather[0].description;
            clouds.innerText=data.clouds.all;
            humidity.innerText=data.main.humidity;
            pressure.innerText=data.main.pressure;
        }else{
            //error
            main.classList.add("error");
            setTimeout( () => {
                main.classList.remove("error");
            },1000);

        }
        valueSearch.value="";
    })
}
const initApp =() => {
    valueSearch.value="Japan";
    searchWeather();
}
initApp();