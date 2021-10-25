



const weatherByCity = async function(city){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=1b3936bbd58c5263df56aedca891afae`)
    let data = response.json()
    return data
}


weatherByCity('Denver').then(data => console.log(data))


const weatherForm = document.getElementById('weatherForm')

weatherForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
   
    let city = e.target.city.value;
    let cityWeather = await weatherByCity(city);
    
   
    let current = document.querySelector('.card-title');
    current.innerHTML = `Current Temperature: ${cityWeather.main.temp.toFixed()}°F`

    let forecast = document.querySelector('.card-text');
    forecast.innerHTML = `Forecast: ${cityWeather.weather[0].description}`
    
    let feelsLike = document.querySelector('#list1');
    feelsLike.innerHTML = `Feels Like: ${cityWeather.main.feels_like.toFixed()}°F`

    let max = document.querySelector('#list2');
    max.innerHTML = `Today's High: ${cityWeather.main.temp_max.toFixed()}°F`
    

    let min = document.querySelector('#list3');
    min.innerHTML = `Today's Low: ${cityWeather.main.temp_min.toFixed()}°F`
    
    let humidity = document.querySelector('#list4');
    humidity.innerHTML = `Humidity: ${cityWeather.main.humidity}%`

    let wind = document.querySelector('#list5');
    wind.innerHTML = `Wind: ${cityWeather.wind.speed.toFixed()} mph`
   

    // let sunrise = document.createElement('p1');
    // sunrise.innerHTML = new Date(cityWeather.sys.sunrise * 1000).toLocaleTimeString()
    // document.body.append(sunrise)

    // let sunset = document.createElement('p1');
    // sunset.innerHTML = new Date(cityWeather.sys.sunset * 1000).toLocaleTimeString()
    // document.body.append(sunset)





})