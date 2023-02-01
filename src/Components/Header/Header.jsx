import { Grid, TextField } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./header.scss";

function Header() {
  return (
    <div className="headerTop">
      <Container>
        <Grid container>
          <Grid item lg={2}>
            <div className="logoArea">
              <img
                className="logoImage"
                src="https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png"
                alt=""
              />
            </div>
          </Grid>
          <Grid item lg={6}>
            <div className="searchArea">
              <TextField label="Search" fullWidth />
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="iconArea">
              <span>
                <ShoppingCartIcon />
              </span>
              <span>
                <LoginIcon />
              </span>
              <span>
                <PersonIcon />
              </span>
              <span>
                <DarkModeIcon />
              </span>
              <span>
                <LightModeIcon />
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
