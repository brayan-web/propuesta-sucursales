import styled from "styled-components";
import { Row, Col, Container } from 'react-bootstrap'

const IMG_1 = 'https://firebasestorage.googleapis.com/v0/b/covid19-cc1fe.appspot.com/o/ecommerce%2FbackCategory.png?alt=media&token=40a957ed-e07c-43c9-8774-de52b731e83b'
const IMG_2 = 'https://firebasestorage.googleapis.com/v0/b/covid19-cc1fe.appspot.com/o/ecommerce%2FaboutUs%2FLABORATORIO%20TEXT%20active.png?alt=media&token=e214d0a8-c9c0-413e-97da-fca812e1588b'
const IMG_3 = 'https://firebasestorage.googleapis.com/v0/b/covid19-cc1fe.appspot.com/o/ecommerce%2Fcurso-alta-especialidad%2FbackContacto.png?alt=media&token=85db78df-c53d-4b83-82ef-f503574fd600'

const SectionOurLabs = styled.section`
   
    padding: 30rem 0;
    margin-top: -35vh;
    @media (max-width: 768px) { 
        padding: 20rem 0;
    }
`;

const HeadingSecondary = styled.h2`
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 0.2rem;
    transition: all 0.2s;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) { 
        font-size: 2.5rem;
    }

    &:hover {
        text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); 
    }
`

const Paragraph = styled.p`
    font-size: 17px; 
    font-weight: 400;
    &:not(:last-child) {
        margin-bottom: 3rem;
    }
`;

const Composition = styled.div`
    position: relative;
`
const Photo = styled.img`
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    position: absolute;
    z-index: 2;
    transition: all 0.2s;
    outline-offset: 2rem;

    @media (max-width: 991px) { 
        float: left;
        position: relative;
        width: 33.33%;
        box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);
    }

    &.composition__photo--p1 {
        left: 0;
        top: -2rem;

        @media (max-width: 991px) {
            top: 0;
            transform: scale(1.2);
        }
    }

    &.composition__photo--p2 {
        right: 0;
        top: 2rem;

        @media (max-width: 991px) {
            top: -1rem;
            transform: scale(1.3);
            z-index: 100;
        }
    }

    &.composition__photo--p3 {
        left: 20%;
        top: 10rem;

        @media (max-width: 991px) {
            top: 1rem;
            left: 0;
            transform: scale(1.1);
        }
    }

    &:hover {
        outline: 10px solid  #55c57a;
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
        z-index: 20;
    }
`;

const CustomContainer = styled.div`
    max-width: 1320px;
    margin: 0 auto;
`



const OurLabs = () => {
    return (
        <CustomContainer>
            <SectionOurLabs>
                <div className='text-center mb-5'>
                    <HeadingSecondary>
                        Visita nuestros laboratorios de análisis clínicos Labopat
                    </HeadingSecondary>
                </div>
                <Row>
                    <Col sm={12} lg={6} className='mb-5 mb-lg-0'>
                        <Paragraph>
                            En Laboratorio Clínico Labopat, nos enfocamos en ofrecer estudios clínicos de alta calidad,
                            respaldados por tecnología avanzada y un equipo de profesionales. Como uno de los mejores laboratorios clínicos en Puebla, proporcionamos una amplia gama de exámenes de laboratorio y estudios de sangre que permiten diagnósticos precisos y oportunos.
                        </Paragraph>
                        <Paragraph>
                            Contamos con un laboratorio clínico de patología dedicado a la detección temprana de diversas enfermedades. Además, disponemos de mastografía y ultrasonido de mama para garantizar un análisis integral en la prevención del cáncer de mama.
                        </Paragraph>
                    </Col>
                    <Col sm={12} lg={6} className='px-5 px-lg-0'>

                        <Composition>
                            <Photo
                                srcset={`${IMG_1} 300w, ${IMG_1}, 1000w`}
                                alt="Photo 1"
                                className="composition__photo composition__photo--p1"
                                src={IMG_1}
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            />
                            <Photo
                                srcset={`${IMG_2} 300w, ${IMG_2}, 1000w`}
                                alt="Photo 2"
                                className="composition__photo composition__photo--p2"
                                src={IMG_2}
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            />
                            <Photo
                                srcset={`${IMG_3} 300w, ${IMG_3}, 1000w`}
                                alt="Photo 3"
                                className="composition__photo composition__photo--p3"
                                src={IMG_3}
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                            />
                        </Composition>

                    </Col>
                </Row>
            </SectionOurLabs>
        </CustomContainer>
    )
}

export default OurLabs