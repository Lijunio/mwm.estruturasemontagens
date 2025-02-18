import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";  
import Slider from "react-slick"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdditionalInfo: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const whatsappLink = `https://wa.me/5531991502088?text=${encodeURIComponent(
    "Olá! Estava visitando seu site e gostaria de saber mais sobre os serviços oferecidos pela MWM Engenharia para avaliar como podemos trabalhar juntos. Poderia me ajudar com mais informações?"
  )}`;

  return (
    <Box sx={{ padding: "40px", backgroundColor: "transparent", color: "#fff" }}>
      <Grid
        container
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        {/* coluna 1 - 60% de largura */}
        <Grid item xs={12} md={7}>
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              backgroundColor: "transparent",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                O que é um galpão de lona?
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Um galpão de lona é uma estrutura versátil e econômica, ideal para armazenamento, proteção de equipamentos ou até mesmo como espaço de trabalho temporário. Ele é composto por uma estrutura metálica coberta por lonas de alta resistência, que oferecem durabilidade e proteção contra intempéries.
              </Typography>
            </CardContent>
          </Card>

          {/* carrossel */}
          <Slider {...settings}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "400px" },
                overflow: "hidden",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imagens/22.jpg`}
                alt="Imagem 22"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", md: "400px" },
                overflow: "hidden",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/imagens/23.png`}
                alt="Imagem 23"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Slider>
        </Grid>

        {/* 40% de largura */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            marginTop: { xs: 0, md: "0" },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Quais as vantagens?
          </Typography>

          <Box
            sx={{
              backgroundColor: "transparent",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            {[
              "Lonas anti abrasivas de alta resistência com filtro UV",
              "Assistência técnica preventiva e corretiva",
              "Flexibilidade: Adaptam-se às necessidades específicas do seu negócio.",
              "Custo-benefício: Menores custos de construção e manutenção.",
              "Agilidade: Montagem rápida, reduzindo o tempo de implantação.",
              "Escalabilidade: Fácil expansão ou redução de espaço.",
              "Sustentabilidade: Materiais recicláveis alinhados ao conceito de economia circular.",
            ].map((advantage, index) => (
              <Typography
                key={index}
                variant="body2"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  display: "flex",
                  alignItems: "center", 
                }}
              >
                <Check sx={{ color: "#4caf50", marginRight: "8px" }} />
                {advantage}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdditionalInfo;
