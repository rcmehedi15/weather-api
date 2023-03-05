const API_KEY = `cccd20f55b6d176a96be108ca888b43f`;

// api data fetching 
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

    //  click button 
document.getElementById('btn-search').addEventListener('click', function(){
    // search field input value
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city 
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})
// temperature display , data value store
const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    
}



loadTemperature("Dhaka")