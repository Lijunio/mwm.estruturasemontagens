import React, { useState } from "react";
import { Box, Card, Typography, IconButton, Button, Collapse } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean[]>([false, false]);

  const handleToggle = (index: number) => {
    setExpanded(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const whatsappLink = `https://wa.me/5531991502088?text=${encodeURIComponent(
    "Olá! Estava visitando seu site e gostaria de saber mais sobre os galpões de lona que vocês oferecem. Poderiam fornecer mais detalhes sobre os serviços, como custos e prazos de montagem? Ficaria muito grato pela ajuda!"
  )}`;

  const handleButtonClick = () => {
    window.location.href = whatsappLink;
  };

  return (
    <Box sx={{ p: 4, fontFamily: "'Roboto', sans-serif" }}>
      {/* Título da seção */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          color: "white",
          mb: 4,
          fontSize: {
            xs: '1.5rem',
            sm: '3rem',
          },
        }}
      >
        Perguntas Frequentes
      </Typography>

      {/* Perguntas e Respostas */}
      {[
        {
          question: "Quais são as vantagens de usar lonas anti abrasivas com filtro UV em minhas estruturas?",
          answer: `As lonas anti abrasivas com filtro UV oferecem diversas vantagens para suas estruturas, incluindo:
          
          - **Durabilidade:** A alta resistência à abrasão garante maior vida útil à lona, reduzindo a necessidade de substituições frequentes.
          - **Proteção:** O filtro UV protege contra os raios solares, prevenindo o desgaste da lona e dos materiais armazenados sob ela.
          - **Segurança:** A resistência à abrasão e ao rasgo garante maior segurança para pessoas e bens.
          - **Economia:** A durabilidade e a proteção UV reduzem custos de manutenção e substituição.`,
        },
        {
          question: "Qual a vida útil esperada para uma lona anti abrasiva com filtro UV?",
          answer: `A vida útil de uma lona anti abrasiva com filtro UV pode variar de 5 a 10 anos, dependendo das condições de uso e manutenção. 
          
          A proteção UV e a resistência à abrasão prolongam sua durabilidade, mas fatores como exposição intensa ao sol, vento e poluição podem afetar o tempo de vida útil.`,
        }
      ].map((item, index) => (
        <Card
          key={index}
          sx={{
            padding: 3,
            boxShadow: 3,
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: 4,
            backgroundColor: "#222b32",
            color: "white",
            mb: 4,
            position: "relative",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: {
                xs: '1rem',
                sm: '1.6rem',
              },
            }}
          >
            {index + 1}. {item.question}
          </Typography>

          {/* Botão para expandir */}
          <IconButton
            onClick={() => handleToggle(index)}
            sx={{
              color: "white",
              position: "absolute",
              right: 16,
              top: "50%",
              transform: expanded[index] ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)",
              transition: "transform 0.3s ease",
            }}
          >
            <ExpandMoreIcon />
          </IconButton>

          {/* Resposta com animação */}
          <Collapse in={expanded[index]} timeout="auto">
            <Typography
              sx={{
                mt: 2,
                fontSize: {
                  xs: '0.875rem',
                  sm: '1rem',
                  lg: '1.25rem',
                }
              }}
            >
              {item.answer}
            </Typography>
          </Collapse>
        </Card>
      ))}

      {/* Botão de solicitação de orçamento */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "40px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            padding: {
              xs: "8px 16px",
              sm: "10px 20px",
            },
            borderRadius: "5px",
            fontSize: {
              xs: "0.9rem",
              sm: "1.1rem",
            },
            backgroundColor: "rgb(170, 118, 35)",
            "&:hover": {
              backgroundColor: "rgb(170, 118, 35, 0.7)",
            },
          }}
          onClick={handleButtonClick}
        >
          Solicite seu orçamento
        </Button>
      </Box>
    </Box>
  );
};

export default Faq;
