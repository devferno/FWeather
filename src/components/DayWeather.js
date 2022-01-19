import { Paper, Typography, Box } from "@mui/material";

const DayWeather = ({ icon, day, max, min }) => {
  return (
    <Paper variant="outlined" sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="body1">{day}</Typography>
      {icon}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">{max}° </Typography>
        <Typography variant="body2" sx={{ mx: 1, color: "#090909" }}>
          {min}°
        </Typography>
      </Box>
    </Paper>
  );
};

export default DayWeather;
