import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const AboutPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 700,
      }}
    >
      <Typography textAlign="center" variant="h4">
        O nama
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: 200,
          backgroundColor: "text.disabled",
          marginTop: "10px",
        }}
      >
        <Typography textAlign="center" sx={{ p: 2 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
          obcaecati nesciunt incidunt repellendus aut quos, dolores officia
          ipsam est odit quidem, culpa sed? Fuga esse, doloremque et optio
          beatae vero! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Illum, obcaecati nesciunt incidunt repellendus aut quos, dolores
          officia ipsam est odit quidem, culpa sed? Fuga esse, doloremque et
          optio beatae vero!
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          height: 100,
          backgroundColor: "text.disabled",
          marginTop: "10px",
        }}
      >
        <Typography textAlign="center" sx={{ p: 2 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          accusantium exercitationem perferendis impedit commodi officiis, alias
          mollitia totam vitae aperiam.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
