import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../services/citySlice";

const Navbar = () => {
  const [cityName, setCityName] = useState();
  const handleChange = (e) => setCityName(e.target.value);
  const dispatch = useDispatch();
  const handleSubmit = (e) => dispatch(setName(cityName));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "500", letterSpacing: "-3.5px", cursor: "pointer" }}
      >
        FW
        <span style={{ color: "#2E4C6D" }}>ea</span>ther
      </Typography>
      <Box
        type="form"
        sx={{
          border: "solid 1px #e3e3e3",
          borderRadius: "6px",
          px: 1,
        }}
      >
        <InputBase
          placeholder="search by city name"
          sx={{ m: 0 }}
          onChange={handleChange}
          value={cityName}
        />
        <IconButton
          type="button"
          onClick={handleSubmit}
          edge="start"
          sx={{ m: 0 }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
