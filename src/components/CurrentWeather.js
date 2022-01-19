import { Paper, Typography, Box } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import FilterDramaOutlinedIcon from "@mui/icons-material/FilterDramaOutlined";
import { useSelector } from "react-redux";
import { useGetCurrentWeatherQuery } from "../services/weather";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import WaterRoundedIcon from "@mui/icons-material/WaterRounded";
export const InfoBox = ({ name, info, arg }) => {
  return (
    <Box
      sx={{
        my: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant={arg}>{name}</Typography>
      <Typography variant={arg} sx={{ fontWeight: "bold" }}>
        {info}
      </Typography>
    </Box>
  );
};
export const SwitchIcon = ({ main }) => {
  if (main === "Clouds") {
    return (
      <FilterDramaOutlinedIcon sx={{ fontSize: "70px", color: "#396EB0" }} />
    );
  } else if (main === "Clear") {
    return <WbSunnyOutlinedIcon sx={{ fontSize: "70px", color: "#FC997C" }} />;
  } else if (main === "Snow") {
    return <AcUnitOutlinedIcon sx={{ fontSize: "70px", color: "#DADDFC" }} />;
  } else {
    return <WaterRoundedIcon sx={{ fontSize: "70px", color: "#2E4C6D" }} />;
  }
};
const CurrentWeather = () => {
  const city = useSelector((state) => state.city.name);
  const { data, isFetching } = useGetCurrentWeatherQuery(city);
  if (isFetching) {
    return <p>...loading</p>;
  }
  console.log(data);
  const { main, visibility, wind, weather } = data;
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",

        p: 4,
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{ fontWeight: "700", letterSpacing: "-3.5px" }}
        >
          {Math.floor(main.temp)}°
          <SwitchIcon main={weather[0].main} />
        </Typography>
        <Typography sx={{ color: "#111111" }} variant="body1">
          Tuesday 01-18-2022
        </Typography>
        <Typography sx={{ my: 2 }} variant="h6">
          {city}
        </Typography>
      </Box>
      <Box sx={{ width: "45%", pt: 2 }}>
        <InfoBox name="humidity" info={`${main.humidity}%`} arg="body1" />
        <InfoBox name="pressure" info={main.pressure} arg="body1" />
        <InfoBox name="visibility" info={visibility} arg="body1" />
        <InfoBox name="wind speed" info={`${wind.speed}Km/h`} arg="boyd1" />
        <InfoBox
          name="feel like"
          info={`${Math.floor(main.feels_like)}°`}
          arg="body1"
        />
      </Box>
    </Paper>
  );
};

export default CurrentWeather;
//types:Clouds, Clear,Snow
