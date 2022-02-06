import { Paper } from "@mui/material";
import { RenderLineChart } from "./LineChart";
import { useGetHourlyWeatherQuery } from "../services/weather";
import { useSelector } from "react-redux";

const createArray = (list) => {
  const arr = [];
  list.forEach((item) =>
    arr.push({
      Temperature: Math.floor(item.main.temp),
      date: item.dt_txt.substring(11, 16),
    })
  );
  return arr;
};
const HourlyWeather = () => {
  const city = useSelector((state) => state.city.name);
  const { data, isFetching, isError } = useGetHourlyWeatherQuery(city);

  if (isFetching) {
    return <Paper elevation={0}>loading...</Paper>;
  }
  if (isError) {
    return <Paper elevation={0}>error in server try later</Paper>;
  }
<<<<<<< HEAD
=======
  
>>>>>>> f93c80f6bf9df0d18bc1993216850bfecab68b2f
  return (
    <Paper elevation={0} variant="outlined" sx={{ px: 3, py: 3 }}>
      <RenderLineChart data={createArray(data.list.slice(0, 8))} />
    </Paper>
  );
};

export default HourlyWeather;
