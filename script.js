const button = document.getElementById('searchButton');
const input = document.getElementById('cityInput');

const API_KEY = 'b201346b7c030b10b5e59b18fffb7bd6';  // <-- replace with your OpenWeatherMap API key

button.addEventListener('click', () => {
  const city = input.value.trim();
  if (!city) {
    console.log("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      // Extract info
      const name = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      weatherResult.innerHTML = `
  <h2>Weather in ${data.name}</h2>
  <p>Temperature: ${data.main.temp} °C</p>
  <p>Description: ${data.weather[0].description}</p>
`;


      console.log(`Weather in ${name}: ${temp}°C, ${desc}`);
    })
    .catch(err => {
      console.log("Error:", err.message);
    });
});
const weatherResult = document.getElementById('weatherResult');
