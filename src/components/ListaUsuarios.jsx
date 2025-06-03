import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Container
} from '@mui/material';

// Este componente mostra a lista de usuários cadastrados
function ListaUsuarios({ usuarios }) {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Usuários Cadastrados
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Sexo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((usuario, index) => (
                <TableRow key={index}>
                  <TableCell>{usuario.nome}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.idade}</TableCell>
                  <TableCell>{usuario.sexo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default ListaUsuarios; 