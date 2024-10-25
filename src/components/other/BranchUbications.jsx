import styled from "styled-components";
import { Grid, Container  } from '@mui/material';

const MAPA = 'https://firebasestorage.googleapis.com/v0/b/covid19-cc1fe.appspot.com/o/ecommerce%2Fmapa.PNG?alt=media&token=919aa98d-7b54-43b8-87b8-10ee4e757014'

const SectionBranch =  styled.div`
    padding: 25rem 0 15rem 0;
    margin-top: -10rem;

    @media (max-width: 768px) {
        padding: 15rem 0 15rem 0;
       
    }
`
const HeadingSecondary = styled.h3`
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

const Mapa = styled.img`
    width: 100%;
    transition: all .2s;
    outline-offset: 2rem;
    border-radius: 2px;
    &:hover {
        outline: 10px solid #55c57a;
        transform: scale(1.05) translateY(-.5rem);
        box-shadow: 0 2rem 4rem rgba(0 ,0, 0, .5);
        z-index: 20;
    }
`
const BranchUbications = () => {
    return (
        <Container>
            <SectionBranch>
                <div className='text-center mb-5'>
                    <HeadingSecondary>
                        Visita nuestros laboratorios de análisis clínicos Labopat
                    </HeadingSecondary>
                </div>

                <Grid container spacing={3}>
                    <Grid item lg={6}>
                        <Paragraph>
                            Si buscas laboratorios en Puebla que ofrezcan confianza y resultados precisos, Laboratorio Clínico Labopat es tu mejor opción. Contamos con varias sucursales en Puebla para tu comodidad, donde puedes realizar desde estudios de sangre hasta una biopsia de mama o una mastografía. Nuestra misión es ofrecerte la mejor atención para que puedas cuidar tu salud de manera eficiente y confiable.
                        </Paragraph>
                        <Paragraph>
                            Te invitamos a visitar nuestras clínicas y descubrir los beneficios de realizarte tus pruebas de laboratorio con nosotros. No dejes tu salud en manos de cualquiera, confía en los expertos de Laboratorio Clínico Labopat.
                        </Paragraph>
                    </Grid>
                    <Grid item lg={6}>
                        <Mapa src={MAPA} />
                    </Grid>
                </Grid>
            </SectionBranch>
        </Container>
    )
}

export default BranchUbications;