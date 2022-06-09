//MUI
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Companies = () => {
  return (
    <Container
      sx={{
        backgroundColor: "white",
        borderRadius: "5px",
        width: "45%",
        boxShadow: 3,
      }}
    >
      {/* Naslov */}
      <Stack sx={{ borderBottom: "1px solid tomato", mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            paddingTop: 1,
          }}
        >
          Kompanije
        </Typography>
      </Stack>
      {/* Kompanije */}
      <Stack
        sx={{
          boxShadow: 3,
          borderRadius: "5px",
          margin: 1,
          pl: 1,
          pr: 1,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            paddingTop: 1,
            fontSize: "1.2rem",
          }}
        >
          D.O.O firma 1
        </Typography>
      </Stack>
      <Stack sx={{ boxShadow: 3, borderRadius: "5px", margin: 1 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: 1,
            fontSize: "1.2rem",
          }}
        >
          firma 2 D.O.O
        </Typography>
      </Stack>
      <Stack sx={{ boxShadow: 3, borderRadius: "5px", margin: 1 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: 1,
            fontSize: "1.2rem",
          }}
        >
          {" "}
          kompanija 3{" "}
        </Typography>
      </Stack>
      <Stack sx={{ boxShadow: 3, borderRadius: "5px", margin: 1 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: 1,
            fontSize: "1.2rem",
          }}
        >
          {" "}
          kompanija 3{" "}
        </Typography>
      </Stack>
    </Container>
  );
};

export default Companies;
