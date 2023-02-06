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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9dca6137dfmshaae9eb8375f5bedp104e11jsnc490037e23b0',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=', options)
.then((response) => response.json())
// .then(response => console.log(response))
.then((json)=>{
   const jsonObject = json;
   tempElement.innerHTML = jsonObject.current.temp_c+ "°";
   descElement.innerHTML = jsonObject.current.condition.text;
   locatElement.innerHTML = jsonObject.location.name;
	// console.log("36",weatherObject)
   
	weatherObject.forEach((itemWeater)=> {
	// console.log("38",itemWeater.getAttribute("id"))
	const info = itemWeater.getAttribute("id");
	// const childValueContainer = itemWeater.lastElementChild
	const childValueContainer = itemWeater.querySelector(".weather-information__value")
	// console.log(childValueContainer)
	// console.log(json.current)
	childValueContainer.innerHTML=jsonObject.current[info]
	// console.log(value)
	// childValueContainer.innerHTML=value

//-----------------รูปเปลี่ยน---------------------------------
    let value = jsonObject.current.condition.text
	// console.log("42",value)
	if(value === "Sunny"){
		document.getElementById('icon').src = "icon/cloudy-sun.png"
	}else if(value === "Partly cloudy" || "Cloudy"){
		document.getElementById('icon').src = "icon/cloudy.png"
	}else if(value === "Mist" || "Patchy rain possible" ){
	    document.getElementById('icon').src = "icon/rainy.png"
	}

	// let codeCon = jsonObject.current.condition.code
	// if(codeCon == 1000){
	// 	document.getElementById('icon').src = "icon/cloudy-sun.png"
	// }else if(codeCon == 1103 || codeCon == 1106){
	// 	document.getElementById('icon').src = "icon/cloudy.png"
	// }else if(codeCon == 1130 || codeCon == 1163 || codeCon ==1180 || codeCon ==1183 ){
	//     document.getElementById('icon').src = "icon/rainy.png"
	// }

   });
})
.catch(err => console.error(err));

// console.log(window)
// console.log(iconElement)






