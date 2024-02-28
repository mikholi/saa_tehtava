const temp_span = document.querySelector('#temp')
const speed_span = document.querySelector('#speed')
const direction_span = document.querySelector('#direction')
const description_span = document.querySelector('#description')
const icon_img = document.querySelector('img')
const url = 'https://api.openweathermap.org/data/2.5/weather?'
const icon_url = 'http://openweathermap.org/img/wn/'
const api_key = '7e26dea01ad94e7809520aa94775aa55'



const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.querySelector('#lat').innerHTML = position.coords.latitude.toFixed(3) + ', '
            document.querySelector('#lng').innerHTML = position.coords.longitude.toFixed(3)
        }),(error => {
            alert(error)
        })
    } else {
        alert("Your browser does not support geolocation!")
    }
}

const getWeather = (lat,lng) => {
    const address = url +
    'lat=' + lat +
    '&units=metric' +
    '&appid=' + api_key
    axios.get(address)
    .then(response => {
        const json = response.data
        temp_span.innerHTML = json.main.temp + '&#8451;'
    }).catch(error => {
        alert(error)
    })
}

getLocation()