import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Companies = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        width: "35%",
      }}
    >
      {/* Naslov */}
      <Stack spacing={2} sx={{ borderBottom: "2px solid black" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: 1,
          }}
        >
          {" "}
          Kompanije:{" "}
        </Typography>
      </Stack>
      {/* Kompanije */}
      <Stack
        spacing={2}
        sx={{ border: "1px solid black", borderRadius: "10px", margin: 1 }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: 1,
          }}
        >
          {" "}
          kompanija 1
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        sx={{ border: "1px solid black", borderRadius: "10px", margin: 1 }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: 1,
          }}
        >
          {" "}
          kompanija 2{" "}
        </Typography>
      </Stack>
      <Stack
        spacing={2}
        sx={{ border: "1px solid black", borderRadius: "10px", margin: 1 }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            paddingTop: 1,
          }}
        >
          {" "}
          kompanija 3{" "}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Companies;