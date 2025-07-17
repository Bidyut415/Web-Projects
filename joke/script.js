const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)//set an evet to the btn

generateJoke()// call the function

// USING ASYNC/AWAIT 
async function generateJoke() {//description of the function
  const config = {
    headers: {
      Accept: 'application/json',// accept the api
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)// fetch the api 

    const data = await res.json()// convert the response into json formate
    //console.log(data);
  jokeEl.innerHTML = data.joke
}

