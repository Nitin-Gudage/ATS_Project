import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Theme from "../utills/Theme";
import { FaUserGraduate } from "react-icons/fa";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { FaUserTie } from "react-icons/fa";
import SaveBtn from "../utills/SaveBtn";
import { Navigate } from "react-router-dom";

const BasicDetails = ({ handleData }) => {
  const [isChecked, setIsChecked] = useState({
    fresher: false,
    experienced: false,
  });
  const [isFresher, setIsFresher] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    location: "",
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const { firstName, lastName, dob, gender, phone, email, location } =
      formData;
    if (firstName && lastName && dob && gender && phone && email && location) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [formData]);

  const handleCheckboxChange = (checkboxType) => (event) => {
    setIsChecked({
      fresher: checkboxType === "fresher" ? event.target.checked : false,
      experienced:
        checkboxType === "experienced" ? event.target.checked : false,
    });
  };

  const handleSave = () => {
    setIsFresher(isChecked.fresher ? false : isChecked.experienced ? true : "");
    handleData(isChecked.fresher ? false : isChecked.experienced ? true : null);
  };

  if (isFresher === true) {
    return <Navigate to="/experience-profile" />;
  } else if (isFresher === false) {
    return <Navigate to="/fresher-profile" />;
  }

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  return (
    <Container
      sx={{
        maxWidth: { lg: "lg", xl: "xl" },
      }}
    >
      <ThemeProvider theme={Theme}>
        <Typography variant="h2" color="primary">
          Basic Information
        </Typography>
        <Grid
          container
          pt={5}
          rowGap={2}
          columnSpacing={4}
          justifyContent="center"
        >
          <Grid lg={6} sm={6} xs={12} item>
            <TextField
              required
              fullWidth
              label="First Name"
              placeholder="Enter your First Name"
              type="text"
              value={formData.firstName}
              onChange={handleChange("firstName")}
            />
          </Grid>
          <Grid lg={6} sm={6} xs={12} item>
            <TextField
              required
              fullWidth
              label="Last Name"
              placeholder="Enter your Last Name"
              type="text"
              value={formData.lastName}
              onChange={handleChange("lastName")}
            />
          </Grid>
        </Grid>
        <Grid
          container
          pt={2}
          rowGap={2}
          columnSpacing={4}
          justifyContent="center"
        >
          <Grid lg={6} sm={6} xs={12} item>
            <TextField
              fullWidth
              required
              label="DOB"
              placeholder="Enter your DOB"
              type="date"
              value={formData.dob}
              InputLabelProps={{
                shrink: true,
                style: { fontSize: 18 },
              }}
              onChange={handleChange("dob")}
            />
          </Grid>
          <Grid lg={6} sm={6} xs={12} item>
            <TextField
              fullWidth
              required
              label="Gender"
              placeholder="Enter your Gender"
              type="text"
              value={formData.gender}
              onChange={handleChange("gender")}
            />
          </Grid>
        </Grid>
        <Grid
          container
          pt={2}
          rowGap={2}
          columnSpacing={4}
          justifyContent="center"
        >
          <Grid lg={6} sm={6} xs={12} item>
            <TextField
              required
              fullWidth
              label="Phone"
              placeholder="Enter your Phone Number"
              type="text"
              value={formData.phone}
              onChange={handleChange("phone")}
            />
          </Grid>
          <Grid lg={6} sm={6} xs={12} item>
            <TextField
              required
              fullWidth
              label="E-mail"
              placeholder="Enter your E-mail"
              type="text"
              value={formData.email}
              onChange={handleChange("email")}
            />
          </Grid>
        </Grid>

        <Grid container pt={2} rowGap={2} columnGap={4}>
          <Grid lg={12} sm={12} xs={12}>
            <TextField
              required
              fullWidth
              label="Location"
              placeholder="Enter your Location"
              type="text"
              value={formData.location}
              onChange={handleChange("location")}
            />
          </Grid>
        </Grid>
        <FormControl>
          <Grid
            container
            sx={{ mt: { xl: 2, xs: 2 } }}
            rowGap={4}
            columnGap={5}
            justifyContent="center"
          >
            <Grid xl={10} lg={10} sm={10} xs={10} item>
              <Box
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: `${
                    isChecked.fresher
                      ? "2px solid #0071D4"
                      : "2px solid #CCCCCC"
                  }`,
                  borderRadius: 10,
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Box>
                  <FaUserGraduate
                    style={{
                      fontSize: 30,
                      padding: "0px 5px 0px 10px",
                    }}
                  />
                  <Typography variant="p2">Fresher</Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ px: 3 }}
                        onChange={handleCheckboxChange("fresher")}
                        checked={isChecked.fresher}
                        checkedIcon={<CheckCircleRoundedIcon />}
                        icon={<CheckCircleOutlineRoundedIcon />}
                        disableRipple={true}
                        disabled={!isFormComplete}
                      />
                    }
                  />
                </Box>
                <Box>
                  <Typography color="grey" variant="p5">
                    0 to 1 year Experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xl={10} lg={10} sm={10} xs={10} item>
              <Box
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: `${
                    isChecked.experienced
                      ? "2px solid #0071D4"
                      : "2px solid #CCCCCC"
                  }`,
                  borderRadius: 10,
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Box>
                  <FaUserTie
                    style={{
                      fontSize: "30px",
                      padding: "0px 5px 0px 10px",
                    }}
                  />
                  <Typography variant="p2"> Experienced</Typography>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ px: 3 }}
                        onChange={handleCheckboxChange("experienced")}
                        checked={isChecked.experienced}
                        checkedIcon={<CheckCircleRoundedIcon />}
                        icon={<CheckCircleOutlineRoundedIcon />}
                        disableRipple={true}
                        disabled={!isFormComplete}
                      />
                    }
                  />
                </Box>
                <Box>
                  <Typography color="grey" variant="p5">
                    1+ year Experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </FormControl>
        <Stack direction="row" justifyContent={"end"} pt={3}>
          <SaveBtn onClick={handleSave} />
        </Stack>
      </ThemeProvider>
    </Container>
  );
};
export default BasicDetails;
