import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import LangButton from './components/LangButton'
import LoginButton from './components/LoginButton'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Slide from '@material-ui/core/Slide'
import Collapse from '@material-ui/core/Collapse'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
}))

const Header = (props: any) => {
    const classes = useStyles()
    const [navOptionsVisibility, setNavOptionsVisibility] = React.useState(false)
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))

    return (
        <AppBar position='static' color='default'>
            <Toolbar id='back-to-top-anchor'>
                <Container maxWidth='lg'>
                    <Grid container direction='row'>
                        <Grid container item xs={12} md={8} justify='center' alignItems='center'>
                            <Grid container item justify='flex-start' alignItems='center' xs={10}>
                                <Button size='small'>
                                    <img src='/images/logo.png' />
                                </Button>
                            </Grid>
                            <Grid container item xs={2} justify='flex-end' alignItems='center'>
                                <Hidden mdUp>
                                    <IconButton edge='end' color='inherit' aria-label='menu' onClick={() => setNavOptionsVisibility(!navOptionsVisibility)}>
                                        <MenuIcon />
                                    </IconButton>
                                </Hidden>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} md={4}>
                            <Collapse in={isMobile ? navOptionsVisibility : true} style={{ width: '100%' }}>
                                <Grid container direction='row' justify='space-between'>
                                    <Grid container item justify='flex-end' alignItems='center' xs={12} md={5}>
                                        <LangButton />
                                    </Grid>
                                    <Grid container item justify='flex-end' alignItems='center' xs={12} md={5}>
                                        <LoginButton />
                                    </Grid>
                                </Grid>
                            </Collapse>
                        </Grid>
                    </Grid>
                    <Collapse in={isMobile ? navOptionsVisibility : true}>
                        <Grid container direction='row'>
                            {props.sections.map((section: any, key: number) => {
                                return (
                                    <Grid item xs={12} sm>
                                        <Button key={key} href={section.url} fullWidth>
                                            {section.title}
                                        </Button>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Collapse>
                </Container>
            </Toolbar>
        </AppBar>
    )

    return (
        <Container maxWidth='lg'>
            <Toolbar>
                <Grid container /* spacing={3} */>
                    <Grid item container xs={12} sm={9} justify='flex-start' alignItems='center'>
                        <Grid item>
                            <Button size='small'>
                                <img src='/images/logo.png' />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sm={3} justify='flex-end' alignItems='center'>
                        <Grid container item justify='flex-end' alignItems='center' xs={6}>
                            <LangButton />
                        </Grid>
                        <Grid container justify='flex-end' alignItems='center' item xs={6}>
                            <LoginButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>

            <Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>
                {props.sections.map((section: any, key: number) => (
                    <Link key={key} color='inherit' variant='body2' href={section.url}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>

            <Divider />
            <br />
        </Container>
    )
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
}

export default Header
