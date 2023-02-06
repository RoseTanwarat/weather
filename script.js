// select elements เข้าถึง ele ตัวเเรก

const iconElement = document.querySelector(".weather-icon"); // icon
const tempElement = document.querySelector(".temperature-value > p"); //องศา
const descElement = document.querySelector(".temperature-description"); // วันเวลา
const locatElement = document.querySelector(".location > p"); //ภูมิภาค
// const notificElement = document.querySelector(".notification"); 
// const uvElement = document.querySelectorAll(".uv");
// const humElement = document.querySelectorAll(".humidity");
// const windElement = document.querySelectorAll(".wind");
const weatherObject = document.querySelectorAll(".box-zone");
//----------------------------------------------------------
// function theResponse(response){
//     const jsonObject = response
//     tempElement.innerHTML = parseInt(jsonObject.current.temp_c);
//     locatElement.innerHTML = jsonObject.location.region;
//     descElement.innerHTML = jsonObject.location.localtime;
// }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9dca6137dfmshaae9eb8375f5bedp104e11jsnc490037e23b0',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
//ครั้งแรก
fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Bangkok', options)
.then((response) => response.json())
// .then(response => console.log(response))
.then((json)=>{
   const jsonObject = json;
   tempElement.innerHTML = parseInt(jsonObject.current.temp_c)+ "°";
   descElement.innerHTML = jsonObject.location.localtime;
   locatElement.innerHTML = jsonObject.location.region;
	// console.log("36",weatherObject)
   
	weatherObject.forEach((itemWeater)=> {
	// console.log("38",itemWeater.getAttribute("id"))
	const info = itemWeater.getAttribute("id");
	const childValueContainer = itemWeater.lastElementChild

	// console.log(childValueContainer)
	console.log(json.current)

	let value = jsonObject.current[info]
	switch(info){
		case "humidity":
				value = value.toString() +" "+"%"
		break;
		case "wind_degree":
			value = value.toString() +" "+"degree"
		break 
	
	}
	if(jsonObject.current.temp_c<=29){
		document.getElementById('icon').src = "icon/cloudy.png"

// console.log(imageTag)
	}else if(jsonObject.current.temp_c>29){
		document.getElementById('icon').src = "icon/cloudy-sun.png"

	}
	console.log(value)
	childValueContainer.innerHTML=value
   });
	 
})
.catch(err => console.error(err));
//โหลดใหม้ ทุก10 วินาที                                                                                             
setInterval(()=>{
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Bangkok', options)
	.then((response) => response.json())
	// .then(response => console.log(response))
    .then((json)=>{
       const jsonObject = json;
       tempElement.innerHTML = parseInt(jsonObject.current.temp_c)+ "°";
       descElement.innerHTML = jsonObject.location.localtime;
       locatElement.innerHTML = jsonObject.location.region;
		// console.log("36",weatherObject)
       
	    weatherObject.forEach((itemWeater)=> {
		// console.log("38",itemWeater.getAttribute("id"))
		const info = itemWeater.getAttribute("id");
		const childValueContainer = itemWeater.lastElementChild

		// console.log(childValueContainer)
		// console.log(json.current)

		let value = jsonObject.current[info]
		switch(info){
			case "humidity":
					value = value.toString() +" "+"%"
			break;
			case "wind_degree":
				value = value.toString() +" "+"degree"
			break
			default: value = value
		
		}
		console.log(value)
		childValueContainer.innerHTML=value
	   });
		 
    })
	.catch(err => console.error(err));
},10000)


// console.log(window)
// console.log(iconElement)


//----------------------------------------------------------

// //app data
// const weather = {};
// weather.temperature = {
//     unit:"celsius"
// }

// //const api key 
// const key = "9dca6137dfmshaae9eb8375f5bedp104e11jsnc490037e23b0";

// //check if the browser support geolocation
// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);

// }else{
//     notificElement.getElementsByClassName.display = "block";
//     notificElement.innerHTML = "<p> don't support";
// }

// // set user position
// function setPosition(position){
// let latitude = position.location.lat;
// let longitude = position.location.lon;
// getWeather(latitude,latitude)
// }

// // show error
// function showError(error){
//     notificElement.style.display = "block";
//     notificElement.innerHTML = "<p> don't support";
// }

// //get api provider
// function getWeather(latitude,longitude){
//     let api = "https://weatherapi-com.p.rapidapi.com/current.json?q=${longitude}&lon={longitude}&appid=${key}"
//     consol.log(api);
// }

