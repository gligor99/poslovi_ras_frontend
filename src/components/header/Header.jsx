import React from "react";

// Components

// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { PostContext } from "../../context/postContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { allPosts } = useContext(PostContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "250px",
        bgcolor: "background.main",
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" sx={{ m: 2, fontWeight: 900 }}>
        Tražite posao?
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontSize: "18px", mb: 2, fontWeight: 300 }}
      >
        Trenutno aktivno{" "}
        <Link style={{ color: "red", fontWeight: "bold" }} to="/jobs">
          {allPosts.count}
        </Link>{" "}
        oglasa
      </Typography>
    </Box>
  );
};

export default Header;
