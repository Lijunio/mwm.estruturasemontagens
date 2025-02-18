import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import AdditionalInfo from "./components/AdditionalInfo";
import ServicesParte2 from "./components/ServicesParte2"; 
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column", 
        }}
      >
        <Box id="home" sx={{ mb: 4 }}>
          <Home />
        </Box>
        <Box id="services" sx={{ mb: 4 }}>
          <Services /> 
        </Box>
        <Box id="additional-info" sx={{ mb: 4 }}>
          <AdditionalInfo /> 
        </Box>
        <Box id="servicesParte2" sx={{ mb: 4 }}>
          <ServicesParte2 />
        </Box>
        <Box id="about-us" sx={{ mb: 4 }}>
          <AboutUs />
        </Box>
        
        <Box id="contact" sx={{ mb: 4 }}>
          <Contact />
        </Box>
      </Box>
    </>
  );
};

export default App;