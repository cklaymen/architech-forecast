import { useEffect, useState } from "react";

import { WEATHER_API_KEY, WEATHER_API_URL } from "../../config";

interface OpenweatherData {
  cod: string;
  city: {
    name: string;
    country: string;
  };
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      grnd_level: number;
      humidity: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

interface ForecastData {
  city: {
    name: string;
    country: string;
  };
  list: Array<{
    date: Date;
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
    weather: Array<{
      main: string;
      description: string;
      iconUrl: string;
    }>;
  }>;
}

const getWeatherApiUrl = (cityName: string) =>
  `${WEATHER_API_URL}/forecast?q=${cityName}&units=metric&appid=${WEATHER_API_KEY}`;

const mapOpenweatherData = (openweatherData: OpenweatherData): ForecastData => {
  const {
    city: { country, name },
    list,
  } = openweatherData;
  return {
    city: {
      country,
      name,
    },
    list: list.map(
      ({ dt, main: { temp, pressure, feels_like, humidity }, weather }) => ({
        date: new Date(dt * 1000),
        main: {
          temp,
          pressure,
          feels_like,
          humidity,
        },
        weather: weather.map(({ main, description, icon }) => ({
          main,
          description,
          iconUrl: `https://openweathermap.org/img/wn/${icon}.png`,
        })),
      })
    ),
  };
};

const useForecast = (cityName?: string) => {
  const [data, setData] = useState<ForecastData>();
  const [code, setCode] = useState<string>();
  useEffect(() => {
    const fetchForecastData = async () => {
      if (cityName) {
        try {
          const data = await fetch(getWeatherApiUrl(cityName));
          const jsonData: OpenweatherData = await data.json();
          if (jsonData.cod === "200") {
            setData(mapOpenweatherData(jsonData));
          } else {
            setData(undefined);
          }
          setCode(jsonData.cod);
        } catch (error) {
          setData(undefined);
          console.error(error);
        }
      }
    };
    fetchForecastData();
  }, [cityName]);
  return { data, code };
};

export default useForecast;
