import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Layout from '../layouts/delasobera'
import ScrollAnimation from 'react-animate-on-scroll'

const HomePage = ({ photos = [] }) => {
    return (
        <Layout active_nav_item='home'>
            <video autoPlay controls='true' muted loop className='bg-video' poster='/videos/dls.gif'>
                <source src='/videos/dls.mp4' type='video/mp4' />
                <source src='/videos/dls.webm' type='video/webm' />
            </video>
            <section className='home-header'>
                <Container>
                    <Row>
                        <Col md={6} className='home-intro pt-5'>
                            <ScrollAnimation animateIn='fadeInRight'>
                                <h1 className='h4 text-white font-semi-bold mt-4'>De la Sobera Hermanos S.A.C.I.</h1>
                                <h4 className='h1 text-white display-2 font-extra-bold my-3'>80 AÑOS</h4>
                                <h5 className='text-white'>Impulsando sueños y colaborando con marcas de primer nivel para el desarrollo del pais.</h5>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='fadeInUp'>
                                <Button variant='light' className='rounded-pill px-5 mt-4' size='lg'>
                                    <small className='mb-1'>VER MÁS</small>
                                </Button>
                            </ScrollAnimation>
                        </Col>
                        <Col md={{ offset: 1, span: 5 }}></Col>
                    </Row>
                </Container>
                <Image src='/images/mi-auto.png' className='img-banner' />
            </section>

            <section className='px-5 pt-5 pb-5 bg-white'>
                <Container className='card-cate-container'>
                    <Row className='text-center'>
                        <Col xs={12}>
                            <h1 className='h3 mb-5 font-semi-bold text-uppercase'>
                                Una <span className='text-primary font-weight-bold'>solución</span> para cada rubro
                            </h1>
                        </Col>
                        {[
                            {
                                title: 'Automotores',
                                details: 'Vehículos, repuestos y accesorios para las marcas Chevrolet y Renault.',
                                image_src: 'images/products/agricultura.jpg',
                                url: '#',
                            },
                            {
                                title: 'Agrícolas',
                                details: 'Tractores y maquinarias agrícolas de la marca Massey Ferguson y otros.',
                                image_src: 'images/products/agricultura.jpg',
                                url: '#',
                            },
                            {
                                title: 'Industriales',
                                details: 'Excavadoras, generadores y maquinarias industriales de la marca JCB y otros.',
                                image_src: 'images/products/agricultura.jpg',
                                url: '#',
                            },
                        ].map(({ title, details, image_src, url }, key) => (
                            <Col xs={4} key={key}>
                                <ScrollAnimation animateIn='bounceIn'>
                                    <a href={url}>
                                        <Card className='card-cate mb-4'>
                                            <Card.Body>
                                                <Image src={image_src} className='img-fluid' />
                                                <Card.Title className='font-semi-bold text-center mb-0'>{title.toUpperCase()}</Card.Title>
                                                <Card.Text className='text-center'>{details}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </ScrollAnimation>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className='about py-5'>
                <Container className='my-3'>
                    <Row>
                        <Col xs={5}>
                            <figure>
                                <Image src='images/about-img.jpg' fluid />
                            </figure>
                        </Col>
                        <Col xs />
                        <Col xs={6}>
                            <ScrollAnimation animateIn='fadeInRight'>
                                <h2 className='font-weight-bold text-danger mb-4'>Quienes Somos</h2>
                            </ScrollAnimation>
                            <p>
                                <b>De La Sobera</b> distribuye para Paraguay las marcas Massey Ferguson (tractores, cosechadoras e implementos agrícolas), JCB
                                (maquinarias industriales y viales), Chevrolet y Renault (automóviles) y Localiza Rent a Car (alquiler de vehículos).
                            </p>
                            <ScrollAnimation animateIn='fadeInUp'>
                                <Button variant='primary' className='rounded-pill px-5 mt-4' size='lg'>
                                    <small className='text-white mb-1'>VER MÁS</small>
                                </Button>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className='mt-5 bg-white'>
                <ScrollAnimation animateIn='fadeInUp'>
                    <h2 className='text-primary text-center title font-weight-bold'>
                        <span className='text-dark'>Nuestras</span> Marcas
                    </h2>
                </ScrollAnimation>
                <p className='text-center mb-5 mt-3'>Conozca las marcas que representamos</p>
                <Container className='mb-5'>
                    <Row>
                        {[
                            { image: 'images/brand-representation-1.png', link: '#' },
                            { image: 'images/brand-representation-2.png', link: '#' },
                            { image: 'images/brand-representation-3.png', link: '#' },
                            { image: 'images/brand-representation-4.png', link: '#' },
                            { image: 'images/brand-representation-5.png', link: '#' },
                            { image: 'images/brand-representation-6.png', link: '#' },
                            { image: 'images/brand-representation-7.png', link: '#' },
                            { image: 'images/brand-representation-8.png', link: '#' },
                            { image: 'images/brand-representation-9.png', link: '#' },
                        ].map((src, key) => (
                            <Col xs={4} sm={2} key={key}>
                                <ScrollAnimation animateIn='fadeIn'>
                                    <a href={src.link}>
                                        <Image fluid src={src.image} />
                                    </a>
                                </ScrollAnimation>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </Layout>
    )
}
/* 
HomePage.getInitialProps = async () => {
    //(await request(list_photos_route)) || []
    //console.log('HOMEPAGE-response ===> ', { photos })
    return {}
}
 */
export default HomePage
