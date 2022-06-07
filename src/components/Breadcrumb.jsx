import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
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
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography
      key="3"
      sx={{
        color: "white",
      }}
    >
      Breadcrumb
    </Typography>,
  ];
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        sx={{
          height: "50px",
          color: "white",
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
