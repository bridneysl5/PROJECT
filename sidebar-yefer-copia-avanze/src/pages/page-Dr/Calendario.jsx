import React from "react";
import "./css/calendarioDr.css";
const Calendario = () => {
  return (
    <div>
      <div className="event-container">
        <div className="container-calendar">
          <h4 className="year">Lunes 14 de febrero de 2022</h4>

          <div className="event">
            <div className="event-left">
              <div className="event-date">
                <div className="date">10:30am</div>
                <div className="month">
                  <a className="mas" href="">
                    Informacion
                  </a>
                </div>
              </div>
            </div>

            <div className="event-right">
              <h3 className="event-title">
                Nayeli Rosas <br /> Jimenez
              </h3>

              <div className="event-description">
                Cansancio contante e irritacion del estomago
              </div>
            </div>
          </div>

          <div className="event">
            <div className="event-left">
              <div className="event-date">
                <div className="date">12:00pm</div>
                <div className="month">
                  <a className="mas" href="">
                    Informacion
                  </a>
                </div>
              </div>
            </div>

            <div className="event-right">
              <h3 className="event-title">
                Arely Alcantar <br /> Acosta
              </h3>

              <div className="event-description">
                Fiebre nocturnas sin ninguna razon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
