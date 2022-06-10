import React from "react";

// Components
import SearchBar from "./SearchBar";

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "350px",
        bgcolor: "background.main",
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" sx={{ m: 2, fontWeight: 900 }}>
        Tražite posao?
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 300 }}>
        Trenutno aktivna <b>264</b> oglasa u <b>26</b> kategorija
      </Typography>
      <SearchBar />
    </Box>
  );
};

export default Header;
