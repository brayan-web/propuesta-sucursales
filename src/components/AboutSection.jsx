const AboutSection = () => {
    return (
        <section class="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Visita nuestros laboratorios de analisis clinicos Labopat
                </h2>
            </div>

            <div class="rowed">
                <div class="col-6-of-12">
                    <p className="paragraph">
                        En Laboratorio Clínico Labopat, nos enfocamos en ofrecer estudios clínicos de alta calidad,
                        respaldados por tecnología avanzada y un equipo de profesionales. Como uno de los mejores laboratorios clínicos en Puebla, proporcionamos una amplia gama de exámenes de laboratorio y estudios de sangre que permiten diagnósticos precisos y oportunos.
                        .
                    </p>
                    <p className="paragraph">

                        Contamos con un laboratorio clínico de patología dedicado a la detección temprana de diversas enfermedades. Además, disponemos de mastografía y ultrasonido de mama para garantizar un análisis integral en la prevención del cáncer de mama.
                    </p>

                </div>
                <div class="col-6-of-12">
                    <div class="composition">
                        <img
                            srcset="assets/img/nat-1.jpg 300w, assets/img/nat-1-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo 1"
                            class="composition__photo composition__photo--p1"
                            src="assets/img/nat-1-large.jpg"/>
                        <img
                            srcset="assets/img/nat-2.jpg 300w, assets/img/nat-2-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo 2"
                            class="composition__photo composition__photo--p2"
                            src="assets/img/nat-2-large.jpg"/>
                        <img
                            srcset="assets/img/nat-3.jpg 300w, assets/img/nat-3-large.jpg 1000w"
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            alt="Photo 3"
                            class="composition__photo composition__photo--p3"
                            src="assets/img/nat-3-large.jpg"/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection