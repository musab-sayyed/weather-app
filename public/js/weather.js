const searchBtn = document.getElementById('search-btn')
const inputCityName = document.getElementById('search')
const cityName = document.getElementById('city-name')
const temp = document.getElementById('temp')
const weatherIconContainer = document.getElementById('weather-icon-container')
const tempContainer = document.getElementById('temp-container')

const getInfo = async (e) =>{
    e.preventDefault()
    let cityVal = inputCityName.value;
    tempContainer.classList.add('hidden')
    if(cityVal === ''){ 
        cityName.innerHTML = 'Please Enter the City Name'
    }
    else{
        try{
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8a9b3f87c28e46ffcaf38e9d2f3ddace`
            let response = await fetch(apiUrl)
            let data = await response.json()
            tempContainer.classList.remove('hidden')
            
            cityName.innerText = `${data.name}, ${data.sys.country}`
            temp.innerHTML = `${data.main.temp}&deg;C`

            let tempStatus = data.weather[0].main
            
            if(tempStatus === 'Sunny'){
                weatherIconContainer.innerHTML = `<i class="fas fa-sun weather-icon" style="color: #eccc68;" title="Sunny"></i>`
            }
            else if(tempStatus === 'Rainy'){
                weatherIconContainer.innerHTML = `<i class="fas fa-cloud-rain weather-icon" style="color: #a4b0be;" title="Rainy"></i>`
            }
            else if(tempStatus === 'Clouds'){
                weatherIconContainer.innerHTML = `<i class="fas fa-cloud weather-icon" style="color: #f1f2f6;" title="Clouds"></i>`
            }else{
                weatherIconContainer.innerHTML = `<i class="fas fa-cloud weather-icon" style="color: orange;" title="Haze"></i>`
            }
            console.log(tempStatus)
        }
        catch(err){
            cityName.innerText = 'Please Enter the City Name Properly'
            tempContainer.classList.add('hidden')
        }    
    }
}

searchBtn.addEventListener('click', getInfo)
// Day Date
const day = document.getElementById('day')
const date = document.getElementById('date')

const getCurrentTime = ()=>{
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthname = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let now = new Date()
    let day = weekday[now.getDay()] 
    let month = monthname[now.getMonth()]
    let date = now.getDate()
    returnObject = {
        day : day,
        month : month,
        date : date,
    }
    return returnObject
}

const currentDateTime = getCurrentTime()
day.innerText = currentDateTime.day,
date.innerText = `${currentDateTime.date} ${currentDateTime.month}` 
