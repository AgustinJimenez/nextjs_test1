import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}))

const sections = [
    { title: 'QUIÉNES SOMOS', url: '/about' },
    { title: 'SUCURSALES', url: '/branches' },
    { title: 'TRABAJÁ CON NOSOTROS', url: '/careers' },
    { title: 'CONTACTOS', url: '/contacts' },
]

const Blog = ({ app_name, photos, children }: any) => {
    console.log('BLOG ===> ', photos)

    const classes = useStyles()

    return (
        <React.Fragment>
            <CssBaseline />
            <Header title={app_name} sections={sections} />
            <main>{children}</main>
            <Footer title='Footer' description='Something here to give the footer a purpose!' />
        </React.Fragment>
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
