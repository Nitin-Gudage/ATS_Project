import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Avatar,Link
} from "@mui/material";
import gifImage from "../../../asset/images/sideimages/final-Submit.gif"
import avtar from "../../../asset/images/sideimages/avtar.png";
import { Education, Newdata, profile, skill } from "../../Data/serviceData";
import {  useNavigate } from "react-router-dom";
const Completed = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  // const Navigate =useNavigate()
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{height:'100%',display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={gifImage}
              alt="login"
              style={{
                maxWidth: "50%",
                objectFit: "contain",
              }}
            />

            <Typography lineHeight={4} fontWeight={600} textAlign="center">
              <Typography>Congratulation !</Typography>
              You have completed your Profile Lets Rock.
            </Typography>
            <Box display="flex" justifyContent="center" gap={3}>
              <Typography
                variant="p4"
                color="common.blue"
                onClick={handleOpenDialog}
              >
                View Profile
              </Typography>
              <Typography
                variant="p4"
                color="common.blue"
                onClick={() => navigate("/openings")}
              >
                Job Openings
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <Box display={"flex"} justifyContent="space-around">
            <Box>
              <Typography variant="h3">james</Typography>
              <Typography color="#0071D4" variant="h3">
                Andersion
              </Typography>
            </Box>
            <Box>
              <Avatar
                alt="Travis Howard"
                sx={{ width: 100, height: 100 }}
                src={avtar}
              />
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="space-around">
            <Box>
              {Newdata.map((item) => (
                <>
                  <Typography variant="h5" color="#C09421" lineHeight="2.5">
                    internship
                  </Typography>
                  <Typography variant="p2" color="#000000">
                    {item.internshipCompny}
                  </Typography>
                  <Typography color="#818181" fontsize="16" fontwaight="400">
                    {item.intenshipDate}
                  </Typography>
                  <Link variant="p3" color="#0071D4" fontWeight={600}>
                    certification
                  </Link>
                  {item.certificates.map((step) => (
                    <>
                      <Typography>{step}</Typography>
                    </>
                  ))}
                </>
              ))}
            </Box>

            <Box>
              {profile.map((item) => (
                <>
                  <Typography variant="h5" color="#C09421" lineHeight="2.5">
                    SDE (Fresher)
                  </Typography>
                  <Box display="flex" justifyContent="space-between" gap={1}>
                    <Box>
                      <Typography color="#818181">Phone</Typography>
                      <Typography color="#818181">Email </Typography>
                      <Typography color="#818181">Gender </Typography>
                      <Typography color="#818181">DOB </Typography>
                      <Typography color="#818181">Location </Typography>
                    </Box>
                    <Box>
                      <Typography>{item.Phone}</Typography>
                      <Typography> {item.Mail}</Typography>
                      <Typography>{item.Gender}</Typography>
                      <Typography>{item.DOB}</Typography>
                      <Typography> {item.Location}</Typography>
                    </Box>
                  </Box>
                </>
              ))}

              <Typography variant="h5" color="#C09421" lineHeight="2.5">
                Skills
              </Typography>
              <Typography
                sx={{
                  backgroundColor: "#0071D4",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  lineHeight: "29px",
                  textAlign: "center",
                }}
              >
                SDE - Programming - Frontend
              </Typography>
              {skill.map((step) => (
                <>
                  <Typography fontSize="15px" lineHeight={2}>
                    {step}
                  </Typography>
                </>
              ))}
              {Education.map((item) => (
                <>
                  <Typography variant="h5" color="#C09421" lineHeight="2.5">
                    Education
                  </Typography>
                  <Typography variant="p2" color="#000000">
                    {item.college}
                  </Typography>
                  <Typography color="#818181" fontsize="16" fontwaight="400">
                    {item.date}
                  </Typography>
                  <Typography>{item.degree}</Typography>
                  <Typography>{item.grade}</Typography>
                  {item.certificates.map((item) => (
                    <>
                      <Typography>{item}</Typography>
                    </>
                  ))}
                </>
              ))}
            </Box>
          </Box>
        </DialogContent>
        
      </Dialog>
    </>
  );
};

export default Completed;
