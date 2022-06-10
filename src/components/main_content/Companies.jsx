//MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//test img
import logo from "./../../assets/img/test.png";

const Companies = () => {
  return (
    <Box
      sx={{
        width: "35%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Naslov */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          mb: 2,
          backgroundColor: "white",
          boxShadow: 1,
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "black",
            fontSize: "1.2rem",
            pt: 1,
            pb: 1,
          }}
        >
          Kompanije
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: "5px",
          width: "100%",
        }}
      >
        {/* Kompanije */}

        <Box
          sx={{
            boxShadow: 1,
            borderRadius: "10px",
            mb: 3,
            height: "120px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              height: "80%",
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              src={logo}
            ></Box>
          </Box>
          <Box
            sx={{
              width: "55%",
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 1,
            }}
          >
            <Typography
              variant="p"
              sx={{
                paddingTop: 1,
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              D.O.O firma 1
            </Typography>
          </Box>
          <Box
            sx={{
              width: "15%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                height: "25%",
                width: "100%",
                borderRadius: "5px",
              }}
              size="small"
              variant="contained"
              color="primary"
            >
              Više
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            boxShadow: 1,
            borderRadius: "10px",
            mb: 3,
            height: "120px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              height: "80%",
              width: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              src={logo}
            ></Box>
          </Box>
          <Box
            sx={{
              width: "55%",
              height: "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 1,
            }}
          >
            <Typography
              variant="p"
              sx={{
                paddingTop: 1,
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              D.O.O firma 1
            </Typography>
          </Box>
          <Box
            sx={{
              width: "15%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                height: "25%",
                width: "100%",
                borderRadius: "5px",
              }}
              size="small"
              variant="contained"
              color="primary"
            >
              Više
            </Button>
          </Box>
        </Box>

        {/* Dugme za prikaz svih kompanija */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            mt: 2,
          }}
        >
          <Box
            sx={{
              width: "35%",
              mb: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "secondary.main",
              borderRadius: "5px",
            }}
          >
            <Button
              sx={{
                width: "100%",
                color: "white",
                fontSize: "1rem",
                fontWeight: "400",
                textTransform: "Capitalize",
                height: "30px",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  filter: "brightness(70%)",
                },
              }}
            >
              Prikaži sve
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Companies;
