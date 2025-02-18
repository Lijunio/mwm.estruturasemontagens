import React from "react";
import { Box, Card, Typography, Grid } from "@mui/material";

const Services: React.FC = () => {
  return (
    <Box sx={{ p: 4, fontFamily: "'Roboto', sans-serif" }}>
      {/* Cards de Serviços */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1: Galpão Lonado */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 4, 
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2rem" },
              }}
            >
              Galpão Lonado
            </Typography>
            <Typography
              sx={{
                mb: 3,
                lineHeight: 1.5,
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              }}
            >
              Coberturas de aço carbono e alumínio, com lonas resistentes ou telhas galvanizadas. Ideais para obras, oficinas e armazenagem, oferecendo montagem personalizada e redução de custos.
            </Typography>
          </Card>
        </Grid>

        {/* Card 3: Tenda Carpa */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 4, 
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2rem" },
              }}
            >
              Tenda Carpa
            </Typography>
            <Typography
              sx={{
                mb: 3,
                lineHeight: 1.5,
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              }}
            >
              Estrutura de alumínio e aço carbono, com segurança e flexibilidade. Ideal para escritórios, refeitórios e vestuários, atendendo a diferentes demandas com soluções personalizadas.
            </Typography>
          </Card>
        </Grid>

        {/* Card 4: Lonas Sob Medida */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              padding: 4, 
              boxShadow: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              borderRadius: 4,
              backgroundColor: "rgba(151, 160, 152, 0.3)",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "1.875rem", md: "2rem" },
              }}
            >
              Lonas Sob Medida
            </Typography>
            <Typography
              sx={{
                mb: 3,
                lineHeight: 1.5,
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              }}
            >
              Lonas personalizadas com alta qualidade e garantia, atendendo diversas necessidades e trabalhando com as melhores marcas do mercado, garantindo durabilidade e eficiência.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
