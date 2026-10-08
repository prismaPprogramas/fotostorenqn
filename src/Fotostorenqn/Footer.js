
import React from "react";

const Footer = () => {
  const navegacion = [
    { nombre: "Inicio", enlace: "#inicio" },
    { nombre: "Nuestros trabajos", enlace: "#trabajos" },
    { nombre: "Servicios", enlace: "#servicios" },
    { nombre: "Impresiones", enlace: "#impresiones" },
  ];

  const servicios = [
    { nombre: "Fotografía", enlace: "#fotografia" },
    { nombre: "Diseño gráfico", enlace: "#diseno" },
    { nombre: "Branding", enlace: "#branding" },
    { nombre: "Fotocopias e impresiones", enlace: "#impresiones" },
    { nombre: "Planos y plastificados", enlace: "#impresiones" },
  ];

  return (
    <footer className="ftFooter" id="contacto">
      <div className="ftContenedor">

        <div className="ftPrincipal">

          {/* MARCA */}

          <div className="ftMarca">
            <h2>
              FOTO<span>STORE</span>
            </h2>

            <p>
              Fotografía, diseño y soluciones gráficas.
              <br />
              Ideas que toman forma.
            </p>

            <span className="ftMarcaDetalle">
              ESTUDIO CREATIVO · PLOTTIER
            </span>
          </div>

          {/* NAVEGACIÓN */}

          <div className="ftColumna">
            <h3>EXPLORAR</h3>

            <nav className="ftLinks">
              {navegacion.map((item) => (
                <a href={item.enlace} key={item.nombre}>
                  {item.nombre}
                </a>
              ))}
            </nav>
          </div>

          {/* SERVICIOS */}

          <div className="ftColumna">
            <h3>NUESTROS SERVICIOS</h3>

            <nav className="ftLinks">
              {servicios.map((item) => (
                <a href={item.enlace} key={item.nombre}>
                  {item.nombre}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACTO */}

          <div className="ftColumna ftContacto">
            <h3>ENCONTRANOS</h3>

            <p>
              Avda. Riavitz 287
              <br />
              Plottier, Neuquén · 8316
            </p>

            <span className="ftContactoLabel">
              WHATSAPP
            </span>

            <p>+54 9 2994 05-4038</p>

            <span className="ftContactoLabel">
              REDES SOCIALES
            </span>

            <a
              className="ftInstagram"
              href="https://www.instagram.com/fotostorenqn/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM ↗
            </a>
          </div>

        </div>

        {/* PARTE INFERIOR */}

        <div className="ftInferior">
          <span>
            © {new Date().getFullYear()} FOTO STORE
          </span>

          <span>
            CREATIVIDAD · IDENTIDAD · IMAGEN
          </span>

          <a href="#inicio" className="ftVolver">
            VOLVER ARRIBA ↑
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
