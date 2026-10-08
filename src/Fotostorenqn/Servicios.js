
import React from "react";

const servicios = [
  {
    numero: "01",
    categoria: "FOTOGRAFÍA",
    titulo: "Cada imagen, una historia.",
    numero: "01",
    descripcion:
      "Capturamos la esencia de cada proyecto a través de imágenes que conectan, emocionan y comunican. Porque una buena fotografía no solo muestra: también transmite.",
    detalles: [
      "Fotografía de producto",
      "Contenido para marcas",
      "Producciones creativas",
    ],
    imagen: "https://res.cloudinary.com/df6hryxoa/image/upload/v1791465802/639787872_18020676374801030_7101163981896903060_n_ghll2i.jpg",
  },
  {
    numero: "02",
    categoria: "DISEÑO GRÁFICO",
    titulo: "Ideas que toman forma.",
    numero: "02",
    descripcion:
      "Transformamos conceptos en piezas visuales que comunican con claridad y personalidad. Diseños pensados para destacar y conectar con las personas.",
    detalles: [
      "Diseño para redes sociales",
      "Piezas gráficas",
      "Comunicación visual",
    ],
    imagen: "https://res.cloudinary.com/df6hryxoa/image/upload/v1791465805/819571737_18051001259801030_7155086338667783830_n_edl3ie.jpg",
  },
  {
    numero: "03",
    categoria: "BRANDING",
    titulo: "Tu marca, tu esencia.",
    numero: "03",
    descripcion:
      "Creamos universos visuales que representan la identidad de cada marca. Desde la primera idea hasta una imagen que se reconoce y se recuerda.",
    detalles: [
      "Identidad visual",
      "Diseño de logotipos",
      "Desarrollo de marca",
    ],
    imagen: "https://res.cloudinary.com/df6hryxoa/image/upload/v1791465811/625059115_18018149114801030_173885250492982199_n_srizrb.jpg",
  },
];

const Servicios = () => {
  return (
    <section className="svSeccion" id="servicios">
      <div className="svContenedor">

        <div className="svEncabezado">
          <span className="svEtiqueta">
            LO QUE HACEMOS
          </span>

          <div className="svTituloGrupo">
            <h2>
              Creatividad que
              <br />
              <em>se transforma.</em>
            </h2>

            <p>
              Cada idea merece una forma única de expresarse.
              Combinamos creatividad, sensibilidad y diseño
              para dar vida a proyectos con personalidad.
            </p>
          </div>
        </div>

        <div className="svListado">
          {servicios.map((servicio, index) => (
            <article
            id={servicio.numero}
              className={`svServicio ${
                index % 2 !== 0 ? "svInvertido" : ""
              }`}
              key={servicio.numero}
            >
              <div className="svImagenContenedor">
                <img
                  src={servicio.imagen}
                  alt={servicio.categoria}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />

                <span className="svImagenNumero">
                  {servicio.numero} / 03
                </span>
              </div>

              <div className="svContenido">
                <span className="svCategoria">
                  <span className="svPunto" />
                  {servicio.categoria}
                </span>

                <h3>{servicio.titulo}</h3>

                <p className="svDescripcion">
                  {servicio.descripcion}
                </p>

                <div className="svDetalles">
                  {servicio.detalles.map((detalle) => (
                    <span key={detalle}>
                      {detalle}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hola Foto Store, me gustaría consultar por el servicio de ${servicio.categoria}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="svEnlace"
                >
                  CONSULTAR POR ESTE SERVICIO
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="svCierre">
          <span>¿TENÉS UNA IDEA EN MENTE?</span>

          <h3>
            Hagamos algo
            <br />
            <em>extraordinario.</em>
          </h3>

          <p>
            Contanos qué imaginás y encontremos juntos
            la mejor manera de hacerlo realidad.
          </p>

          <a
            href="https://www.instagram.com/fotostorenqn/"
            target="_blank"
            rel="noreferrer"
          >
            HABLEMOS DE TU PROYECTO ↗
          </a>
        </div>

      </div>
    </section>
  );
};

export default Servicios;
