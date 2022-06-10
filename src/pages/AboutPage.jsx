//MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
//Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//Components
import { Breadcrumb } from "../components/index";
import { useState } from "react";

const AboutPage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box sx={{ height: "50px" }}>
        <Breadcrumb />
      </Box>
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
        <Typography textAlign="center" variant="h4" sx={{ mt: 10, pb: "40px" }}>
          O nama
        </Typography>
        <Box
          sx={{
            width: "60%",
          }}
        >
          <Accordion
            sx={{ bgcolor: "primary.main", marginBottom: "3px" }}
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
            <AccordionDetails
              sx={{
                backgroundColor: "#f4f4f4",
                boxShadow: 3,
              }}
            >
              <Typography sx={{ color: "black", padding: "10px" }}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              bgcolor: "primary.main",
              color: "black",
              marginBottom: "3px",
            }}
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
            <AccordionDetails sx={{ boxShadow: 3 }}>
              <Typography sx={{ color: "black", padding: "10px" }}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ bgcolor: "primary.main", marginBottom: "3px" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              sx={{}}
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
            <AccordionDetails
              sx={{ backgroundColor: "#f4f4f4", color: "black", boxShadow: 3 }}
            >
              <Typography sx={{ color: "black", padding: "10px" }}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ bgcolor: "primary.main", marginBottom: "3px" }}
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
            <AccordionDetails
              sx={{ backgroundColor: "#f4f4f4", color: "black", boxShadow: 3 }}
            >
              <Typography sx={{ color: "black", padding: "10px" }}>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue. Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
