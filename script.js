const weatherApi = {
    key: "37277d48d2891cc145121afc5f4e5469",
    baseUrl: "http://api.openweathermap.org/data/2.5/weather",
}

const searchInput = document.getElementById('input-box');

searchInput.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        console.log(searchInput.value);
        getWeatherReport(searchInput.value);
        document.querySelector('.content').style.display = "block";
    }
    
});


function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`) 
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}


function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`; 
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `Max:${Math.ceil(weather.main.temp_max)}&deg;C  Min:${Math.floor(weather.main.temp_min)}&deg;C`;

    document.getElementById("min-max").style.wordSpacing = "20px";

    let weatherType = document.getElementById('report');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://play-lh.googleusercontent.com/I9EEfFx5YRpgzMdVUA5SssBdpjMiSutp2-x__Cm879HDmHJ4S30f9RSBw9ftqfFpZ0Y')"; 
    } 
    else if(weatherType.textContent == 'Clouds') {
         document.body.style.backgroundImage = "url('https://images.all-free-download.com/images/graphicthumb/clouds_cloudiness_forward_238873.jpg')";
    }
     else if(weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/23/746497-smog.jpg')";
    } 
    else if(weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?b=1&k=6&m=1257951336&s=170667a&w=0&h=x-PADIs1xwZiRPxjoPxKYg-htdIlmTyELArR1yWnCE8=')";
    }
     else if(weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('https://cdn.images.express.co.uk/img/dynamic/153/590x/us-weather-snow-storm-California-mountains-flood-warnings1-1074760.jpg?r=1547914160147')";
    } 
    else if(weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
    }
}


function dateManage(dateArgument) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
    let months = [01,02,03,04,05,06,07,08,09,10,11,12];

    let day = days[dateArgument.getDay()];
    let date = dateArgument.getDate();
    let month = months[dateArgument.getMonth()];
    let year = dateArgument.getFullYear();

    document.getElementById("date").style.wordSpacing = "10px";

    return `${day}, ${date}-${month}-${year}`;
}
