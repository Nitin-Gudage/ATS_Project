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
import CustomChip from "../../../utills/CustomChip";

const Technical1 = () => {
  const [IndustryChip, setIndustryChip] = React.useState(null);
  const [DomainChip, setDomainChip] = React.useState(null);
  const [DeptChip, setDeptChip] = React.useState([]);
  const [FrameworkChip, setFrameworkChip] = React.useState([]);
  const [LangChip, setLangChip] = React.useState([]);
  const [LibraryChip, setLibraryChip] = React.useState([]);
  const [ToolsChip, setToolsChip] = React.useState([]);

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
  const handleAddTools = (item) => {
    setToolsChip((prev) =>
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
      <ThemeProvider theme={Theme}>
        <Box>
          <Stack direction={"row"} py={2}>
            <Typography  variant="p2">
              Which Domain are you Interested in<Typography pl={1} variant="p2" color={"common.blue"}>
              (Select any 1)
            </Typography>
            </Typography>
            
          </Stack>
          <Stack direction={"row"} gap={2} flexWrap="wrap" pb={4}>
            {sourceDomain.map((item) => (
               <CustomChip
               label={item.label}
               onClick={() => handleAddDomain(item.id)}
               status={DomainChip === item.id}
             />
            ))}
          </Stack>
          <Stack direction={"row"} pb={2} >
            <Typography variant="p2">
              Which Department are you Interested in<Typography pl={1} variant="p2" color={"common.blue"}>
              (Select any 1)
            </Typography>
            </Typography>
            
          </Stack>
          
          <Stack direction={"row"} columnGap={2} flexWrap="wrap" pb={4}>
            {sourceDept.map((item) => (
              <CustomChip
              label={item.label}
              onClick={() => handleAddDept(item.id)}
              status={DeptChip.includes(item.id)}
            />
            ))}
          </Stack>
          <Stack direction="row"pb={2}>
            <Typography variant="p2" >
              What are all the Languages, Frameworks, libraries are you familiar
              with<Typography pl={1} onClick={handleOpen} color={"common.blue"} variant="p2">
              See more
            </Typography>
            </Typography>
            
          </Stack>
          <Stack direction={"row"} gap={2} flexWrap="wrap" pb={5} pt={4}>
            {sourceFramework.map((item) => (
               <CustomChip
               label={item.label}
               onClick={() => handleAddFramework(item.id)}
               status={FrameworkChip.includes(item.id)}
             />
            ))}
            {sourceLang.map((item) => (
             
              <CustomChip
              label={item.label}
              onClick={() => handleAddLang(item.id)}
              status={LangChip.includes(item.id)}
            />
            ))}
            {sourceLibrary.map((item) => (
              <CustomChip
              label={item.label}
              onClick={() => handleAddLibrary(item.id)}
              status={LibraryChip.includes(item.id)}
            />
            ))}
          </Stack>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>More Information</DialogTitle>
            <DialogContent>
              <Typography pb={3} variant="p2">
                Languages
              </Typography>
              <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                {sourceLang.map((item) => (
                  <CustomChip
                  label={item.label}
                  onClick={() => handleAddLang(item.id)}
                  status={LangChip.includes(item.id)}
                />
                ))}
              </Stack>
              <Typography pb={3} variant="p2">
                Framework
              </Typography>
              <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                {sourceFramework.map((item) => (
                   <CustomChip
                   label={item.label}
                   onClick={() => handleAddFramework(item.id)}
                   status={FrameworkChip.includes(item.id)}
                 />
                ))}
              </Stack>
              <Typography pb={3} variant="p2">
                Library
              </Typography>
              <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
                {sourceLibrary.map((item) => (
                  <CustomChip
                  label={item.label}
                  onClick={() => handleAddLibrary(item.id)}
                  status={LibraryChip.includes(item.id)}
                />
                ))}
              </Stack>
            </DialogContent>
          </Dialog>
        <Dialog>
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
                  variant={LangChip.includes(item.id) ? "outlined" : "filled"}
                  color={LangChip.includes(item.id) ? "primary" : "default"}
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
                  variant={
                    FrameworkChip.includes(item.id) ? "outlined" : "filled"
                  }
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
                    LibraryChip.includes(item.id) ? <CloseIcon /> : <AddIcon />
                  }
                  variant={
                    LibraryChip.includes(item.id) ? "outlined" : "filled"
                  }
                  color={LibraryChip.includes(item.id) ? "primary" : "default"}
                />
              ))}
            </Stack>
          </DialogContent>
        </Dialog>
        <Stack>
          <Typography pb={3} variant="p2">
            What are all the development tools & Environments are you familiar
            with
          </Typography>
          <Stack direction={"row"} gap={2} flexWrap="wrap" pb={3}>
            {sourceLang.map((item) => (
              <CustomChip
              label={item.label}
              onClick={() => handleAddTools(item.id)}
              status={ToolsChip.includes(item.id)}
            />
            ))}
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
    </>
  );
};
export default Technical1;
