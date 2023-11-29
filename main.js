let loc=document.querySelector('.location input')
let button=document.querySelector('.search button')
let image=document.querySelector('.display img')
let foot=document.querySelector('footer')
let main=document.querySelector('main')
let wf=(data)=>{
    foot.style.display=''
        image.removeAttribute('src','images/404.png')
        main.classList.remove('hide')
        foot.classList.remove('hide')
        // Extract the information you need from the weatherData object
        let wSpeed=data.wind.speed
        let des=data.weather[0].main
        let hm=data.main.humidity
        let temp =Math.round(data.main.temp -273.15)
        //DOM
        let deg=document.querySelector('.deg p')
        let wind=document.querySelector('.wind .value p')
        let humidity=document.querySelector('.humidity .value p')
        let description=document.querySelector('.description')
        //them change
        switch(des){
            case 'Clear':
                image.setAttribute('src','images/clear.png')
                break
            case 'Clouds':
                image.setAttribute('src','images/cloud.png')
                break
            case 'Rain':
                image.setAttribute('src','images/rain.png')
                break
            case 'Mist':
                image.setAttribute('src','images/mist.png')
                break
            case 'Snow':
                image.setAttribute('src','images/snow.png')
                break
        }
        deg.innerHTML=`${temp}&deg`
        wind.innerHTML=`${wSpeed}Km/h`
        humidity.innerHTML=`${hm}%`
        description.innerHTML=des
}
let ft=(location)=>{
    const apiKey = 'b6f532bd37fa487a815dfece50f89343';
    const city =location; // Replace with the desired city name
    
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        return response.json();
    })
    .then(weatherData => {
            wf(weatherData)
    })
    .catch(error => {
        console.error('not found');
        image.setAttribute('src','images/404.png')
        main.classList.remove('hide')
        foot.style.display='none'
        let description=document.querySelector('.description')
        let deg=document.querySelector('.deg')
        /* deg.style.display='none'
        description.style.display='none' */
    });

}
button.addEventListener('click',()=>{
    let l=loc.value
    ft(l)
})


