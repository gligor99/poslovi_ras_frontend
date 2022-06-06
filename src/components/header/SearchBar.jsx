import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SearchBar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 1 / 2,
        height: 100,
        borderRadius: 5,
        bgcolor: "#fff",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          error
          sx={{ borderRadius: 25 }}
          id="outlined-basic"
          label="Outlined"
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
        <Button size="large" variant="outlined" color="error">
          Pretraži
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
