import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Select,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./FormStyle.css";
import Turma from "../model/Turma";
import Grupo from "../model/Grupo";


function CadastroProjeto() {
 
  let navigate = useNavigate()
  const [turmas, setTurmas] = useState<Turma[]>([])
  const [grupos, setGrupos] = useState<Grupo[]>([])

  




  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar Projeto
            </Typography>
            <TextField
              id="projeto"
              label="Projeto"
              variant="outlined"
              name="projeto"
              margin="normal"
              fullWidth
            />
            <TextField
              id="logo"
              label="Logo"
              variant="outlined"
              name="logo"
              margin="normal"
              fullWidth
            />
            <TextField
              id="link"
              label="Link do Projeto"
              variant="outlined"
              name="link"
              margin="normal"
              fullWidth
            />
            <TextField
              id="pit"
              label="Pit do Projeto"
              variant="outlined"
              name="pit"
              margin="normal"
              fullWidth
            />
            <Grid container>
              <Grid item sm={6}>
                <InputLabel id="demo-simple-select-helper-label">
                  Turma:
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                ></Select>
                <FormHelperText>Selecione o nº da sua turma.</FormHelperText>
              </Grid>
              <Grid item sm={6}>
                <InputLabel id="demo-simple-select-helper-label">
                  Grupo:
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                ></Select>
                <FormHelperText>Selecione o nº do seu grupo.</FormHelperText>
              </Grid>
            </Grid>

            <Box marginTop={2} textAlign="center"></Box>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroProjeto;