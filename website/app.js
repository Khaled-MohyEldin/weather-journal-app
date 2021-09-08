
// fetch('https://api.nasa.gov/planetary/apod?api_key=5qpe4zBdO5ielPr1eI5rfgJP5g14WB3Xc7EhEagQ')
//     .then(res=> res.json())
//     .then(data=> console.log(data))

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const keyAPI = '&appid=56292382f1b2c792b80329cef1622e81';

const genbtn = document.querySelector('#generate');
const temp = document.querySelector('#temp');
const content = document.querySelector('#content');


const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

    try {
        const newData = await response.json();
        return newData;
    }catch(error) {
    console.log("error", error);
    }
}; 

const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
      const allData = await request.json()
      // console.log(allData)
      temp.innerHTML = `<p>Tempretaure: ${Math.round(allData[0].temp)}&#8451;<br>
      Weather: ${allData[0].weather}</p>`;

      content.innerHTML = `<p>Feeling: ${allData[0].feeling}</p>`
    }
    catch(error) {
      console.log("error", error);
    }
  };
  

const getweather = async ()=> {
    const zip =  document.querySelector('#zip').value;
    const feeling = document.querySelector('#feelings').value;
    // const zcode = '75001,fr';
    const response = await fetch(`${baseURL+zip}&units=metric${keyAPI}`)
    const data = await response.json()
    // console.log(data)
    // console.log(data.name, data.main.temp, data.main.humidity, data.weather[0].main)
    const newData = { temp: data.main.temp, weather: data.weather[0].main, feeling: feeling}
    // console.log(newData)

    postData('/addTemp',newData)
    
    retrieveData('/all')
    
    // const temp = document.querySelector('#temp');
    // const content = document.querySelector('#content');

    // temp.innerHTML = `<p>Tempretaure: ${Math.round(data.main.temp)}&#8451;<br>
    // Weather: ${data.weather[0].main}</p>`;

    // content.innerHTML = `<p>Feeling: ${feeling}</p>`

    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = document.querySelector('#date');
    // console.log(currentDate.toLocaleDateString('ar-EG', options))
    date.innerHTML= `<p>${currentDate.toLocaleDateString('en-US', options)}</p>`
}




genbtn.addEventListener('click', getweather)