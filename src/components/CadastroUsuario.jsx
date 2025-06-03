import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  Box,
  Container
} from '@mui/material';

// Este é o componente que vai mostrar o formulário de cadastro
function CadastroUsuario({ onCadastro }) {
  // Aqui guardamos as informações que o usuário digita
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    idade: ''
  });

  // Esta função é chamada quando o usuário digita algo
  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setUsuario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Esta função é chamada quando o usuário clica em "Cadastrar"
  const handleSubmit = (evento) => {
    evento.preventDefault();
    onCadastro(usuario);
    // Limpa o formulário depois de cadastrar
    setUsuario({
      nome: '',
      email: '',
      idade: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Cadastro de Usuário
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nome"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            margin="normal"
            required
          />
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={usuario.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          
          <TextField
            fullWidth
            label="Idade"
            name="idade"
            type="number"
            value={usuario.idade}
            onChange={handleChange}
            margin="normal"
            required
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Cadastrar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default CadastroUsuario; 