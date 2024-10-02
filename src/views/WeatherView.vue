<template>
    <div class="container">
      <div class="header">
        <h1>WEATHER APP</h1>
      </div>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button @click="fetchWeatherByCity" class="search-button">Search</button>
      </div>
  
      <main v-if="weatherData">
        <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </main>
  
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
    import axios from "axios";
  
    const apikey = "d87a63c1875158688397034e4c5737b0"; // Your API Key
    
    export default {
      name: "App",
      data() {
        return {
          city: "",
          weatherData: null,
          error: null,
        };
      },
      computed: {
        temperature() {
          return this.weatherData ? Math.floor(this.weatherData.main.temp) : null;
        },
        iconUrl() {
          return this.weatherData
            ? `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
            : null;
        },
      },
      methods: {
        async fetchWeatherByCity() {
          if (this.city === "") {
            this.error = "City name cannot be empty!";
            return;
          }
  
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}&units=metric`;
  
          try {
            const response = await axios.get(url);
            this.weatherData = response.data;
            this.error = null; // Clear any previous error
          } catch (error) {
            this.error = "Unable to fetch weather data. Please check the city name or try again later.";
            console.error("Error fetching weather data:", error);
          }
        },
  
        async fetchCurrentLocationWeather() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
              const { latitude, longitude } = position.coords;
              const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
  
              try {
                await this.fetchWeatherData(url);
              } catch (error) {
                this.error = "Unable to fetch location weather data.";
              }
            });
          }
        },
  
        async fetchWeatherData(url) {
          try {
            const response = await axios.get(url);
            this.weatherData = response.data;
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        },
      },
  
      mounted() {
        this.fetchCurrentLocationWeather();
      },
    };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
  }
  
  .header h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .search-input {
    padding: 10px;
    font-size: 1rem;
    width: 300px;
    margin-right: 10px;
  }
  
  .search-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  
  main {
    margin-top: 20px;
  }
  
  main h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  main img {
    width: 100px;
    height: 100px;
  }
  
  main p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
  
  main span {
    font-size: 1.1rem;
    color: #555;
  }
  
  .error {
    color: red;
    margin-top: 20px;
  }
  </style>
  