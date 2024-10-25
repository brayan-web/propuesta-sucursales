import styled from "styled-components";
import {Row, Col, Container} from 'react-bootstrap';
import { Grid,  } from '@mui/material';

const IMG_ULSTRASONIDO = 'https://firebasestorage.googleapis.com/v0/b/covid19-cc1fe.appspot.com/o/ecommerce%2FaboutUs%2FULTRASONIDO%20TEXT%20active.png?alt=media&token=6b41c199-ab14-4e63-a46e-1eaa365487f6'
const ICON = 'https://lpqsystem.com/labopat/logosNuevos/ultrasonido.png'
const SectionUltrasonidos = styled.section`
    padding: 13rem 0;
    background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(${IMG_ULSTRASONIDO});
    background-size: cover;
    background-position: center;
    transform: skewY(-7deg);
    margin-top: -10rem;

    & > * {
        transform: skewY(7deg);
    }

    @media (max-width: 768px) {
        padding: 10rem 0;
    }
`

const UltrasonidoBox =  styled.div`
    background-color: rgba(255, 255, 255, .8);
    font-size: 1.5rem;
    padding: 2rem;
    height: 15rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
    transition: transform .3s;
    
    span{
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        color: #777;
        display: block;
    }
    &:hover {
        transform: translateY(-1.5rem) scale(1.03);
    }
`

const Caption = styled.span`
    color: #f7f7f7;
    font-size: 30px;
    text-align: center;
`


const CardUltrasonidos = () => {
    return (
        <SectionUltrasonidos>
            <Container className='text-center'>
                <div className='mb-5'>
                    <Caption>En Laboratorio clínico Labopat realizamos variedad de ultrasonidos como son:</Caption>
                </div>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                        <UltrasonidoBox>
                            <img src={ICON} alt="" width={100} className='mb-2'/>
                            <span>ultrasonido ginecológico</span>
                        </UltrasonidoBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} xl={2} >
                        <UltrasonidoBox>
                            <img src={ICON} alt="" width={100} className='mb-2'/>

                            <span>ultrasonido de cuello</span>
                        </UltrasonidoBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                        <UltrasonidoBox>
                            <img src={ICON} alt="" width={100}  className='mb-2'/>

                            <span>ultrasonido testicular</span>
                        </UltrasonidoBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}  lg={2} xl={2}>
                        <UltrasonidoBox>
                            <img src={ICON} alt="" width={100} className='mb-2'/>

                            <span> pruebas rápidas covid</span>
                        </UltrasonidoBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                        <UltrasonidoBox>
                            <img src={ICON} alt="" width={100} className='mb-2'/>

                            <span>ultrasonido pélvico (USG)</span>
                        </UltrasonidoBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={2} xl={2} >
                        <UltrasonidoBox>
                            <img src={ICON} alt="" width={100} className='mb-2'/>

                            <span>ultrasonido abdominal inferior mujer</span>
                        </UltrasonidoBox>
                    </Grid>
                </Grid>
            </Container>
        </SectionUltrasonidos>
    )
}

export default CardUltrasonidos