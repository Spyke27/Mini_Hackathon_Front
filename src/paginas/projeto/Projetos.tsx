import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Theme,
  Typography
} from "@material-ui/core";
import Projeto from "../../model/Projeto";
import "./Projetos.css";
import Teste from "./teste.jpg";
import Edit from "./edit.svg";
import Delete from "./delete.svg";

function Projetos() { 

    const [projeto, setProjeto] = useState<Projeto[]>([]);

return (
    <>
      <Box className="containerProjeto">
          {/*  {projeto.map((projeto) => ( */}
              <Card className="cardProjeto">
                <CardMedia
                className="logoProjeto"
                component="img"
                width="100%"
                image={Teste}
                alt="Logo do Projeto"
              />
                <CardContent>
                  <div className="nomeElink">
                    <div className="a">
                      <span></span>
                      <Typography className="nomeProjeto" variant="h4" component="div">
                      GreenShop
                      </Typography>
                    </div>
                  

                <a href="#linkdoprojeto">
                    <button className="btnProjeto">Projeto</button>
                </a>
                  </div>
               
                <Typography className="pitProjeto">
                  <strong>Descrição:</strong> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum accusamus ducimus blanditiis ipsum eius placeat culpa, perspiciatis deserunt veniam vitae quia, tempora ab nobis quis iste repellendus minima rem?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore ipsum architecto. Et nihil consectetur quidem amet obcaecati, ipsum vel maxime
                </Typography>
              </CardContent>
              <CardActions>
              <Box className="btnOptions" mb={1.5}>
                
                <div className="text-decorator-none ">
                  <Box mx={1} className="btnHover">
                      <img className="btnHover" src={Edit} alt="" />
                  </Box>
                </div>

                <div className="text-decorator-none">
                  <Box mx={1} className="btnHover">
                    <img className="btnHover" src={Delete} alt="" />
                  </Box>
                </div>
              </Box>
              </CardActions>
              </Card>
         {/* ))} */}
      </Box>
    </>
  );
} 
export default Projetos;