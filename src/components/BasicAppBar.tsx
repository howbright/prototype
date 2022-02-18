import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../comake_logo_white.png';

export default function BasicAppBar() {

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img
        src={logo}
        style={{width:110}}
        loading="lazy"
      ></img>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AddIcon fontSize='inherit'/>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon /> 
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}