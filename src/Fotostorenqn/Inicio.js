
import React from "react";

const FOTO =
  "https://res.cloudinary.com/df6hryxoa/image/upload/v1791462925/820568391_18051002534801030_4783758963203034983_n_hc64zh.jpg";

export default function Inicio() {
  return (
    <div className="fotoStore">

      <header className="fsHeader">
        <a href="#inicio" className="fsLogo">
          FOTO<span>STORE</span>
          <small>ESTUDIO CREATIVO</small>
        </a>

        <nav className="fsNav">
          <a href="#inicio">Inicio</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a
          className="fsInstagram"
          href="https://www.instagram.com/fotostorenqn/"
          target="_blank"
          rel="noreferrer"
        >
          INSTAGRAM ↗
        </a>
      </header>

      <main id="inicio" className="fsHero">

        <div className="fsHeroTexto">
          <div className="fsEtiqueta">
            <span className="fsPunto" />
            FOTOGRAFÍA · DISEÑO · BRANDING
          </div>

          <h1>
            El arte de
            <br />
            <em>hacerlo</em>
            <br />
            memorable.
          </h1>

          <p>
            Creamos imágenes, identidades y experiencias
            visuales que cuentan historias y dejan huella.
          </p>

          <a href="#trabajos" className="fsBoton">
            <span>EXPLORAR NUESTRO TRABAJO</span>
            <span className="fsFlecha">↗</span>
          </a>

          <div className="fsHeroPie">
            <span>ESTUDIO VISUAL</span>
            <span>NEUQUÉN · ARGENTINA</span>
          </div>
        </div>

        <div className="fsHeroVisual">
          <div className="fsMarco">
            <img
              src={FOTO}
              alt="Fotografía editorial de Foto Store"
            />
          </div>

          <div className="fsImagenInfo">
            <span>IMÁGENES QUE INSPIRAN</span>
            <span>FOTO STORE © 2026</span>
          </div>

          <div className="fsDecoracion">
            CREATIVE STUDIO — VISUAL STORIES
          </div>
        </div>

      </main>

      <div className="fsBottom">
        <span>ESTÉTICA & IDENTIDAD</span>
        <span className="fsEstrella">✳</span>
        <span>CREATIVIDAD CON PROPÓSITO</span>
        <span className="fsEstrella">✳</span>
        <span>FOTOGRAFÍA & DISEÑO</span>
      </div>

    </div>
  );
}
