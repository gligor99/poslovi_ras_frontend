//MUI
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
//Components
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
//Icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      jedan
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      dva
    </Link>,
    <Typography
      key="3"
      sx={{
        color: "background.main",
      }}
    >
      tri
    </Typography>,
  ];
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "50px",
        bgcolor: "primary.main",
      }}
    >
      <Box sx={{ width: "40%", height: "100%" }}></Box>
      <Breadcrumbs
        sx={{
          height: "100%",
          width: "50%",
          color: "background.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default Breadcrumb;
