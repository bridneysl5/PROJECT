import React from "react";

const CentroSalud = () => {
  return (
    <div className="Margen2">
      <div className="bienvenida-dasboard2">
        <h1>
          Maps Health <i class="bi bi-geo-alt-fill icono-mapa"></i>
        </h1>
        <p>Centro de Salud Cercanos</p>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="1550"
            height="820"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Lima&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
          <br />
          <a href="https://www.embedgooglemap.net">add google maps html</a>
        </div>
      </div>
    </div>
  );
};

export default CentroSalud;
