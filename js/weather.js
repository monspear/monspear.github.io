const APIKEYS = "0feceafbf770c46d0eec143d54f3c930";

function onGeoSuccess(position){
    const lat = position.coords.latitude; // 사용자 위치 위도
    const lon = position.coords.longitude; // 사용자 위치 경도
    //console.log("You live in ",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEYS}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("div.region-top-bar #weather span:first-child");
        const city = document.querySelector("div.region-top-bar #weather span:last-child");
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerHTML = data.name;

        
    }); // 자바스크립트가 이 url을 부름
}
function onGeoFail(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFail);



