let backgroundPhoto = [
    'url(1433880.jpg)',
    'url(1857435.jpg)',
    'url(1857436.jpg)',
    'url(1857441.jpg)',
    'url(1857445.jpg)',
    'url(1857533.jpg)',
    'url(1857565.jpg)',
    'url(1244202.jpg)'
];

let weatherData = [
    {city:'Tabriz' , temp:'1°C' , condition:'rainy' , Humidity:'43%' , windSpeed:'12km/h'},
    {city:'Shiraz' , temp:'21°C' , condition:'sunny' , Humidity:'22%' , windSpeed:'0km/h'},
    {city:'Tehran' , temp:'27°C' , condition:'sunny' , Humidity:'21%' , windSpeed:'11km/h'},
    {city:'Isfahan' , temp:'16°C' , condition:'sunny' , Humidity:'29%' , windSpeed:'3km/h'},
    {city:'Bandar Lengeh' , temp:'27°C' , condition:'sunny' , Humidity:'73%' , windSpeed:'10km/h'},
    {city:'Yazd' , temp:'23°C' , condition:'sunny' , Humidity:'19%' , windSpeed:'0km/h'},
    {city:'Ardabil' , temp:'11°C' , condition:'rainy' , Humidity:'77%' , windSpeed:'0km/h'}
]

let $ = document;
//background setting
$.addEventListener('DOMContentLoaded', backgroundFunc)
function backgroundFunc(){
let bodyElem = $.querySelector('body');
let backgroundIndex = Math.floor(Math.random()*(backgroundPhoto.length));
bodyElem.style.backgroundImage = backgroundPhoto[backgroundIndex];
};





let searchBtn = $.querySelector('button');
searchBtn.addEventListener('click', searchFunc);
function searchFunc(){
    //getting input value
    let inputValue = $.querySelector('input').value;
    let isInData = weatherData.some(function(data){
        return  data.city == inputValue;
    })
    
    //getting index of value
    if(isInData){
        let index = weatherData.findIndex(function(data){
            return data.city == inputValue;
        })

    //containers style
    let container = $.querySelector('div');
    container.style.height = '420px'; 
    container.style.marginTop = '200px';

    //hidden 'loading...'
    let pTag = $.querySelector('p');
    pTag.style.display = 'none';

    //adding citys name
    let h2Elem = $.createElement('h2');
    h2Elem.innerHTML = 'Weather in '+ weatherData[index].city;
    container.append(h2Elem);

    //styling h2
    h2Elem.style.paddingLeft = '55px';
    h2Elem.style.color = '#fff';
    h2Elem.style.fontFamily = 'sans-serif';
    h2Elem.style.paddingTop = '10px';
    h2Elem.style.fontWeight = 'lighter'

    //adding teperature 
    let temperature = $.createElement('h1');
    temperature.innerHTML = weatherData[index].temp;
    container.append(temperature);

    //styling temperature
    temperature.style.paddingLeft = '55px';
    temperature.style.color = '#fff';
    temperature.style.fontFamily = 'sans-serif';
    temperature.style.fontSize = '60px';
    temperature.style.fontWeight = 'lighter';
    temperature.style.marginBottom = '0';
    temperature.style.paddingBottom ='0'

    //adding weather icon
    // let icon = $.createElement('i');
    // icon.setAttribute('class', 'faLightfaCloudsSun');
    // container.append(icon);

    //adding weather condition 
    let condition = $.createElement('p');
    condition.innerHTML = weatherData[index].condition;
    container.append(condition);

    //styling condition
    condition.style.fontSize = '20px';
    condition.style.marginBottom = '0';


    //adding Humidity
    let humidity = $.createElement('p');
    humidity.innerText = 'Humidity: ' + weatherData[index].Humidity;
    container.append(humidity);

    //styling humidity
    humidity.style.marginTop = '0';
    humidity.style.marginBottom = '0';

    //addin wind speed
    let windSp = $.createElement('p');
    windSp.innerHTML = 'Wind Speed: '+ weatherData[index].windSpeed;
    container.append(windSp);

    //styling wind speed
    windSp.style.marginTop = '0';
    

    }else{
        alert('please enter the city name correctly!')
    }


}
