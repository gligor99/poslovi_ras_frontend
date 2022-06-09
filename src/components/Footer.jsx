import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f4f4f4",
          height: "100px",
          width: "100%",
          position: "sticky",
          border: "1px solid red",
        }}
      >
        <Typography>This is footer</Typography>
      </Box>
    </>
  );
};

export default Footer;
