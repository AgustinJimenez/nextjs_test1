import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faMapMarked } from '@fortawesome/free-solid-svg-icons/faMapMarked'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import ScrollAnimation from 'react-animate-on-scroll'
import GoTop from './GoTop'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import {
    aboutPageRouteProps,
    homePageRouteProps,
    branchesPageRouteProps,
    shopPageRouteProps,
    workWithUsPageRouteProps,
    contactPageRouteProps,
} from '../../routes'

const Footer = props => {
    var walink =
        'https://api.whatsapp.com/send?phone=595986564600&amp;text=Hola!%20He%20visitado%20el%20sitio%20web%20de%20De%20La%20Sobera%20y%20quiero%20hacerles%20una%20consulta'
    return (
        <footer className='py-5'>
            <Container>
                <Row>
                    <Col xs={3} className='pr-4'>
                        <ScrollAnimation animateIn='zoomIn'>
                            <Image src='https://www.delasobera.com.py/img/logo-dls.png' className='mb-3 mt-1' style={{ maxWidth: 200 }} />
                        </ScrollAnimation>
                        <p className='mb-4'>Automotores, maquinarias agrícolas y maquinarias industriales.</p>
                        <ul className='list-unstyled'>
                            <li class='mb-3'>
                                <FontAwesomeIcon icon={faMapMarked} className='about-icon' />
                                Avda. Sta Teresa 3100 esq. Concejal Vargas
                            </li>
                            <li class='mb-3'>
                                <FontAwesomeIcon icon={faPhone} className='about-icon' />
                                +595 21 683 820
                            </li>
                            <li class='mb-3'>
                                <FontAwesomeIcon icon={faEnvelope} className='about-icon' />
                                atencion@dls.com.py
                            </li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ScrollAnimation animateIn='fadeInUp'>
                            <h4 className='font-semi-bold mb-4 text-primary'>La Empresa</h4>
                        </ScrollAnimation>
                        <ul className='list-unstyled'>
                            <li class='mb-3'>
                                <a href='#'>
                                    <FontAwesomeIcon icon={faChevronRight} className='chevron-icon' />
                                    Quienes Somos
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href='#'>
                                    <FontAwesomeIcon icon={faChevronRight} className='chevron-icon' />
                                    Sucursales
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href='#'>
                                    <FontAwesomeIcon icon={faChevronRight} className='chevron-icon' />
                                    Tienda Online
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href='#'>
                                    <FontAwesomeIcon icon={faChevronRight} className='chevron-icon' />
                                    Trabaja con Nosotros
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href='#'>
                                    <FontAwesomeIcon icon={faChevronRight} className='chevron-icon' />
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ScrollAnimation animateIn='fadeInUp'>
                            <h4 className='font-semi-bold mb-4 text-primary'>Redes Sociales</h4>
                        </ScrollAnimation>
                        <ul className='list-unstyled'>
                            <li class='mb-3'>
                                <a href='https://www.facebook.com/dlspy/'>
                                    <FontAwesomeIcon icon={faFacebookSquare} className='about-icon fb' />
                                    Facebook
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href='https://www.instagram.com/dlspy/'>
                                    <FontAwesomeIcon icon={faInstagram} className='about-icon in' />
                                    Instagram
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href='https://twitter.com/delasobera'>
                                    <FontAwesomeIcon icon={faTwitterSquare} className='about-icon tw' />
                                    Twitter
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href='https://ar.linkedin.com/company/dls-de-la-sobera-hnos'>
                                    <FontAwesomeIcon icon={faLinkedin} className='about-icon li' />
                                    Linkedin
                                </a>
                            </li>
                            <li class='mb-3'>
                                <a href={walink}>
                                    <FontAwesomeIcon icon={faWhatsapp} className='about-icon wa' />
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <ScrollAnimation animateIn='fadeInUp'>
                            <h4 className='font-semi-bold mb-3 text-primary'>Novedades</h4>
                        </ScrollAnimation>
                        <article class='mb-3'>
                            <a href='#'>
                                <h4 class='h5'>De La Sobera celebró sus 80 años alineada al futuro</h4>
                            </a>
                            <p>
                                La empresa Grupo De La Sobera celebró recien­temente sus 80 años de trayectoria en el rubro auto­motriz del país alineada al
                                futuro...{' '}
                                <a href='#'>
                                    <small>[leer más]</small>
                                </a>
                            </p>
                            <a class='btn btn-sm btn-block btn-footer mt-3'>Ver más Novedades</a>
                        </article>
                    </Col>
                    <Col />
                </Row>

                <div className='footer-end mt-3'>
                    <Row>
                        <Col xs={7}>
                            <p className='text-white m-0'>
                                &copy; 2020, De La Sobera - Todos los derechos reservados &nbsp;|&nbsp; Desarrollado por{' '}
                                <strong>
                                    <a href='http://dlstechnology.com.py'>DLS Technology</a>
                                </strong>
                            </p>
                        </Col>
                        <Col xs={5} className='text-right'>
                            <GoTop scrollStepInPx='50' delayInMs='20' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
