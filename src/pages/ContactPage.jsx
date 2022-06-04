import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  console.log(name);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: 900,
      }}
    >
      <Typography
        textAlign="center"
        variant="h4"
        sx={{ pb: "25px", marginLeft: "10px" }}
      >
        Kontaktirajte nas
      </Typography>
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
    </Container>
  );
};

export default ContactPage;
