import React from 'react'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import clsx from 'clsx'
import {
    aboutPageRouteProps,
    homePageRouteProps,
    branchesPageRouteProps,
    shopPageRouteProps,
    workWithUsPageRouteProps,
    contactPageRouteProps,
} from '../../routes'

const NavBarComponent = ({ active_nav_item, activeClass }) => {
    return (
        <Navbar expand='lg' variant='dark' fixed='top' className={activeClass}>
            <Container>
                <Navbar.Brand href='#home'>
                    <a href='/'>
                        <Image className='navBarLogo' src='images/logo.png' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                    <Nav>
                        {[
                            { id: 'home', href: '#', title: 'Inicio' },
                            { id: 'about', href: '#', title: 'Quienes Somos' },
                            { id: 'branches', href: '#', title: 'Sucursales' },
                            { id: 'shop', href: '#', title: 'Tienda Online' },
                            { id: 'work_with_us', href: '#', title: 'Trabaja con Nosotros' },
                            { id: 'contact', href: '#', title: 'Contacto' },
                        ].map(({ id, href, title }, key) => {
                            let isActive = active_nav_item === id

                            return (
                                <Nav.Item key={key}>
                                    <Link href={href}>
                                        <Nav.Link className={clsx(isActive ? 'active' : '')} href={href}>
                                            {title}
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent
