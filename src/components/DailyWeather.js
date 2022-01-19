import React from "react";
import { Grid } from "@mui/material";
import DayWeather from "./DayWeather";
import { useSelector } from "react-redux";
import { useGetDailyWeatherQuery } from "../services/weather";
import { SwitchIcon } from "./CurrentWeather";
const DailyWeather = () => {
  const city = useSelector((state) => state.city.name);
  const { data, isFetching, isError } = useGetDailyWeatherQuery(city);
  if (isFetching) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>Server error try later</p>;
  }
  const getDateOfDay = (dt) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const date = new Date(dt * 1000);
    return days[date.getDay()];
  };

  return (
    <Grid container>
      {data.list.map((item, index) => (
        <Grid
          sx={{ p: 1 }}
          item
          key={index}
          xs={6}
          sm={4}
          md={12 / data.list.length}
        >
          <DayWeather
            icon={<SwitchIcon main={item.weather[0].main} />}
            day={getDateOfDay(item.dt)}
            max={Math.floor(item.temp.max)}
            min={Math.floor(item.temp.min)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DailyWeather;
