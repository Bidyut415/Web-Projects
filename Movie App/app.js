// these are all api link 

/*this api for all time favriou movie  */
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// this is the img path 
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// this api for movie search
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


 const moviebox=document.querySelector(".moviebox");

// in this function we fetch the movies from the server using api 
 const getMovies= async(api)=>{
    const response=await fetch(api)
    const data=await response.json()// conver the data into json so that it easly go to the web page

  showMovies(data.results)// here call the how movies function 
 }
 
 // showMovies function start from here 
 const showMovies=(data)=>{
    moviebox.innerHTML="";// it make the movie box empty 
    data.forEach(
        (item) => {
            const bidyut = document.createElement("div")//creat element div for the movie box
            bidyut.classList.add("box")//set a class 'box' to the div
            //creat all the html part using javascript 
            bidyut.innerHTML=`   
            <img src="${IMGPATH+item.poster_path}" alt="movie pic">

            <div class="overview">
                <h2>${item.original_title}:Rating:- ${item.vote_average}</h2>
                <p> ${item.overview} </p>
                
            </div>`;
            moviebox.appendChild(bidyut)//set the node'bidyut' into the moviebox div
        }
    )

 }

 // here the search part design 
 document.querySelector("#search").addEventListener(
    "keyup",//this event teake value from the search bar 
    function(event){
        if(event.target.value!=""){
            getMovies(SEARCHAPI+event.target.value)// search movie using api here 
        }else{
            getMovies(APIURL)// show the all favriout movie here 
        }
    }

 )
 getMovies(APIURL)// init call of favriout movie 