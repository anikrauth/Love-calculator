import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { getBottomNavigationActionUtilityClass } from "@mui/material";

const theme = createTheme();

export default function SignIn() {
  const [loveInfo, setLoveInfo] = React.useState({
    fname: "",
    sname: "",
    result: "",
    percentage: 0,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fnames = data.getAll("fname");
    const lnames = data.getAll("lname");

    const options = {
      method: "GET",
      url: "https://love-calculator.p.rapidapi.com/getPercentage",
      params: { sname: fnames[0], fname: lnames[0] },
      headers: {
        "X-RapidAPI-Key": "3dfbaa8cdcmshea91144d49edbe0p1c614ejsnb0ed6f8e1e7a",
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //   console.log(response.data);
        setLoveInfo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(loveInfo.percentage);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          className="formWraper"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            🌹 Calculate love percentage🌹
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="fname"
              label="Your love Frist Name"
              name="fname"
              autoFocus
              type="text"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lname"
              label="Your love Last Name"
              type="text"
              id="lname"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="red"
            >
              Calculate Love %
            </Button>
          </Box>
        </Box>

        {loveInfo.percentage === 0 ? (
          <></>
        ) : (
          <Box sx={{ mt: 3 }} className="resultCard">
            <div className="name">
              <Typography variant="subtitle1">
                {loveInfo && ` ${loveInfo.sname} ${loveInfo.fname}`}
              </Typography>
            </div>

            <div className="otherInfo">
              <Typography>{loveInfo && `${loveInfo.percentage}%`}</Typography>
              <p className="md"></p>
              <Typography variant="subtitle1">
                {loveInfo && `${loveInfo.result}`}
              </Typography>
            </div>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
