
const cityElement = document.querySelector(".city span");
const indexElement = document.querySelector(".indexAir span");
const index = document.querySelector(".indexAir");
const date = document.querySelector(".day span")
const btnLocation = document.getElementById('btn_location');
const btnSearch = document.getElementById('btn_search');
const City = document.getElementById('city');

// API KEY
const air_key = process.env.Air_key;

const air = {};


// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    alert("Your browser doesn't support geolocation");
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getData(latitude, longitude);
    
}
    

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    alert(error.message);
}

// FUNCTION GEOLOCATION
function getLocation(){
      
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
         latitude = position.coords.latitude;
         longitude = position.coords.longitude;
         
        getData(latitude,longitude);
        
         
      });
   } else {
        alert("Geolocation is not supported by this browser.");
      }
  }

  btnLocation.addEventListener('click', getLocation);
    
    
// GET AIR POLLUTION FROM COORDINATES

function getData(latitude,longitude){

    let api = `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${air_key}`;

     fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            air.index = data.data.aqi;
            air.city = data.data.city.name;
            air.time = data.data.time.s;
             
        })
        .then(function(){
            let pollution = air.index;
            showData();
            changeBackground(pollution);
        })
}

// DISPLAY INFORMATIONS

function showData(){
    cityElement.innerHTML = `${air.city}<span> </span>`;
    indexElement.innerHTML = `${air.index}<span> </span>`;
    date.innerHTML = `${air.time}<span> </span>`;
    
}


//GET AIR POLLUTION FROM SEARCH  BAR

 function searchCity() {
    let city = document.getElementById('city').value;

    let api = `https://api.waqi.info/search/?token=${air_key}&keyword=${city}`;

     fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        air.city = data.data[0].station.name;
        air.index = data.data[0].aqi;
        air.time = data.data[0].time.stime;
        
    })
    .then(function(){
       
        let pollution = air.index;

        showData();
        changeBackground(pollution);
        
    })
    .catch(error  => {
        alert("Non è stata trovata nessuna località.\nSi prega di inserire un'altra città.");
    })
        
}

btnSearch.addEventListener('click', searchCity);

City.addEventListener('keydown', function(e) {
    if(e.keyCode === 13){
        searchCity();
    }
});




// CHANGE BACKGROUND INDEX AIR

function changeBackground(pollution){
    if(pollution<=50){
        index.style.background = "rgb(58, 194, 58)";
        index.style.border = " rgb(58, 194, 58)";
    }else if(pollution>=51 && pollution <=100) {
        index.style.background = "rgb(242, 245, 54)";
        index.style.border = " rgb(242, 245, 54)";
    }else if(pollution>=101 && pollution <=150) {
        index.style.background = "rgb(243, 156, 57)";
        index.style.border = " rgb(243, 156, 57)";
    }else if(pollution>=151 && pollution <=200) {
        index.style.background = "rgb(245, 22, 22)";
        index.style.border = " rgb(245, 22, 22)";
    }else if(pollution>=201 && pollution <=300) {
        index.style.background = " rgb(136, 69, 245)";
        index.style.border = " rgb(136, 69, 245)";
    }else if(pollution>300) {
        index.style.background = "rgb(160, 59, 59)";
        index.style.border = " rgb(160, 59, 59)";
    }else {
        index.style.background = "lightgrey";
        index.style.border = " lightgrey";
    }
}
    
