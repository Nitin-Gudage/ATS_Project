import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import Theme from "../utills/Theme";
import logo from "../asset/images/logo1.png";
import registerImg from "../asset/images/sideimages/registerimg.jpeg";
import SideImg from "../component/SideImg";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Container
          sx={{
            maxWidth: { lg: "lg", xl: "xl", md:"md", sm:"sm",xs:"xs", },
          }}
        >
          <Grid container alignItems="center" spacing={5}>
            <Grid item lg={6} sx={{ display: { lg: "block", xs: "none" } }}>
              <SideImg img={registerImg} text={"Facilitated Offer Management, Application Following, Job Observing, and Profile Creation Across Industries"} />
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
                Hello ! Newbie
              </Typography>
              <Typography
                variant="p3"
                sx={{ pl: { sm: 1, xs: 0 } }}
                color="common.grey"
              >
                Please fill up the provided details to enjoy the forthcoming
                things.
              </Typography>
              <Box component="form" pt={4}>
                <Grid pt={5} rowGap={2} container spacing={1} >
                  <Grid lg={6} md={6} sm={6} xs={12} item>
                    <TextField
                      required
                      fullwidth
                      label="First Name"
                      placeholder="Enter your First Name"
                      size="large"
                      type="text"
                      InputProps={{
                        style: {
                          borderRadius: "30px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid lg={6} md={6} sm={6} xs={12} item>
                    <TextField
                      required
                      fullwidth
                      label="Last Name"
                      placeholder="Enter your Last Name"
                      size="large"
                      type="text"
                      InputProps={{
                        style: {
                          borderRadius: "30px",
                        },
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid pt={5} rowGap={2} spacing={1} container>
                  <Grid lg={6} md={6} sm={6} xs={12} item>
                    <TextField
                      required
                      fullwidth
                      label="Email"
                      placeholder="Enter your E- Mail Address"
                      size="large"
                      type="email"
                      InputProps={{
                        style: {
                          borderRadius: "30px",
                        },
                      }}
                    />
                  </Grid>

                  <Grid xl={6} lg={6}  sm={6} xs={12} item>
                    <FormControl sx={{width:{sm:"23ch",xs:"23ch"}}}>
                    <TextField
                      required
                      fullwidth
                      label="Password"
                      size="large"
                      placeholder="Enter your Password"
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={() => handleClickShowPassword}
                              onMouseDown={() => handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                        style: {
                          borderRadius: "30px",
                        },
                      }}
                    />
                    </FormControl>

                  </Grid>
                </Grid>

                <Grid pt={5} container spacing={1}>
                  <Grid item xl={6} lg={6}  sm={6} xs={12}>
                  <FormControl sx={{width:{sm:"23ch",xs:"23ch"}}}>

                  <TextField
                      required
                      fullwidth
                      label="Re-Enter Password"
                      size="large"
                      placeholder="Re-Enter your Password"
                      type={showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={handleClickShowPassword}
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
                        style: {
                          borderRadius: "30px",
                        },
                      }}
                    />
                    </FormControl>

                  </Grid>
                    
                </Grid>

                <Box sx={{ textAlign: "center", mt: 8, pb:5 }}>
                  <FormControl sx={{ width: {sm:"48ch", xs:"35ch"} }}>
                    <Button
                      size="large"
                      variant="contained"
                      sx={{ borderRadius: "30px" }}
                    >
                      Sign In
                    </Button>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Register;
