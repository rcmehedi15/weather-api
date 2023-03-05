const API_KEY = `cccd20f55b6d176a96be108ca888b43f`;
const loadTemeratur = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
loadTemeratur("Dhaka")