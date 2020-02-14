import React from 'react'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems, secondaryListItems } from './listItems'
import Head from 'next/head'
import useStyles from './styles'
import { ListItemIcon } from '@material-ui/core'

export default (props: any) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true)
    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return (
        <div className={classes.root}>
            <Head>
                <title>{process.env.app_name}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <meta name='description' content='Hello World Here' />
                <meta name='author' content='AgusJim' />
            </Head>
            <CssBaseline />
            <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color='inherit'>
                        <Badge badgeContent={4} color='secondary'>
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <Grid container className={classes.toolbarIcon}>
                    <ListItem>
                        <ListItemText
                            primary={
                                <Link href='/'>
                                    <a>
                                        <Typography align='center' component='h2' variant='h6'>
                                            {process.env.app_name}
                                        </Typography>
                                    </a>
                                </Link>
                            }
                        />
                        <ListItemIcon onClick={handleDrawerClose}>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                </Grid>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3}>
                        {props.children}
                    </Grid>
                </Container>
            </main>
        </div>
    )
}