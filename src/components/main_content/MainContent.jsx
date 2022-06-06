import Jobs from "./Jobs";
import Companies from "./Companies";

//MUI imports
import Container from "@mui/material/Container";

const MainContent = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "gray",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 20px",
      }}
    >
      <Jobs />
      <Companies />
    </Container>
  );
};

export default MainContent;
