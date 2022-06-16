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
          bgcolor: "secondary.main",
          height: "100px",
          width: "100%",
          position: "sticky",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
              color: "primary.main",
              marginRight: "1rem",
            }}
            to="/about"
            element={<AboutPage />}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "primary.main",
              }}
              style={{ display: "inline" }}
            >
              O nama
            </Typography>
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "primary.main",
              width: "3rem",
              marginRight: "3rem",
            }}
            to="/contact"
            element={<AboutPage />}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "primary.main",
              }}
            >
              {" "}
              Kontakt{" "}
            </Typography>
          </NavLink>
          <Box>
            <NavLink
              style={{
                textDecoration: "none",
                width: "50%",
                height: "50%",
              }}
              to="/contact"
              element={<ContactPage />}
            >
              <FacebookIcon
                sx={{ marginRight: "1rem", height: "100%", color: "#1363DF" }}
              />
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
              <InstagramIcon sx={{ height: "100%", color: "primary.main" }} />
            </NavLink>
          </Box>
          {/* fb % insta  */}
        </Box>
        {/* footer */}

        <Box sx={{ mb: 1 }}>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Roboto",
              color: "white",
            }}
          >
            {" "}
            Poslovi Bijeljina - 2022. - Projekat za predmet RAS
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
