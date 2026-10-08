
import React, { useState } from "react";

const arrayImagenes = [
  "https://res.cloudinary.com/df6hryxoa/image/upload/v1791464012/819762462_18051001073801030_1363863821662606260_n_lqlrny.jpg",
  "https://res.cloudinary.com/df6hryxoa/image/upload/v1791464007/819130436_18051002162801030_3173494005050928029_n_savoco.jpg",
  "https://res.cloudinary.com/df6hryxoa/image/upload/v1791464002/820426688_18051002333801030_4056315743948271113_n_ytvcbz.jpg",
  "https://res.cloudinary.com/df6hryxoa/image/upload/v1791463987/836221315_18052783133801030_5708208071062805546_n_clzyss.jpg",
  "https://res.cloudinary.com/df6hryxoa/image/upload/v1791463979/836813524_18052783310801030_2841407153440720668_n_ogqvxn.jpg",
  "https://res.cloudinary.com/df6hryxoa/image/upload/v1791463966/837837738_18052784396801030_6783353289493712310_n_pdcdro.jpg",
];

const NuestrosTrabajos = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  return (
    <section className="ntSeccion" id="trabajos">
      <div className="ntContenedor">

        <div className="ntEncabezado">
          <span className="ntEtiqueta">
             NUESTRO PORTFOLIO
          </span>

          <h2>
            Nuestra mirada, <em>tu historia.</em>
          </h2>

          <p>
            Una selección de imágenes, ideas y proyectos
            que reflejan nuestra pasión por crear.
          </p>
        </div>

        <div
          className={`ntAcordeon ${
            imagenActiva !== null ? "ntInteractuando" : ""
          }`}
          onMouseLeave={() => setImagenActiva(null)}
        >
          {arrayImagenes.map((imagen, index) => (
            <button
              type="button"
              key={imagen}
              className={`ntFoto ${
                imagenActiva === index ? "ntFotoActiva" : ""
              }`}
              onMouseEnter={() => setImagenActiva(index)}
              onFocus={() => setImagenActiva(index)}
              onClick={() =>
                setImagenActiva(
                  imagenActiva === index ? null : index
                )
              }
              aria-label={`Ver fotografía ${index + 1}`}
              aria-pressed={imagenActiva === index}
            >
              <img
                src={imagen}
                alt={`Trabajo creativo Foto Store ${index + 1}`}
                loading="lazy"
              />

              <span className="ntNumero">
                0{index + 1}
              </span>
            </button>
          ))}
        </div>

        <div className="ntPie">
          <span>
            FOTOGRAFÍA · DISEÑO GRÁFICO · BRANDING
          </span>

          <a href="#contacto">
            ¿CREAMOS ALGO JUNTOS?
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default NuestrosTrabajos;
