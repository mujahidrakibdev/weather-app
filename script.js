const form = document.querySelector(".form")
const input = document.querySelector(".user-input")
const countryName = document.querySelector(".country-name")
const flag = document.querySelector(".flag")
const condition = document.querySelector(".condition")
const degree = document.querySelector(".degree")
const windSpeed = document.querySelector(".wind-speed")
const humidity = document.querySelector(".humidity-value")
const conditionImage = document.querySelector(".condition-img")
const container = document.querySelector(".container")


const apiKey = "7fcd6294c5c36691a8de8a2196d49a0c"



form.addEventListener("submit", (e) => {
    e.preventDefault()
    searchWeather()
})

async function searchWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=${apiKey}`
    const response = await fetch(apiUrl)
    const json = await response.json()
    console.log(json)

    input.value = ""

    if (json.cod == "200") {
        conditionImage.src = `images/${json.weather[0].icon}.png`
        countryName.innerText = json.name 
        flag.src = `https://flagsapi.com/${json.sys.country}/shiny/64.png`
        condition.innerText = json.weather[0].description
        degree.innerHTML = `${Math.round(json.main.temp)}<span class="degree-icon">°</span>`
        humidity.innerText = `${json.main.humidity}%`
        windSpeed.innerText = `${json.wind.speed}km/h`
    } else{
        container.classList.add("shake")
        setTimeout(()=> {
            container.classList.remove("shake")
        }, 1000)

    }

    
    
}