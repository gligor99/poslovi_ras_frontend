import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          bgcolor: "#f4f4f4",
          boxShadow: 3,
          height: "200px",
          margin: 0,
        }}
      >
        <Typography>This is footer</Typography>
      </Container>
    </>
  );
};

export default Footer;
