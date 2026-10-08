
import React from "react";

const serviciosImpresion = [
  "Imprimí aquí",
  "Fotocopias",
  "Planos",
  "Plastificados",
];

const Impresiones = () => {
  return (
    <section className="imSeccion" id="impresiones">
      <div className="imContenedor">

        <div className="imImagen">
          <img
            src="https://res.cloudinary.com/df6hryxoa/image/upload/v1791466345/482685587_17981157410801030_267190891026021153_n_hdnofn.jpg"
            alt="Equipo de impresión de Foto Store"
            loading="lazy"
          />
          <span className="imImagenEtiqueta">
            FOTO STORE / PRINT STUDIO
          </span>
        </div>

        <div className="imContenido">
          <span className="imEtiqueta">
            04 / ESPACIO DE IMPRESIÓN
          </span>

          <h2>
            Del diseño
            <br />
            <em>al papel.</em>
          </h2>

          <p className="imDescripcion">
            Porque algunas ideas merecen salir de la pantalla.
            También contamos con un espacio dedicado a
            impresiones y soluciones gráficas para tus
            proyectos cotidianos.
          </p>

          <div className="imServicios">
            {serviciosImpresion.map((servicio, index) => (
              <div className="imServicio" key={servicio}>
                <span className="imServicioNumero">
                  0{index + 1}
                </span>

                <span className="imServicioNombre">
                  {servicio}
                </span>

                <span className="imServicioIcono">↗</span>
              </div>
            ))}
          </div>

          <div className="imNota">
            <span className="imNotaPunto" />
            ENCONTRANOS EN PLOTTIER, NEUQUÉN
          </div>
        </div>

      </div>
    </section>
  );
};

export default Impresiones;
