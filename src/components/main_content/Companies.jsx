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
        width: "30%",
        boxShadow: 1,
        mr: 0,
        ml: 0,
      }}
    >
      {/* Naslov */}
      <Stack
        sx={{
          borderBottom: "1px solid #F05454",
          mb: 3,
        }}
      >
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
          boxShadow: 1,
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
      <Stack
        sx={{
          boxShadow: 1,
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
          D.O.O firma 2
        </Typography>
      </Stack>
      <Stack
        sx={{
          boxShadow: 1,
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
          D.O.O firma 3
        </Typography>
      </Stack>
      <Stack
        sx={{
          boxShadow: 1,
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
          D.O.O firma 4
        </Typography>
      </Stack>
    </Container>
  );
};

export default Companies;
