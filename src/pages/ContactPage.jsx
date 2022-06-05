import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 870,
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
            "& .MuiTextField-root": { m: 1, width: "35vw" },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            textAlign="center"
            variant="h4"
            sx={{ pb: "25px", marginLeft: "10px" }}
          >
            Kontaktirajte nas
          </Typography>
          <TextField required id="outlined-required" label="Ime" />
          <TextField
            required
            id="outlined-password-input"
            label="Email"
            type="email"
            autoComplete="current-password"
          />
          <TextField
            required
            id="outlined-password-input"
            label="Broj telefona"
            type="number"
            autoComplete="current-password"
          />
          <TextareaAutosize
            minRows={5}
            placeholder="Unesite poruku"
            style={{
              width: "96%",
              padding: "10px",
              margin: "10px 0 10px 10px",
              resize: "none",
              border: "1px solid lightgray",
              borderRadius: 3,
              outline: "1px solid gray",
              fontSize: "14px",
            }}
          />
          <Button
            variant="contained"
            color="error"
            sx={{
              width: "96%",
              margin: "5px 0px 0px 10px",
              "&:hover": {
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
            backgroundColor: "#5c5c5c",
            height: 450,
            outline: "none",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                marginBottom: 5,
                color: "white",
                textDecoration: "underline",
              }}
            >
              Poslovi Bijeljina
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias, laudantium nihil quibusdam quisquam architecto voluptas
              excepturi! Et ab nulla, itaque minima iste nisi ipsa libero
              provident eius beatae id corporis ea fugit minus ex ullam nesciunt
              enim tempora atque laboriosam suscipit.
            </Typography>
            <Typography
              gutterBottom
              component="p"
              sx={{
                paddingTop: 5,
                marginBottom: 2,
                fontSize: "1rem",
                color: "white",
              }}
            >
              Kontakt telefon: 055 321 232, 065 991 880
            </Typography>
            <Typography
              component="div"
              sx={{
                fontSize: "1rem",
                color: "white",
                paddingTop: 3,
              }}
            >
              Pronađite nas:
            </Typography>
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
                backgroundColor: "#d14541",
                textTransform: "lowercase",
                "&:hover": {
                  background: "#d14541",
                  filter: "brightness(85%)",
                },
              }}
            >
              <InstagramIcon sx={{ color: "white" }} /> @poslovi_bijeljina
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
};

export default ContactPage;
