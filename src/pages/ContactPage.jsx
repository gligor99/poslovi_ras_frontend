import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
        alignItems: "center",
        height: 900,
      }}
    >
      <Typography textAlign="center" variant="h4" sx={{ pb: "25px" }}>
        Kontaktirajte nas
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
          display: "flex",
          flexDirection: "column",
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
          label="Lozinka"
          type="password"
          autoComplete="current-password"
        />
      </Box>
    </Container>
  );
};

export default ContactPage;
