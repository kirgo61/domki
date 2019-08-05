import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerItem">
          <h6 className="footerItemTitle">KONTAKT</h6>
          <p>Ryszard Herbut</p>
          <p>+48 504 136 029</p>
          <p>+48 791 051 312</p>
          <p>domkinadrzeczka@gmail.com</p>
        </div>
        <div className="footerItem">
          <h6 className="footerItemTitle">ADRES</h6>
          <p>Komańcza</p>
          <p>Komańcza 138</p>
          <p>38-543</p>
          <p>nr konta: XXXXXXXXXXX</p>
        </div>
      </footer>
      <div className="footerLast">Domki Nad Rzeczką 2019</div>
    </div>
  );
};

export default Footer;
