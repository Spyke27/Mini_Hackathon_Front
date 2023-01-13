import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import Projeto from "../../model/Projeto";
import "./Projetos.css";
/* import Teste from "./teste.jpg"; */
import Edit from "./edit.svg";
import Delete from "./delete.svg";
import { busca } from "../../service/Service";


function Projetos() { 

    const [projeto, setProjeto] = useState<Projeto[]>([]);

    async function getProjeto() {
      await busca("/projetos/all", setProjeto);
    }
    useEffect(() => {
      getProjeto();
    }, [projeto.length]);

return (
    <div className="container">
    <h1>Projetos Generation</h1>
      <Box className="containerProjeto">
            {projeto.map((projeto) => (
              <Card className="cardProjeto">
                <CardMedia
                className="logoProjeto"
                component="img"
                width="100%"
                image={projeto.logoProjeto}
                alt="Logo do Projeto"
              />
                <CardContent>
                  <div className="nomeElink">
                    <div className="a">
                      <span></span>
                      <Typography className="nomeProjeto" variant="h4" component="div">
                          {projeto.nomeProjeto}
                      </Typography>
                    </div>
                    <button className="btnProjeto">Projeto</button>
                  </div>
                  <p className="numeroGrupo">Grupo: {projeto.grupo?.numeroGrupo}?</p>
               
                <Typography className="pitProjeto">
                  <strong>Descrição:</strong> <br />
                  {projeto.pitProjeto}
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
         ))}
      </Box>
    </div>
  );
} 
export default Projetos;