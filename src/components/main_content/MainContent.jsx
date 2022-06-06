import Jobs from "./Jobs";
import Companies from "./Companies";

import Container from "@mui/material/Container";

const MainContent = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "red",
        height: "",
      }}
    >
      <Jobs />
      <Companies />
    </Container>
  );
};

export default MainContent;
