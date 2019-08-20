import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

class Header extends React.Component {
  state = {
    right: false,
    headerShow: false
  };
  toogleDrawer = () => {
    this.setState({ right: !this.state.right });
  };
  render() {
    return (
      <nav>
        <AppBar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#2D3A3a"
            // width: "100vw"
          }}
          position="fixed"
        >
          <ToolBar>
            <Typography
              variant="title"
              style={{
                fontFamily: "Raleway, sans-serif",

                color: "white"
              }}
              className="headerTitle"
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
              +48 791 513 312
            </Typography>
          </ToolBar>
          <ToolBar>
            <IconButton>
              <MenuIcon
                aria-label="Menu"
                color="primary"
                onClick={() => this.toogleDrawer()}
              />
            </IconButton>
            <SideDrawer
              openProp={this.state.right}
              onCloseProp={() => this.toogleDrawer()}
            />
          </ToolBar>
        </AppBar>
      </nav>
    );
  }
}
export default Header;
