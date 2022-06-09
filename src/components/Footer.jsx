//MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
//Router
import { NavLink } from "react-router-dom";
//Pages
import { AboutPage, ContactPage } from "./../pages/index";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f4f4f4",
          height: "100px",
          width: "100%",
          position: "sticky",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* Linkovi unutar sajta */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink
            style={{
              textDecoration: "none",
              paddingRight: "20px",

              color: "tomato",
            }}
            to="/about"
            element={<AboutPage />}
          >
            {" "}
            <Typography
              sx={{
                mt: 1,
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              O nama
            </Typography>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "tomato",
            }}
            to="/contact"
            element={<AboutPage />}
          >
            {" "}
            <Typography
              sx={{
                mt: 1,
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {" "}
              Kontakt{" "}
            </Typography>
          </NavLink>
        </Box>
        {/* linkovi fb i insta */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            width: "50px",
          }}
        >
          <NavLink
            style={{
              textDecoration: "none",
              width: "50%",
              height: "50%",
              marginRight: 5,
            }}
            to="/contact"
            element={<ContactPage />}
          >
            <FacebookIcon sx={{ height: "100%", color: "#0011ff" }} />
          </NavLink>

          <NavLink
            style={{
              textDecoration: "none",
              width: "50%",
              height: "50%",
            }}
            to="/about"
            element={<AboutPage />}
          >
            <InstagramIcon sx={{ height: "100%", color: "#c21515" }} />
          </NavLink>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Roboto",
            }}
          >
            {" "}
            Copyright © Razvoj aplikativnog softvera{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
