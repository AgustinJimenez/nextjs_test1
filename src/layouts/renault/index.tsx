import React from 'react'
import Head from 'next/head'

class Layout extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                    <meta name='description' content='' />
                    <meta name='author' content='' />
                    <title>Renault Paraguay</title>
                    <link rel='preload' href='fonts/Read-Italic_V2000.eot' as='font' />
                    <link rel='preload' href='fonts/Read-Italic_V2000.woff2' as='font' />
                    <link rel='preload' href='fonts/Read-Italic_V2000.woff' as='font' />
                    <link rel='preload' href='fonts/Read-Regular_V2000.eot' as='font' />
                    <link rel='preload' href='fonts/Read-Regular_V2000.woff2' as='font' />
                    <link rel='preload' href='fonts/Read-Regular_V2000.woff' as='font' />
                    <link rel='preload' href='fonts/Read-Medium_V2000.eot' as='font' />
                    <link rel='preload' href='fonts/Read-Medium_V2000.woff2' as='font' />
                    <link rel='preload' href='fonts/Read-Medium_V2000.woff' as='font' />
                    <link rel='preload' href='fonts/Read-MediumItalic_V2000.eot' as='font' />
                    <link rel='preload' href='fonts/Read-MediumItalic_V2000.woff2' as='font' />
                    <link rel='preload' href='fonts/Read-MediumItalic_V2000.woff' as='font' />
                    <link rel='preload' href='fonts/Read-Bold_V2000.eot' as='font' />
                    <link rel='preload' href='fonts/Read-Bold_V2000.woff2' as='font' />
                    <link rel='preload' href='fonts/Read-Bold_V2000.woff' as='font' />
                    <link rel='preload' href='fonts/Read-BoldItalic_V2000.eot' as='font' />
                    <link rel='preload' href='fonts/Read-BoldItalic_V2000.woff2' as='font' />
                    <link rel='preload' href='fonts/Read-BoldItalic_V2000.woff' as='font' />

                    <link href='renault_icons/style.css' rel='stylesheet' />
                    <link href='css/desyre.min.css' rel='stylesheet' />
                    <link href='css/fontawesome.min.css' rel='stylesheet' />
                    <link href='css/app.css' rel='stylesheet' />
                    <link href='css/styles.css' rel='stylesheet' />
                    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.9/dist/css/bootstrap-select.min.css' />
                </Head>

                <div>
                    {/* 
                    <div id='preloader'>
                        <div className='cssload-container'>
                            <div className='animate'>
                                <img src='images/renault_loading.svg' alt='CARGANDO' />
                            </div>
                        </div>
                    </div> 
                    */}
                    <nav className='navbar navbar-expand-md p-0'>
                        <div className='container-fluid'>
                            <div className='d-flex w-25 d-md-none d-lg-block order-0'>
                                <a className='navbar-brand mr-1 hidden-md-down' href='home'>
                                    <img src='images/logo-dls-rgb.png' className='w-75' alt='Logo De la Sobera' />
                                </a>
                                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsingNavbar'>
                                    <span className='icon-DigitalPictogram_MENU'></span>
                                </button>
                            </div>
                            <div className='navbar-collapse collapse w-50 justify-content-md-start justify-content-lg-center order-2' id='collapsingNavbar'>
                                <ul className='navbar-nav'>
                                    <li className='nav-item ml-2 dropdown'>
                                        <a
                                            className='nav-link dropdown-toggle'
                                            href='#'
                                            id='navbarDropdown'
                                            role='button'
                                            data-toggle='dropdown'
                                            aria-haspopup='true'
                                            aria-expanded='false'
                                        >
                                            Vehículos
                                            <small className=''>
                                                <i className='icon-DigitalPictogram_ARROW_DOWN_2'></i>
                                            </small>
                                        </a>
                                        <div className='dropdown-menu' aria-labelledby='navbarDropdown' role='tablist' aria-orientation='vertical' id='cars'>
                                            <a
                                                className='dropdown-item active'
                                                data-toggle='pill'
                                                href='#'
                                                role='tab'
                                                data-target='cars_automoviles'
                                                aria-selected='true'
                                            >
                                                Automóviles
                                            </a>
                                            <a
                                                className='dropdown-item'
                                                data-toggle='pill'
                                                href='#'
                                                role='tab'
                                                data-target='cars_crossovers'
                                                aria-selected='false'
                                            >
                                                Crossovers
                                            </a>
                                            <a className='dropdown-item' data-toggle='pill' href='#' role='tab' data-target='cars_suv' aria-selected='false'>
                                                SUV
                                            </a>
                                            <a className='dropdown-item' data-toggle='pill' href='#' role='tab' data-target='cars_pickup' aria-selected='false'>
                                                Pick-Up
                                            </a>
                                            <a
                                                className='dropdown-item'
                                                data-toggle='pill'
                                                href='#'
                                                role='tab'
                                                data-target='cars_utilitarios'
                                                aria-selected='false'
                                            >
                                                Utilitarios
                                            </a>
                                            <div className='tab-content' id='nav-tabContent'>
                                                <div
                                                    className='tab-pane fade show active'
                                                    id='cars_automoviles'
                                                    role='tabpanel'
                                                    aria-labelledby='cars_automoviles_tab'
                                                >
                                                    <div className='d-flex align-items-stretchr'>
                                                        <div className='col-6 bd-highlight contend-card'>
                                                            <div className='card first'>
                                                                <a href='automoviles'>
                                                                    <i className='icon-DigitalPictogram_CAR_VEHICULE '></i>
                                                                </a>
                                                                <p>Automóviles</p>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='kwid'>
                                                                    <img src='images/products/kwid/img-home.png' alt='Kwid' className='img-fluid' />
                                                                </a>
                                                                <p className=' '>Kwid</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='tab-pane fade' id='cars_crossovers' role='tabpanel' aria-labelledby='cars_crossovers_tab'>
                                                    <div className='d-flex align-items-stretchr'>
                                                        <div className='col-6 bd-highlight contend-card'>
                                                            <div className='card first'>
                                                                <a href='crossover'>
                                                                    <i className='icon-DigitalPictogram_CAR_VEHICULE '></i>
                                                                </a>
                                                                <p>Crossovers</p>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='stepway'>
                                                                    <img src='images/products/stepway/img-home.png' alt='stepway' className='img-fluid' />
                                                                </a>
                                                                <p className=' '>Stepway</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='tab-pane fade' id='cars_suv' role='tabpanel' aria-labelledby='cars_suv_tab'>
                                                    <div className='d-flex col-12 p-0 flex-md-wrap flex-lg-nowrap'>
                                                        <div className='col-4 contend-card bd-highlight'>
                                                            <div className='card first'>
                                                                <a href='suv'>
                                                                    <i className='icon-DigitalPictogram_CAR_VEHICULE '></i>
                                                                </a>
                                                                <p>SUV</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-4 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='duster'>
                                                                    <img src='images/products/duster/img-home.png' alt='Duster' className='img-fluid' />
                                                                </a>
                                                                <p className=' '>Duster</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-2.4 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='nueva_duster'>
                                                                    <img
                                                                        src='images/products/nueva_duster/img-home.png'
                                                                        alt='Nueva Duster'
                                                                        className='img-fluid'
                                                                    />
                                                                </a>
                                                                <p className=' '>Nueva Duster</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-4 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='captur'>
                                                                    <img src='images/products/captur/img-home.png' alt='Captur' className='img-fluid' />
                                                                </a>
                                                                <p>Captur</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-2.4 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='koleos'>
                                                                    <img src='images/products/koleos/img-home.png' alt='Koleos' className='img-fluid' />
                                                                </a>
                                                                <p>Koleos</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='tab-pane fade' id='cars_pickup' role='tabpanel' aria-labelledby='cars_pickup_tab'>
                                                    <div className='d-flex align-items-stretchr'>
                                                        <div className='col-6 bd-highlight contend-card'>
                                                            <div className='card first'>
                                                                <a href='pickup'>
                                                                    <i className='icon-DigitalPictogram_CAR_VEHICULE '></i>
                                                                </a>
                                                                <p>Pickup</p>
                                                            </div>
                                                        </div>

                                                        <div className='col-6 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='oroch'>
                                                                    <img src='images/products/oroch/img-home.png' alt='Oroch' className='img-fluid' />
                                                                </a>
                                                                <p className=' '>Oroch</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-4 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='alaskan'>
                                                                    <img src='images/products/alaskan/img-home.png' alt='Alaskan' className='img-fluid' />
                                                                </a>
                                                                <p>Alaskan</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='tab-pane fade' id='cars_utilitarios' role='tabpanel' aria-labelledby='cars_utilitarios_tab'>
                                                    <div className='d-flex align-items-stretchr'>
                                                        <div className='col-4 bd-highlight contend-card'>
                                                            <div className='card first'>
                                                                <a href='utilitarios'>
                                                                    <i className='icon-DigitalPictogram_CAR_VEHICULE '></i>
                                                                </a>
                                                                <p>Utilitarios</p>
                                                            </div>
                                                        </div>

                                                        <div className='col-4 bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='nuevo_kangoo'>
                                                                    <img
                                                                        src='images/products/nuevo_kangoo/img-home.png'
                                                                        alt='Nuevo Kangoo'
                                                                        className='img-fluid'
                                                                    />
                                                                </a>
                                                                <p className=' '>Nuevo Kangoo</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-4  bd-highlight contend-card'>
                                                            <div className='card'>
                                                                <a href='master'>
                                                                    <img src='images/products/master/img-home.png' alt='Master' className='img-fluid' />
                                                                </a>
                                                                <p>Master</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='nav-item ml-2 dropdown'>
                                        <a
                                            className='nav-link dropdown-toggle'
                                            href='#'
                                            id='navbarDropdown'
                                            role='button'
                                            data-toggle='dropdown'
                                            aria-haspopup='true'
                                            aria-expanded='false'
                                        >
                                            Post Venta
                                            <small className=''>
                                                <i className='icon-DigitalPictogram_ARROW_DOWN_2'></i>
                                            </small>
                                        </a>
                                        <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                            <a className='dropdown-item' href='#'>
                                                Servicios
                                            </a>
                                            <a className='dropdown-item' href='#'>
                                                Repuestos
                                            </a>
                                            <a className='dropdown-item' href='taller'>
                                                Agendá tu cita al taller
                                            </a>
                                            <a className='dropdown-item' href='testdrive'>
                                                Agendá un test drive
                                            </a>
                                        </div>
                                    </li>
                                    <li className='nav-item ml-2 dropdown'>
                                        <a
                                            className='nav-link dropdown-toggle'
                                            href='#'
                                            id='navbarDropdown'
                                            role='button'
                                            data-toggle='dropdown'
                                            aria-haspopup='true'
                                            aria-expanded='false'
                                        >
                                            Quienes Somos
                                            <small className=''>
                                                <i className='icon-DigitalPictogram_ARROW_DOWN_2'></i>
                                            </small>
                                        </a>
                                        <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                            <a className='dropdown-item' href='quienes_somos'>
                                                De La Sobera
                                            </a>
                                            <a className='dropdown-item' href='#'>
                                                Renault Groupe
                                            </a>
                                        </div>
                                    </li>
                                    <li className='nav-item ml-2 dropdown'>
                                        <a
                                            className='nav-link dropdown-toggle'
                                            href='#'
                                            id='navbarDropdown'
                                            role='button'
                                            data-toggle='dropdown'
                                            aria-haspopup='true'
                                            aria-expanded='false'
                                        >
                                            Contacto
                                            <small className=''>
                                                <i className='icon-DigitalPictogram_ARROW_DOWN_2'></i>
                                            </small>
                                        </a>
                                        <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                            <a className='dropdown-item' href='contact'>
                                                Atención personalizada
                                            </a>
                                            <a className='dropdown-item' href='contact_form'>
                                                Formulario de contacto
                                            </a>
                                            <a className='dropdown-item' href='contact_form'>
                                                Contactá con un asesor
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='navbar-text p-0 small text-truncate w-25 text-right order-1 order-md-last'>
                                <a href='home'>
                                    <img src='images/logo.png' className='logo' alt='Renault' />
                                </a>
                            </div>
                        </div>
                    </nav>

                    {/* @yield('content') */}
                    {/* @include('app.partials.footer') */}
                </div>
            </>
        )
    }
}

export default Layout
