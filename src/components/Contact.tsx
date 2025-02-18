import React from "react";
import { Typography, Box, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact: React.FC = () => {
  const whatsappLink = `https://wa.me/5531991502088?text=${encodeURIComponent(
    "Olá! Estava visitando seu site e gostaria de saber mais sobre os serviços oferecidos pela MWM Engenharia para avaliar como podemos trabalhar juntos. Poderia me ajudar com mais informações?"
  )}`;

  const handleWhatsAppClick = () => {
    window.location.href = whatsappLink;
  };

  return (
    <Box sx={{ color: "white", textAlign: "center", p: 4 }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontSize: { xs: "1.6rem", sm: "2rem", md: "3rem" }, 
        }}
      >
        Contato
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
        <Button
          startIcon={<PhoneIcon />}
          href="tel:+5531991502088" 
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: 2,
            padding: "10px 20px",
            fontSize: { xs: "0.5rem", sm: "1rem" },
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            transition: "transform 0.3s ease",
            "&:active": {
              transform: "scale(0.98)", // Animação de clique
            },
          }}
        >
          (31) 99150-2088
        </Button>

        <Button
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsAppClick}
          sx={{
            color: "white",
            border: "1px solid white",
            borderRadius: 2,
            padding: "10px 20px",
            fontSize: { xs: "0.5rem", sm: "1rem" }, 
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            transition: "transform 0.3s ease",
            "&:active": {
              transform: "scale(0.98)", // Animação de clique
            },
          }}
        >
          Entre em contato pelo WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
