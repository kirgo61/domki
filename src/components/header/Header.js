import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const Header = () => {
  return (
    <nav>
      <AppBar
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#2D3A3a"
        }}
        postision="fixed"
      >
        <ToolBar>
          <Typography
            variant="title"
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: "2rem",
              color: "white"
            }}
          >
            Domki Nad Rzeczką
          </Typography>
          <Typography
            style={{
              color: "white",
              fontFamily: "Lobster",
              fontSize: "1rem",
              marginLeft: "2rem"
            }}
          >
            +48 791 513 312 +48 504 136 029
          </Typography>
        </ToolBar>
        <ToolBar>
          <Typography variant="subheading">Kontakt</Typography>
        </ToolBar>
      </AppBar>
    </nav>
  );
};

export default Header;
