import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";
const SideDrawer = props => {
  const scrollToElement = e => {
    scroller.scrollTo(e, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
  };
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.openProp}
        onClose={() => props.onCloseProp()}
      >
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              props.onCloseProp();
              scrollToElement("About");
            }}
          >
            O nas
          </ListItem>
          <ListItem
            button
            onClick={() => {
              scrollToElement("Offer");
              props.onCloseProp();
            }}
          >
            Oferta
          </ListItem>
          <ListItem
            button
            onClick={() => {
              scrollToElement("Attractions");

              props.onCloseProp();
            }}
          >
            Atrakcje
          </ListItem>
          <ListItem
            button
            onClick={() => {
              scrollToElement("Gallery");

              props.onCloseProp();
            }}
          >
            Galeria
          </ListItem>
          <ListItem
            button
            onClick={() => {
              scrollToElement("Map");

              props.onCloseProp();
            }}
          >
            Lokalizacja
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
export default SideDrawer;
