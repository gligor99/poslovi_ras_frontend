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
        height: "100px",
        borderRadius: 5,
        bgcolor: "#f4f4f4",
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          error
          sx={{ borderRadius: 25 }}
          id="outlined-basic"
          label="Naziv"
          variant="outlined"
        />
        <FormControl sx={{ minWidth: 130 }}>
          <InputLabel error id="demo-simple-select-autowidth-label">
            Kategorija
          </InputLabel>
          <Select
            error
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Kategorija"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
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
