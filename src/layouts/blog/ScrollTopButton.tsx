import React from 'react'
import PropTypes from 'prop-types'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const ScrollTopButton = (props: any) => {
    const classes = useStyles()
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: props.window ? props.window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    })

    return (
        <Zoom in={trigger}>
            <Fab
                size='small'
                onClick={(event: any) => {
                    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

                    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
                role='presentation'
                className={classes.root}
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    )
}

ScrollTopButton.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}

export default ScrollTopButton
