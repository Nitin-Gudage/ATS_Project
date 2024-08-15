import { createTheme } from "@mui/material";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const Theme = createTheme({
  palette: {
    primary: {
      main: "#0071D4",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
      grey: "#818181",
      lightBlue: "rgb(from #0071D4 r g b / 63%)",
      blue: "#0071D4",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "#000",
          borderRadius: 30,
          fontWeight: "500",
          fontSize: 22,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          borderColor: "#EDDAAB",
          borderRadius: 50,
          padding: 3,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          marginBottom: 15,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 25,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
          padding: 25,
        },
      },
    },
    
  },
  typography: {
    fontSize: 16,
    fontFamily: {
      main: "Poppins",
    },
    h1: {
      // for main headin like  Profile Createtion
      fontSize: 40,
      fontWeight: 600,
      lineHeight: "40px",
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: "48px",
    },
    //   h3: {
    //     fontSize:22,
    //     fontWeight:900,
    //   },
    //   h4: {
    //     fontSize:26,
    //     fontWeight:800,
    //   },
    h5: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "30px",
    },
    h6: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "27px",
    },
    p1: {
      // for subheading
      fontSize: 18,
      fontWeight: 500,
      lineHeight: "27px",
    },
    p2: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "24px",
    },
    p3: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
    },
    p4: {
      fontWeight: 600,
      fontsize: 14,
      lineHeight: "21px",
    },
  },
});

export default Theme;
