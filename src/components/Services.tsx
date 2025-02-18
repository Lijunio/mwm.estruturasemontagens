import React from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services: React.FC = () => {
  const whatsappLink = `https://wa.me/5531991502088?text=${encodeURIComponent(
    "Olá, queria saber mais informações a respeito de como realizar uma Locação Simples."
  )}`;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        background: "transparent",
        border: "transparent",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Carrossel de Imagens (Agora à esquerda em telas grandes) */}
      <Card
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          backgroundColor: "transparent",
          width: { xs: "100%", md: "650px" },
          height: { xs: "250px", md: "600px" },
          order: { xs: 1, md: 0 },
        }}
      >
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
          {["21.jpg", "home/pag2.png", "home/pag3.png", "home/pag4.png"].map((image, index) => (
            <div key={index}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "250px", md: "600px" },
                  overflow: "hidden",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/imagens/${image}`}
                  alt={`Imagem ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </div>
          ))}
        </Carousel>
      </Card>

      {/* Card de Locação Simples */}
      <Card
        sx={{
          padding: { xs: "20px", md: "30px" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          background: "transparent",
          color: "#fff",
          width: { xs: "100%", md: "650px" },
          height: { xs: "auto", md: "600px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", sm: "2rem" },
            }}
          >
            Locação Simples
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, fontSize: { xs: "0.9rem", sm: "1.2rem" } }}
          >
            Economize com a Locação Simples!
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: { xs: "0.9rem", sm: "1.2rem" } }}
          >
            Com ela, você reduz custos e tempo de montagem, aproveitando ao máximo a mão de obra que você já possui.
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mt: 2, fontSize: { xs: "1rem", sm: "1.5rem" } }}
          >
            Como funciona:
          </Typography>
          <ul style={{ fontSize: "1.2rem", lineHeight: "1.8", paddingLeft: "20px" }}>
            <li style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "8px" }}>
              Você escolhe os equipamentos que precisa em nosso catálogo.
            </li>
            <li style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "8px" }}>
              Nós entregamos os equipamentos diretamente no local da obra.
            </li>
            <li style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "8px" }}>
              Fazemos a montagem de forma rápida e eficiente.
            </li>
          </ul>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "15px" }}>
            {["Eficiência", "Economia", "Agilidade"].map((item) => (
              <Box key={item} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <FontAwesomeIcon icon={faPlus} size="lg" color="rgb(171, 118, 33)" />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Services;
