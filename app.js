const API_KEY =`4479cd0090b21e2c43a70be188a2d43d`;

function blurFoucsF (id) {
    let input = document.getElementById('input-search').style.transition ='all .5s';
    
    document.getElementById(id).addEventListener('focus',()=>{
        document.body.style.backgroundImage = `url('img/bg3.jpg')`;
        document.getElementById('input-search').style.width='80%';
        document.getElementById('input-search').style.backgroundColor = 'whitesmoke';
    })
    document.getElementById(id).addEventListener('blur',()=>{
        document.getElementById('input-search').style.width='85%';
        document.body.style.backgroundImage = `url('img/thunderstorm-3440450_1280.jpg')`
        document.getElementById('input-search').style.backgroundColor = 'white';
    })
}
blurFoucsF('input-search');


const api = (cityName,apiKey)=>{
    const url =  `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>dispalyData(data))
}

document.getElementById('searchHandelar').addEventListener('click',function(){
    const cityName = document.getElementById('input-search').value;
    // const url =  `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>console.log(data));
    api(cityName,API_KEY)
})

function singleDisplayGet (id,InnerText){
    document.getElementById(id).innerText = InnerText
}
function dispalyData (data){
    document.getElementById('city').innerText =data.name ;
    singleDisplayGet('cel',data.main.temp)
    singleDisplayGet('sky',data.weather[0].main)
    console.log(data);
    
    const url = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let icon = document.getElementById('icon');
    icon.setAttribute('src',url);
}