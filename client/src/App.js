import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import ItemAddForm from './components/ItemAddForm'
import React from 'react'

import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'

import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

import { GlobalProvider } from './context/GlobalState'

import Header from './components/Header'
import TodoList from './components/TodoList'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: 'white',
    padding: '15px 30px'
  }
})

const theme = createTheme({
  typography: { h2: { fontSize: 25, marginBottom: 15 } }

  // palette: {
  //   primary: {
  //     main: orange[500]
  //   },

  //   secondary: {
  //     main: green[400]
  //   }
  // }
})

function App () {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        {/* <Container maxWidth='sm'> */}
        <Container maxWidth='md'>
          {/* <Container maxWidth='lg'> */}

          <div className='App'>
            <header className='App.header'>
              <Header />
              <TodoList />
              <ItemAddForm />
            </header>
          </div>
        </Container>
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App
