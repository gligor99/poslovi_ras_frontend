//MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";

const SearchBar = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "80px",
        borderRadius: 5,
        bgcolor: "white",
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <TextField
          error
          sx={{ borderRadius: 25 }}
          id="outlined-basic"
          label="Naziv"
          variant="outlined"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              height: "70%",
            }}
            variant="contained"
            color="primary"
          >
            Pretraži
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
