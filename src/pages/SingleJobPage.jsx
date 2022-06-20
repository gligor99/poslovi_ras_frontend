//MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
//components
import { Breadcrumb } from "./../components/index";
//icons
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../assets/img/logo.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleJobPage = () => {
  const [jobData, setJobData] = useState();
  const { jobID } = useParams();

  console.table(jobData);

  const getJob = async () => {
    try {
      const response = await fetch(
        `http://ras_poslovi_backend.test/app/post/${jobID}`
      );
      const result = await response.json();
      setJobData(result);
    } catch (error) {}
  };

  useEffect(() => {
    getJob();
  }, [jobID]);

  return (
    <>
      <Breadcrumb />

      <Container
        maxWidth="xl"
        sx={{
          height: "850px",
          mt: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "70%",
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.main",
            boxShadow: 1,
          }}
        >
          {/* Lijeva strana */}
          <Box
            sx={{
              width: "40%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                width: "70%",
                height: "70%",
              }}
            >
              <CardMedia
                style={{ padding: 10 }}
                component="img"
                image={jobData?.item?.user.images[0]}
                alt="green iguana"
              />
            </Card>
          </Box>
          {/* Desna strana */}
          <Box
            sx={{
              width: "60%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "70%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: 1,
                borderRadius: "3.5px",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontFamily: "Roboto",
                  mt: "1.5rem",
                  mb: "1.5rem",
                }}
              >
                {jobData?.item?.title}
              </Typography>
              <Box
                sx={{
                  height: "95%",
                  width: "95%",
                }}
              >
                <Box sx={{ mb: "0.5rem" }}>
                  <Typography sx={{ fontWeight: 500 }}>Opis posla:</Typography>
                  <Typography>{jobData?.item?.content}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SingleJobPage;
