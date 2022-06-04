import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

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
          <TextField
            required
            id="outlined-required"
            label="Ime"
            value={name}
            onChange={handleChange}
          />
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
        <Card
          sx={{
            maxWidth: 500,
            backgroundColor: "white",
            border: "1px solid red",
            height: 450,
            outline: "none",
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center", marginBottom: 5 }}
            >
              Poslovi Bijeljina
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias, laudantium nihil quibusdam quisquam architecto voluptas
              excepturi! Et ab nulla, itaque minima iste nisi ipsa libero
              provident eius beatae id corporis ea fugit minus ex ullam nesciunt
              enim tempora atque laboriosam suscipit.
            </Typography>
          </CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{ textAlign: "center", marginBottom: 2 }}
          >
            Kontakt telefon: 066 321 232, 065 991 880
          </Typography>
          <Typography component="div" sx={{ textAlign: "center" }}>
            Linkovi:
          </Typography>

          <CardActions>
            <Button color="error" size="small">
              Facebook
            </Button>
            <Button color="error" size="small">
              Instagram
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Container>
  );
};

export default ContactPage;
