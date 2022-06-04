import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const AboutPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
      <Typography textAlign="center" variant="h4" sx={{ mt: 10, pb: "20px" }}>
        O nama
      </Typography>
      <Box
        sx={{
          width: "60%",
        }}
      >
        <Accordion
          sx={{ backgroundColor: "#d14541", marginBottom: "3px" }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            sx={{ color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0, paddingLeft: "10px" }}
            >
              Prvi dio
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ borderTop: "1px solid black" }}>
            <Typography sx={{ color: "white", padding: "10px" }}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#d14541", marginBottom: "3px" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            sx={{ color: "white" }}
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ width: "33%", flexShrink: 0, paddingLeft: "10px" }}
            >
              Drugi dio
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ borderTop: "1px solid black" }}>
            <Typography sx={{ color: "white", padding: "10px" }}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#d14541", marginBottom: "3px" }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "white",
                paddingLeft: "10px",
              }}
            >
              Treci dio
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ borderTop: "1px solid black" }}>
            <Typography sx={{ color: "white", padding: "10px" }}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{ backgroundColor: "#d14541", marginBottom: "3px" }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "white",
                paddingLeft: "10px",
              }}
            >
              Cetvrti dio
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ borderTop: "1px solid black" }}>
            <Typography sx={{ color: "white", padding: "10px" }}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default AboutPage;
