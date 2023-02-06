
const tempElement = document.querySelector(".temperature-value > p"); //องศา
const descElement = document.querySelector(".temperature-description"); // วันเวลา
const locatElement = document.querySelector(".location > p"); //ภูมิภาค
const weatherObject = document.querySelectorAll(".box-zone");
const searchButton = document.querySelector(".btn");
const searchInput = document.querySelector(".input");
//----------------------------------------------------------
function enterPressed(event){
    if(event === "Enter"){
      findWeather();
    }
}
//ปุ่มถ้ามีการคลิก 
searchButton.addEventListener("click",findWeather);
searchInput.addEventListener("keyup",enterPressed);

//function หาข้อมูลสภาพอากาศ
function findWeather(){
    // ค่าที่พิมพ์ในช่อง search
    if(searchInput.value === ""){
    alert("Please Enter City Name !");
    } else {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9dca6137dfmshaae9eb8375f5bedp104e11jsnc490037e23b0',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + searchInput.value, options)
            .then(res => res.json())
            .then(response => theResponse(response))
            .catch(err => { 
                alert("Something went wrong !");
                console.error(err) } );
    }
}
function theResponse(json){
   const jsonObject = json;
   tempElement.innerHTML = jsonObject.current.temp_c+ "°";
   descElement.innerHTML = jsonObject.current.condition.text;
   locatElement.innerHTML = jsonObject.location.name;
	// console.log("36",weatherObject)
	weatherObject.forEach((itemWeater)=> {
	const info = itemWeater.getAttribute("id");
	const childValueContainer = itemWeater.querySelector(".weather-information__value")
	childValueContainer.innerHTML=jsonObject.current[info]
    
    let value = jsonObject.current.condition.text
	// console.log("42",value)
	if(value === "Sunny" || value === "Clear"){
		document.getElementById('icon').src = "icon/clear.png";
        // console.log("43",value)
	}else if(value === "Partly cloudy" || value === "Cloudy" || value ==="Mist"){
		document.getElementById('icon').src = "icon/cloudy.png";
        // console.log("44",value)
	}else if(value === "Patchy rain possible" || value ==="Light rain shower" || value=="Light rain"){
	    document.getElementById('icon').src = "icon/rainy.png";
        // console.log("45",value)
	}

   }); 
}



