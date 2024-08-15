import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Chip, Stack, Dialog, DialogTitle, DialogContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Theme from "../../../utills/Theme";
import {
  sourceIndustry,
  sourceDomain,
  sourceDept,
  sourceFramework,
  sourceLang,
  sourceLibrary,
} from "../../Data/SkillsData";
import { ThemeProvider } from "@emotion/react";
const ProfileCreation1 = () => {
  const [IndustryChip, setIndustryChip] = React.useState(null);
  const [DomainChip, setDomainChip] = React.useState(null);
  const [DeptChip, setDeptChip] = React.useState([]);
  const [FrameworkChip, setFrameworkChip] = React.useState([]);
  const [LangChip, setLangChip] = React.useState([]);
  const [LibraryChip, setLibraryChip] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const handleAddIndustry = (item) => {
    setIndustryChip(item);
  };

  const handleAddDomain = (item) => {
    setDomainChip(item);
  };

  const handleAddDept = (item) => {
    setDeptChip((prev) =>
      prev.includes(item) ? prev.filter((id) => id !== item) : [...prev, item]
    );
  };

  const handleAddFramework = (item) => {
    setFrameworkChip((prev) =>
      prev.includes(item) ? prev.filter((id) => id !== item) : [...prev, item]
    );
  };

  const handleAddLang = (item) => {
    setLangChip((prev) =>
      prev.includes(item) ? prev.filter((id) => id !== item) : [...prev, item]
    );
  };

  const handleAddLibrary = (item) => {
    setLibraryChip((prev) =>
      prev.includes(item) ? prev.filter((id) => id !== item) : [...prev, item]
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <ThemeProvider theme={Theme}>
          <Box
            m={2}
            sx={{
              boxSizing: "border-box",
              maxHeight: "calc(100% - 5px)",
              overflowY: "auto",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                width: 0,
                background: "transparent",
              },
            }}
          >
            <Stack direction={"row"} gap={1} textAlign="start">
              <Typography pb={3} variant="p2" >
                Which Industry are you Interested in
              </Typography>
              <Typography pb={3} variant="p2" color={"common.blue"}>
                (Select any 1)
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
              {sourceIndustry.map((item) => (
                <Chip
                  sx={{
                    "&:hover": { backgroundColor: "#0071D4", color: "#fff" },
                  }}
                  key={item.id}
                  label={item.label}
                  onDelete={() => handleAddIndustry(item.id)}
                  deleteIcon={
                    IndustryChip === item.id ? <CloseIcon /> : <AddIcon />
                  }
                  // variant={IndustryChip === item.id ? "filled" : "filled"}
                  // backgroundColor= {IndustryChip === item.id ? "Blue" : "#0071D421"}
                  color={IndustryChip === item.id ? "primary" : "default"}
                />
              ))}
            </Stack>
            <Stack direction={"row"} gap={1} textAlign="start">
              <Typography pb={3} variant="p2">
                Which Domain are you Interested in
              </Typography>
              <Typography pb={3} variant="p2" color={"common.blue"}>
                (Select any 1)
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2} flexWrap="wrap" pb={5}>
              {sourceDomain.map((item) => (
                <Chip
                  sx={{
                    "&:hover": { backgroundColor: "#0071D4", color: "#fff" },
                  }}
                  key={item.id}
                  label={item.label}
                  onDelete={() => handleAddDomain(item.id)}
                  deleteIcon={
                    DomainChip === item.id ? <CloseIcon /> : <AddIcon />
                  }
                  // variant={DomainChip === item.id ? "outlined" : "filled"}
                  color={DomainChip === item.id ? "primary" : "default"}
                />
              ))}
            </Stack>
            <Typography variant="p2">
              Which Department are you Interested in
            </Typography>
            <Stack direction={"row"} gap={2} flexWrap="wrap" pb={5} pt={3}>
              {sourceDept.map((item) => (
                <Chip
                  key={item.id}
                  label={item.label}
                  onDelete={() => handleAddDept(item.id)}
                  deleteIcon={
                    DeptChip.includes(item.id) ? <CloseIcon /> : <AddIcon />
                  }
                  // variant={DeptChip.includes(item.id) ? "outlined" : "filled"}
                  color={DeptChip.includes(item.id) ? "primary" : "default"}
                  sx={{
                    "&:hover": { backgroundColor: "#0071D4", color: "#fff" },
                  }}
                />
              ))}
            </Stack>
            <Stack direction="row" gap={1} textAlign="start">
              <Typography variant="p2" pb={3}>
                What languages, frameworks, libraries are you familiar with?
              </Typography>
              <Typography
                onClick={handleOpen}
                color={"common.blue"}
                variant="p2"
              >
                See more
              </Typography>
            </Stack>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>More Information</DialogTitle>
              <DialogContent>
                <Typography pb={3} variant="p2">
                  Languages
                </Typography>
                <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                  {sourceLang.map((item) => (
                    <Chip
                      key={item.id}
                      label={item.label}
                      onDelete={() => handleAddLang(item.id)}
                      deleteIcon={
                        LangChip.includes(item.id) ? <CloseIcon /> : <AddIcon />
                      }
                      variant={
                        LangChip.includes(item.id) ? "outlined" : "filled"
                      }
                      color={LangChip.includes(item.id) ? "primary" : "default"}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#0071D4",
                          color: "#fff",
                        },
                      }}
                    />
                  ))}
                </Stack>
                <Typography pb={3} variant="p2">
                  Framework
                </Typography>
                <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                  {sourceFramework.map((item) => (
                    <Chip
                      key={item.id}
                      label={item.label}
                      onDelete={() => handleAddFramework(item.id)}
                      deleteIcon={
                        FrameworkChip.includes(item.id) ? (
                          <CloseIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      sx={{
            
                        "&:hover": { backgroundColor: "#0071D4" ,color: "#fff",},}}
                      // variant={FrameworkChip.includes(item.id) ? "outlined" : "filled"}
                      color={
                        FrameworkChip.includes(item.id) ? "primary" : "default"
                      }
                    />
                  ))}
                </Stack>
                <Typography pb={3} variant="p2">
                  Library
                </Typography>
                <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                  {sourceLibrary.map((item) => (
                    <Chip
                      key={item.id}
                      label={item.label}
                      onDelete={() => handleAddLibrary(item.id)}
                      deleteIcon={
                        LibraryChip.includes(item.id) ? (
                          <CloseIcon />
                        ) : (
                          <AddIcon />
                        )
                      }
                      sx={{
            
                        "&:hover": { backgroundColor: "#0071D4" ,color: "#fff",},}}
                      // variant={LibraryChip.includes(item.id) ? "outlined" : "filled"}
                      color={
                        LibraryChip.includes(item.id) ? "primary" : "default"
                      }
                    />
                  ))}
                </Stack>
              </DialogContent>
            </Dialog>
            <Stack>
              <Typography pb={3} variant="p2">
                Languages
              </Typography>
              <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                {sourceLang.map((item) => (
                  <Chip
                    key={item.id}
                    label={item.label}
                    onDelete={() => handleAddLang(item.id)}
                    deleteIcon={
                      LangChip.includes(item.id) ? <CloseIcon /> : <AddIcon />
                    }
                    // variant={LangChip.includes(item.id) ? "outlined" : "filled"}
                    color={LangChip.includes(item.id) ? "primary" : "default"}
                    sx={{
                      "&:hover": { backgroundColor: "#0071D4", color: "#fff" },
                    }}
                  />
                ))}
              </Stack>
              <Typography pb={3} variant="p2">
                Framework
              </Typography>
              <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                {sourceFramework.map((item) => (
                  <Chip
                    key={item.id}
                    label={item.label}
                    onDelete={() => handleAddFramework(item.id)}
                    deleteIcon={
                      FrameworkChip.includes(item.id) ? (
                        <CloseIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                      color={FrameworkChip.includes(item.id) ? "primary" : "default"}
                    sx={{
                      "&:hover": { backgroundColor: "#0071D4", color: "#fff" },
                    }}
                  />
                ))}
              </Stack>
              <Typography pb={3} variant="p2">
                Library
              </Typography>
              <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                {sourceLibrary.map((item) => (
                  <Chip
                    key={item.id}
                    label={item.label}
                    onDelete={() => handleAddLibrary(item.id)}
                    deleteIcon={
                      LibraryChip.includes(item.id) ? (
                        <CloseIcon />
                      ) : (
                        <AddIcon />
                      )
                    }
                    // variant={LibraryChip.includes(item.id) ? "outlined" : "filled"}
                    color={
                      LibraryChip.includes(item.id) ? "primary" : "default"
                    }
                    sx={{
                      "&:hover": { backgroundColor: "#0071D4", color: "#fff" },
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
};
export default ProfileCreation1;
