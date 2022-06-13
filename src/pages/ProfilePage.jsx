//MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//icons
import AddIcon from "@mui/icons-material/Add";

const ProfilePage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.main",
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Lijeva strana  */}
          <Box
            sx={{
              height: "100%",
              width: "55%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                align="center "
                sx={{
                  fontFamily: "Roboto",
                  mt: 3,
                }}
              >
                D.O.O firma firma
              </Typography>
              <Box
                sx={{
                  padding: 2,
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "Roboto",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima consequatur nobis quasi. Laborum illo reprehenderit
                  omnis ratione perferendis. Rerum corrupti laudantium dicta
                  quidem hic debitis repellat nesciunt, provident eos
                  reprehenderit.
                </Typography>
              </Box>
              <Typography
                align="left"
                sx={{
                  fontFamily: "Roboto",
                  pl: 2,
                }}
              >
                Broj vaših oglasa: brojOglasa
              </Typography>
            </Box>
          </Box>
          {/* Desna strana  */}
          <Box
            sx={{
              height: "80%",
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center ",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
          </Box>
        </Box>
      </Box>
      {/* Main content */}
      <Box
        sx={{
          height: "50px",
          width: "100%",
          mt: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.main",
            paddingLeft: 1,
            borderRadius: "5px",
            boxShadow: 1,
          }}
        >
          <Typography sx={{}}>Dodaj oglas</Typography>
          <Button>
            <AddIcon />
          </Button>
        </Box>
      </Box>
      {/* Adds */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.main",
          mt: 1,
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            mt: 2,
            border: "1px solid red",
          }}
        >
          <Typography> sadsadsadsaass</Typography>
          <Typography> sadsadsadsaass</Typography>
          <Typography> sadsadsadsaass</Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            mt: 2,
            border: "1px solid red",
          }}
        >
          <Typography> sadsadsadsaass</Typography>
          <Typography> sadsadsadsaass</Typography>
          <Typography> sadsadsadsaass</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
