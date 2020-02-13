import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LangButton from './components/LangButton'
import LoginButton from './components/LoginButton'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}))

const Header = (props: any) => {
    const classes = useStyles()
    const { sections, title } = props

    return (
        <Container maxWidth='lg'>
            <Toolbar className={classes.toolbar}>
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
                {sections.map((section: any) => (
                    <Link color='inherit' noWrap key={section.title} variant='body2' href={section.url} className={classes.toolbarLink}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </Container>
    )
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
}

export default Header
