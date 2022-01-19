import { Grid } from "@mui/material";
import CurrentWeather from "../components/CurrentWeather";
import HourlyWeather from "../components/HourlyWeather";
import DailyWeather from "../components/DailyWeather";
const MainContent = () => {
  return (
    <Grid container sx={{ py: 5 }}>
      <Grid item xs={12} md={6} sx={{ p: 1 }}>
        <CurrentWeather />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: 1 }}>
        <HourlyWeather />
      </Grid>

      <DailyWeather />
    </Grid>
  );
};

export default MainContent;
