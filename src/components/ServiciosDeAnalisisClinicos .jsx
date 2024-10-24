import React from "react";

const ServiciosDeAnalisisClinicos = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Visita nuestros laboratorios de analisis clinicos Labopat
        </h2>
      </div>

      <div className="Row">
        <div className="col-1-of-2">
          <p className="paragraph">
            En Laboratorio Clínico Labopat, nos enfocamos en ofrecer estudios
            clínicos de alta calidad, respaldados por tecnología avanzada y un
            equipo de profesionales.
          </p>
          <p className="paragraph">
            Como uno de los mejores laboratorios clínicos en Puebla,
            proporcionamos una amplia gama de exámenes de laboratorio y estudios
            de sangre que permiten diagnósticos precisos y oportunos.
          </p>
        </div>
        <div className="col-1-of-2">
          <div className="compisition">
          <img
            srcset="/assets/img/nat-1.jpg 300w, /assets/img/nat-1-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="naaturaleza 1"
            className="composition__photo composition__photo--p1"
            src="/assets/img/nat-1-large.png"
          />
          <img
            srcset="/assets/img/nat-2.jpg 300w, /assets/img/nat-2-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="naturaleza 2"
            className="composition__photo composition__photo--p2"
            src="/assets/img/nat-2-large.jpg"
          />
          <img
            srcset="/assets/img/nat-3.jpg 300w, /assets/img/nat-3-large.jpg 1000w"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="naturaleza 3"
            className="composition__photo composition__photo--p3"
            src="/assets/img/nat-3-large.jpg"
          />
          </div>
        </div>
      </div>
      {/* <Container>
        <div >
          <div>
            <span className="heading-tertiary">
              En Laboratorio clínico Labopat, realizamos variedad de
              ultrasonidos como:{" "}
            </span>
          </div>
          <section class="section-features">
          <Row>
            <Col md={2}>
              <div className="feature-box">
                <img
                  src="/assets/img/ultrasonido.png"
                  width={100}
                  className="feature-box__icon"
                  alt=""
                />

                <h3 className="heading-tertiary u-margin-bottom-small">
                  ultrasonido ginecológico
                </h3>
              </div>
            </Col>
            <Col md={2}>
              <div className="feature-box">
                <img
                  src="/assets/img/ultrasonido.png"
                  width={100}
                  className="feature-box__icon"
                  alt=""
                />

                <h3 className="heading-tertiary u-margin-bottom-small">
                  ultrasonido de cuello
                </h3>
              </div>
            </Col>
            <Col md={2}>
              <div className="feature-box">
                <img
                  src="/assets/img/ultrasonido.png"
                  width={100}
                  className="feature-box__icon"
                  alt=""
                />

                <h3 className="heading-tertiary u-margin-bottom-small">
                  ultrasonido testicular
                </h3>
              </div>
            </Col>
            <Col md={2}>
              <div className="feature-box">
                <img
                  src="/assets/img/ultrasonido.png"
                  width={100}
                  className="feature-box__icon"
                  alt=""
                />

                <h3 className="heading-tertiary u-margin-bottom-small">
                  pruebas rápidas covid
                </h3>
              </div>
            </Col>
            <Col md={2}>
              <div className="feature-box">
                <img
                  src="/assets/img/ultrasonido.png"
                  width={100}
                  className="feature-box__icon"
                  alt=""
                />

                <h3 className="heading-tertiary u-margin-bottom-small">
                  ultrasonido abdominal inferior mujer
                </h3>
              </div>
            </Col>
            <Col md={2}>
              <div className="feature-box">
                <img
                  src="/assets/img/ultrasonido.png"
                  width={100}
                  className="feature-box__icon"
                  alt=""
                />

                <h3 className="heading-tertiary u-margin-bottom-small">
                  ultrasonido pélvico (USG)
                </h3>
              </div>
            </Col>
          </Row>
          </section>
        </div>
      </Container> */}
    </section>
  );
};

export default ServiciosDeAnalisisClinicos;
