import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, Button, MenuItem, Badge, Grid, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const pages = ['HOME', 'ABOUT', 'PRODUCTS', 'CONTACT']


function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <AppBar position='static' sx={{ bgcolor: '#eeeeee', color: 'black'}}>
        <Toolbar>
          {/* =========== NAVBAR MENU ========== */}

          <Box
            noWrap
            component={NavLink}
            to="/"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <img src="../../../images/logo.png" alt="store logo" height={37} width={150} />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, }}>
            <IconButton
              color="inherit"
              size="large"
              aria-label="Navbar Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => { setAnchorElNav(e.currentTarget) }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => { setAnchorElNav(null) }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuList>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => { setAnchorElNav(null) }}>
                    <Button
                      color='inherit'
                      size="small"
                      component={NavLink}
                      to={page === 'HOME' ? '/' : `/${page}`.toLowerCase()}
                      sx={{ fontWeight: 'bold', '&.active': { color: '#2196f3', fontSize: 14 } }}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
                <MenuItem>
                  <IconButton
                    color="inherit"
                    size="large"
                    component={NavLink}
                    to="/cart"
                    onClick={() => { setAnchorElNav(null) }}
                    sx={{ fontWeight: 'bold', '&.active': { color: '#2196f3', fontSize: 14 } }}
                  >
                    <Badge badgeContent={4} color="info" >
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          {/* =========== NAVBAR =========== */}
          <Grid container>
            <Grid item md={3}>
              <Box
                noWrap
                component={NavLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                <img src="../../../images/logo.png" alt="store logo" height={37} width={150} />
              </Box>
            </Grid>

            <Grid item md={9} sx={{ display: 'flex', justifyContent: 'end' }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    color='inherit'
                    size="small"
                    key={page}
                    onClick={() => { setAnchorElNav(null) }}
                    component={NavLink}
                    to={page === 'HOME' ? '/' : `/${page}`.toLowerCase()}
                    sx={{ fontWeight: 'bold', '&.active': { color: '#2196f3', fontSize: 14 } }}
                  // sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
                <IconButton
                  color="inherit"
                  size="large"
                  component={NavLink}
                  to="/cart"
                  sx={{ fontWeight: 'bold', '&.active': { color: '#2196f3', fontSize: 14 } }}
                >
                  <Badge badgeContent={4} color="info" >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
    </AppBar >
  );
}


export default Header; 