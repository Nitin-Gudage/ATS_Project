import React, { useState } from "react";
import SideImg from "../component/SideImg";
import loginImg from "../asset/images/sideimages/login.jpeg";
import logo from "../asset/images/logo1.png";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Theme from "../utills/Theme";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BasicDetails from "./BasicDetails";

const Login = ({ LoginDetails, handleDetails }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("admin@absax.com");
  const [password, setPassword] = useState("12345678");
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  const handleData = (data) => {
    console.log('aaaa',data);
    if (data != null) {
      setOpen(false);
      handleDetails(data);
    }
  };

  const handleLogin = () => {
    if (username === "admin@absax.com" && password === "12345678") {
      setLoggedIn(true);
      setOpen(true);
      LoginDetails(true);
    } else {
      LoginDetails(false);
      alert("Invalid credentials, please try again.");
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Container sx={{ maxWidth: { lg: "lg", xl: "xl" } }}>
          <Grid container alignItems="center" spacing={5}>
            <Grid item lg={6} sx={{ display: { lg: "block", xs: "none" } }}>
              <SideImg
                img={loginImg}
                text={
                  "Use Our All-in-One Professional ATS Web app to Progress Your Career"
                }
              />
            </Grid>
            <Grid item lg={6}>
              <Box
                component="img"
                src={logo}
                width="128px"
                height="123px"
                sx={{ borderRadius: 5 }}
              />
              <Typography variant="h2" my={2}>
                Welcome Back, Robert
              </Typography>
              <Typography variant="body1" pl={1} color="textSecondary">
                Submit your login credentials for accessing the hassle-free ATS
                Hiring Platform.
              </Typography>
              <Box component="form" pt={4}>
                <Stack gap={4} pt={3} pr={20}>
                  <FormControl sx={{ width: "45ch" }}>
                    <TextField
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      label="Email"
                      placeholder="Enter your E-Mail Address"
                      size="large"
                      type="email"
                      InputProps={{
                        style: { borderRadius: "30px" },
                      }}
                    />
                  </FormControl>
                  <FormControl sx={{ width: "45ch" }}>
                    <TextField
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      label="Password"
                      placeholder="Enter your Password"
                      size="large"
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                        style: { borderRadius: "30px" },
                      }}
                    />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="Remember me"
                      />
                      <Button
                        variant="text"
                        size="small"
                        disableFocusRipple
                        disableRipple
                        sx={{ textTransform: "capitalize", fontWeight: 600 }}
                      >
                        Forgot Password
                      </Button>
                    </Stack>
                  </FormControl>
                  <FormControl sx={{ width: "45ch" }}>
                    <Button
                      onClick={handleLogin}
                      fullWidth
                      size="large"
                      variant="contained"
                      sx={{ borderRadius: "30px" }}
                    >
                      Login
                    </Button>
                  </FormControl>
                  <Typography variant="body1" pl={1}>
                    This is your first time! Then click{" "}
                    <u style={{ color: "#0071D4", fontWeight: 600 }}>
                      Register
                    </u>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent>
            <BasicDetails handleData={handleData} />
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </>
  );
};

export default Login;
