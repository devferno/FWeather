import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = "https://community-open-weather-map.p.rapidapi.com/";

const headers = {
  "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  "x-rapidapi-key": "0c894bfbc4mshef7daa8330c4f18p1fdc73jsn2b0dd3aa5867",
};

export const weather = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (location) => ({
        url: `/weather/?q=${location}&units=metric`,
        headers: headers,
      }),
    }),
    getHourlyWeather: builder.query({
      query: (location) => ({
        url: `/forecast/?q=${location}&units=metric`,
        headers: headers,
      }),
    }),
    getDailyWeather: builder.query({
      query: (location) => ({
        url: `/forecast/daily/?q=${location}&units=metric`,
        headers: headers,
      }),
    }),
  }),
});

export const {
  useGetCurrentWeatherQuery,
  useGetHourlyWeatherQuery,
  useGetDailyWeatherQuery,
} = weather;
