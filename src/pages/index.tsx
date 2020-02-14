import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Carousel from 'nuka-carousel'
import { Grid, CardActionArea, Card, CardContent, Typography } from '@material-ui/core'
import { title } from 'process'

const Sliders = ['images/slide1.png', 'images/slide2.jpg', 'images/slide3.png']
const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}))
const HomePage = ({ photos = [] }) => {
    let classes = useStyles()

    return (
        <React.Fragment>
            <Container maxWidth='xl' disableGutters>
                <Carousel
                    autoplay
                    autoplayInterval={6000}
                    speed={1000}
                    dragging
                    easing='easeSinIn'
                    wrapAround
                    autoplayReverse
                    heightMode='first'
                    initialSlideHeight={400}
                    renderCenterRightControls={control => (
                        <IconButton color='default' onClick={control.nextSlide}>
                            <ArrowForwardIosIcon style={{ color: 'white' }} />
                        </IconButton>
                    )}
                    renderCenterLeftControls={control => (
                        <IconButton color='default' onClick={control.previousSlide}>
                            <ArrowBackIosIcon style={{ color: 'white' }} />
                        </IconButton>
                    )}
                    defaultControlsConfig={{
                        pagingDotsStyle: {
                            outline: 'none',
                            fill: 'white',
                        },
                    }}
                >
                    {Sliders.map((src, key) => (
                        <img
                            src={src}
                            key={key}
                            style={{ height: '100%' }}
                            //style={{ height: 'inherit' }}
                        />
                    ))}
                </Carousel>
            </Container>
            <br />
            <Container maxWidth='lg'>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <CardActionArea component='a' href='#'>
                            <Card className={classes.card}>
                                <div className={classes.cardDetails}>
                                    <CardContent>
                                        <Typography component='h2' variant='h5'>
                                            {title}
                                        </Typography>
                                        <Typography variant='subtitle1' color='textSecondary'>
                                            {'date-->'}
                                        </Typography>
                                        <Typography variant='subtitle1' paragraph>
                                            {'description-->'}
                                        </Typography>
                                        <Typography variant='subtitle1' color='primary'>
                                            Continue reading...
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </CardActionArea>
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.mainGrid}>
                    {/* <Main title='From the firehose' posts={posts} /> */}
                    {/* <Sidebar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} social={sidebar.social} /> */}
                </Grid>
            </Container>
        </React.Fragment>
    )
}
HomePage.getInitialProps = async () => {
    const photos: any[] = []
    //(await request(list_photos_route)) || []
    console.log('HOMEPAGE-response ===> ', { photos })
    return { photos }
}
export default HomePage
