import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Card,
  Avatar,
  CardContent,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import StarPurple500Icon from "@mui/icons-material/StarBorderOutlined";

const Soft = () => {
  const [sourceIndustry, setSourceIndustry] = useState([
    "Public Speaking",
    "Negotiation",
    "Confidence",
    "Decision Making",
    "Team Building",
    "Creativity",
    "Innovation",
    "Analytical Thinking",
    "Detail Oriented Person",
    "Motivation",
    "Delegation",
  ]);
  const [targetIndustry, setTargetIndustry] = useState([]);
  const [selectedChip, setSelectedChip] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedChipData, setSelectedChipData] = useState([]);

  const handleAddItem = (item) => {
    setOpenDialog(true);
    setSelectedChip(item);
  };

  const handleRemoveItem = (item) => {
    setTargetIndustry((prevTargetIndustry) =>
      prevTargetIndustry.filter((targetItem) => targetItem !== item)
    );
    setSourceIndustry((prevSourceIndustry) => [...prevSourceIndustry, item]);
    setSelectedChipData((prevSelectedChipData) =>
      prevSelectedChipData.filter((chip) => chip.name !== item)
    );
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRating(0);
  };

  const handleRatingChange = (event, newValue) => {
    setSelectedRating(newValue);
  };

  const handleSaveRating = () => {
    if (selectedChip) {
      setSelectedChipData((prevData) => [
        ...prevData.filter((data) => data.name !== selectedChip),
        { name: selectedChip, rating: selectedRating },
      ]);
      setTargetIndustry((prevTargetIndustry) => [...prevTargetIndustry, selectedChip]);
      setSourceIndustry((prevSourceIndustry) =>
        prevSourceIndustry.filter((sourceItem) => sourceItem !== selectedChip)
      );
    }
    handleCloseDialog();
  };

  const renderRatingOvals = (rating) => {
    const ovals = [];
    for (let i = 0; i < 5; i++) {
      ovals.push(
        <Box
          key={i}
          sx={{
            width: 12,
            height: 20,
            borderRadius: 20,
            backgroundColor: i < rating ? "#0071D4" : "#C7C7C7",
            display: "inline-block",
            margin: 1,
          }}
        />
      );
    }
    return ovals;
  };

  const chunks = (arr, size) => {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  return (
    <Box m={2}>
      <Box
        sx={{
          height: "78vh",
          boxSizing: "border-box",
          overflowY: "auto",
          height: "calc(100% - 5px)",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
          },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            pb={3}
            sx={{
              fontSize: "16px",
              color: "#000000",
              fontWeight: 600,
              fontFamily: "Poppins",
            }}
          >
             What soft skills have you mastered?
          </Typography>
          <Box display="flex" flexWrap="wrap" pb={4} gap={2}>
            {targetIndustry.map((item) => (
              <Chip
                sx={{
                  border: "1px solid #0071D4",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  backgroundColor: "#CDE7F8",
                  color: "#0071D4",
                  "&:hover": { backgroundColor: "#CDE7F8" },
                  mr: 1,
                  mb: 2,
                }}
                key={item}
                label={item}
                icon={<CloseIcon fontSize="medium" />}
                onClick={() => handleRemoveItem(item)}
              />
            ))}
            {sourceIndustry.map((item) => (
              <Chip
                key={item}
                label={item}
                deleteIcon={<AddIcon fontSize="medium" />}
                onDelete={() => handleAddItem(item)}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        </Box>
        <Typography lineHeight={4} fontWeight={600} fontSize={"16px"}>
          Proficiency Level ( Well
          <span style={{ color: "#0071D4", fontWeight: "600" }}> impressive</span>
          )
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2} justifyContent='start' p={4}>
              {chunks(selectedChipData, 1).map((chunk, index) => (
                <>
                  {chunk.map((data, dataIndex) => (
                    <>
                      <Grid item lg={4} md={6} sm={12} xs={12}  >
                        <Typography>{data.name}</Typography>
                        <Box>{renderRatingOvals(data.rating)}</Box>
                      </Grid>
                    </>
                  ))}
                </>
              ))}
            </Grid>
          </CardContent>
        </Card>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            Rate yourself (0-5) in {selectedChip}
          </DialogTitle>
          <DialogContent>
            <Rating
              value={selectedRating}
              onChange={handleRatingChange}
              defaultValue={2}
              icon={
                <Typography
                  sx={{
                    border: "1px solid",
                    borderRadius: 100,
                    p: 0.1,
                    m: 0.5,
                  }}
                >
                  <Avatar sx={{ bgcolor: "#0071D4" }}>
                    <StarPurple500Icon />
                  </Avatar>
                </Typography>
              }
              emptyIcon={
                <Typography
                  sx={{
                    border: "1px solid",
                    borderRadius: 100,
                    p: 0.1,
                    m: 0.5,
                  }}
                >
                  <Avatar>
                    <StarPurple500Icon />
                  </Avatar>
                </Typography>
              }
            />
          </DialogContent>

          {selectedRating > 0 && (
            <>
              <Typography fontWeight={600} p={2} fontFamily="Poppins">
                Wow, that's {selectedRating} star! Well{" "}
                <span style={{ color: "#0071D4" }}>impressive </span>
                you are one step ahead of over 65% students...
              </Typography>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={handleSaveRating} color="primary">
                  Save Rating
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </Box>
  );
};

export default Soft;
