import React from "react";

const Map = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83193.96162135941!2d22.0001631758524!3d49.33679124029272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c050464088885%3A0xe1b40794b707321f!2z4oCeRG9ta2kgbmFkIHJ6ZWN6a8SF4oCd!5e0!3m2!1spl!2spl!4v1564998802220!5m2!1spl!2spl"
        // height="80vh"
        width="100%"
        height="500px"
        frameBorder="0px"
        style={{ border: "0px", verticalAlign: "bottom" }}
        allowFullScreen
      />
    </div>
  );
};

export default Map;
