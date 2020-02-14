import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollTopButton'

const sections = [
    { title: 'QUIÉNES SOMOS', url: '/about' },
    { title: 'SUCURSALES', url: '/branches' },
    { title: 'TRABAJÁ CON NOSOTROS', url: '/careers' },
    { title: 'CONTACTOS', url: '/contacts' },
]

const Blog = (props: any) => {
    console.log('BLOG ===> ', props.photos)

    return (
        <Container disableGutters>
            <CssBaseline />
            <Header title={props.app_name} sections={sections} />
            <main>{props.children}</main>
            <Footer title='Footer' description='Something here to give the footer a purpose!' />
            <ScrollToTop {...props} />
        </Container>
    )
}

Blog.propTypes = {
    app_name: PropTypes.string,
    photos: PropTypes.array,
}
Blog.defaultProps = {
    app_name: process.env.app_name,
    photos: [],
}
export default Blog
