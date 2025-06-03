import { useState, useEffect } from 'react'
import { Container, Typography, Box } from '@mui/material'
import CadastroUsuario from './components/CadastroUsuario'
import ListaUsuarios from './components/ListaUsuarios'

function App() {
  // Aqui guardamos a lista de todos os usuários
  const [usuarios, setUsuarios] = useState(() => {
    // Tenta pegar os usuários salvos no computador
    const usuariosSalvos = localStorage.getItem('usuarios')
    return usuariosSalvos ? JSON.parse(usuariosSalvos) : []
  })

  // Salva os usuários no computador sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }, [usuarios])

  // Esta função adiciona um novo usuário à lista
  const handleCadastro = (novoUsuario) => {
    setUsuarios(prev => [...prev, novoUsuario])
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Sistema de Cadastro
        </Typography>
        
        <CadastroUsuario onCadastro={handleCadastro} />
        <ListaUsuarios usuarios={usuarios} />
      </Box>
    </Container>
  )
}

export default App
