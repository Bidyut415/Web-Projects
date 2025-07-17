const enddate= "10 April 2024 2:00 pm";// set the end date
document.getElementById("end-date").innerText=enddate;
// fetch  all the input tag
const inputs=document.querySelectorAll("input");// it return a list of node 

function clock(){
    const end=new Date(enddate);
    // get the present date using date()
    const now=new Date();
    const diff=(end-now)/1000;
    
    // it use to avoid - number 
    if (diff<0) return;

    // convert into days
    inputs[0].value=Math.floor(diff/3600/24);
    //convert into hours
    inputs[1].value=Math.floor(diff/3600)%24;
    // onevrt into minuts
   inputs[2].value=Math.floor(diff/60)%60;
    //convert into seconds
    inputs[3].value=Math.floor(diff)%60;
}

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

// initial call
clock()

// per second call
setInterval(
    ()=>{clock()},1000
)