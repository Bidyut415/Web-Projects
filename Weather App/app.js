const search=document.querySelector("#search")
const form= document.querySelector("form")
const Weather=document.querySelector("#Weather")

async function getData(city){
    Weather.innerHTML=`<h2> loading.....</h2>`
    // using this api fetch the deatails
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN&units=metric`;
    // (&units=metric) to convert the temp into celcius
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': '8c6a0b9326msh8db8a340f13503ep152f62jsn248198b779e7',
		    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	    }
    };

    // this part for control the api and response
    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
        console.log(result);
	    return showData(result)
    } catch (error) {
	    console.error(error);
    }
}
// this function use for the show the data in the body 
function showData(result){

    // for wrong input 
    if(result.cod=="404"){
        Weather.innerHTML=`<h2> ${result.message} </h2>`
        return;
    }
    // here show the data using  innerHTML
    Weather.innerHTML=`<div>
</div>
<div>
    <h2>${result.main.temp}.C</h2>
    <h4>${result. weather[0].main}</h4>
</div>
</div>`
}

form.addEventListener(
    "submit",
    function(event){
        getData(search.value)
        event.preventDefault();
    }
)