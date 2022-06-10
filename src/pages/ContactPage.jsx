//MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
//Components
import { Breadcrumb } from "./../components/index";
const ContactPage = () => {
  return (
    <>
      <Breadcrumb />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 800,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* Lijeva strana stranice */}
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
            }}
            style={{ width: "40vw" }}
            noValidate
            autoComplete="off"
          >
            <Typography
              textAlign="center"
              variant="h4"
              sx={{ pb: "25px", marginLeft: "10px" }}
              style={{ width: "90%" }}
            >
              Kontaktirajte nas
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Ime"
              style={{ width: "90%" }}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Broj telefona"
              type="number"
              autoComplete="current-password"
              style={{ width: "90%" }}
            />

            <TextareaAutosize
              minRows={5}
              placeholder="Unesite poruku"
              style={{
                width: "70%",
                padding: "10px",
                margin: "10px 0 10px 11px",
                resize: "none",
                border: "1px solid lightgray",
                borderRadius: 3,
                outline: "1px solid gray",
                fontSize: "14px",
              }}
            />

            <Button
              variant="contained"
              sx={{
                width: "20%",
                margin: "5px 0px 0px 10px",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "tomato",
                  filter: "brightness(90%)",
                },
              }}
            >
              Pošalji
            </Button>
          </Box>

          {/* Desna strana stranice */}
          <Card
            sx={{
              maxWidth: "35vw",
              backgroundColor: "#f4f4f4",
              minHeight: 450,
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              boxShadow: 1,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  color: "black",
                  pb: 3,
                }}
              >
                Poslovi Bijeljina
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "black" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias, laudantium nihil quibusdam quisquam architecto
                voluptas excepturi! Et ab nulla, itaque minima iste nisi ipsa
                libero provident eius beatae id corporis ea fugit minus ex ullam
                nesciunt enim tempora atque laboriosam suscipit.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifycontent: "center",
                  alignItems: "center",
                  pt: 4,
                  pb: 2,
                }}
              >
                <Typography
                  gutterBottom
                  component="p"
                  sx={{
                    fontSize: "1rem",
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <PhoneAndroidIcon sx={{ width: 20 }} /> 055 321 232, 065 991
                  880
                </Typography>
              </Box>
              <Typography
                component="div"
                sx={{
                  fontSize: "1rem",
                  color: "black",
                  paddingTop: 2,
                }}
              >
                Pronađite nas:
              </Typography>
              <Box>
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#0011ff",
                    textTransform: "Capitalize",
                    marginRight: 1,
                    "&:hover": {
                      background: "#0011ff",
                      filter: "brightness(85%)",
                    },
                  }}
                >
                  <FacebookIcon sx={{ color: "white" }} />: Poslovi Bijeljina
                </Button>
                <Button
                  onClick={() => navigate()}
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "#c21515",
                    textTransform: "lowercase",
                    "&:hover": {
                      background: "#c20000",
                      filter: "brightness(85%)",
                    },
                  }}
                >
                  <InstagramIcon sx={{ color: "white" }} /> @poslovi_bijeljina
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default ContactPage;
