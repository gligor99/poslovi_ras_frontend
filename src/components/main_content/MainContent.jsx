//Components
import Jobs from "./Jobs";
import Companies from "./Companies";

//MUI imports
import Container from "@mui/material/Container";

const MainContent = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "background.main",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: "20px 20px",
        mb: 4,
        mt: 2,
        boxShadow: 1,
      }}
    >
      <Jobs />
      <Companies />
    </Container>
  );
};

export default MainContent;
