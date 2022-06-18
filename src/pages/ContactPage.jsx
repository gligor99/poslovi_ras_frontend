import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

//MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

//Components
import { Breadcrumb } from "./../components/index";

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xkqfaaa",
        "template_zhdc4ac",
        formRef.current,
        "WGj2haahEPOxhXSCn"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <>
      <Breadcrumb />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 800,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {/* Lijeva strana stranice */}
          <Box
            sx={{
              width: "35%",
              height: "100%",
            }}
          >
            <form id="form" ref={formRef} onSubmit={sendEmail}>
              <Box
                className="field"
                style={{
                  height: "100px",
                }}
              >
                <InputLabel htmlFor="to_name">to_name</InputLabel>
                <Input
                  sx={{
                    width: "100%",
                  }}
                  type="text"
                  name="to_name"
                  id="to_name"
                />
              </Box>
              <Box
                className="field"
                style={{
                  height: "100px",
                }}
              >
                <InputLabel htmlFor="from_name">from_name</InputLabel>
                <Input
                  sx={{
                    width: "100%",
                  }}
                  type="text"
                  name="from_name"
                  id="from_name"
                />
              </Box>
              <Box
                className="field"
                style={{
                  height: "100px",
                }}
              >
                <InputLabel htmlFor="message">message</InputLabel>
                <Input
                  sx={{
                    width: "100%",
                  }}
                  type="text"
                  name="message"
                  id="message"
                />
              </Box>
              <Box
                className="field"
                style={{
                  height: "100px",
                }}
              >
                <InputLabel htmlFor="reply_to">reply_to</InputLabel>
                <Input
                  sx={{
                    width: "100%",
                  }}
                  type="text"
                  name="reply_to"
                  id="reply_to"
                />
              </Box>

              <Input type="submit" id="button" value="Send Email" />
            </form>
          </Box>

          {/* Desna strana stranice */}
          <Card
            sx={{
              maxWidth: "35vw",
              backgroundColor: "#f4f4f4",
              minHeight: 450,
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              boxShadow: 1,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  color: "black",
                  pb: 3,
                }}
              >
                Poslovi Bijeljina
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "black" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias, laudantium nihil quibusdam quisquam architecto
                voluptas excepturi! Et ab nulla, itaque minima iste nisi ipsa
                libero provident eius beatae id corporis ea fugit minus ex ullam
                nesciunt enim tempora atque laboriosam suscipit.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifycontent: "center",
                  alignItems: "center",
                  pt: 4,
                  pb: 2,
                }}
              >
                <Typography
                  gutterBottom
                  component="p"
                  sx={{
                    fontSize: "1rem",
                    color: "black",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <PhoneAndroidIcon sx={{ width: 20 }} /> 055 321 232, 065 991
                  880
                </Typography>
              </Box>
              <Typography
                component="div"
                sx={{
                  fontSize: "1rem",
                  color: "black",
                  paddingTop: 2,
                }}
              >
                Pronađite nas:
              </Typography>
              <Box>
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#0011ff",
                    textTransform: "Capitalize",
                    marginRight: 1,
                    "&:hover": {
                      background: "#0011ff",
                      filter: "brightness(85%)",
                    },
                  }}
                >
                  <FacebookIcon sx={{ color: "white" }} />: Poslovi Bijeljina
                </Button>
                <Button
                  onClick={() => navigate()}
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "#c21515",
                    textTransform: "lowercase",
                    "&:hover": {
                      background: "#c20000",
                      filter: "brightness(85%)",
                    },
                  }}
                >
                  <InstagramIcon sx={{ color: "white" }} /> @poslovi_bijeljina
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default ContactPage;
