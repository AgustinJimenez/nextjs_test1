import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Carousel from 'nuka-carousel'
const Sliders = ['images/slide1.png', 'images/slide2.jpg', 'images/slide3.png']

export default function MainFeaturedPost(props) {
    return (
        <Container maxWidth='xl' disableGutters>
            <Carousel
                autoplay
                autoplayInterval={6000}
                easing='easePolyIn'
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
    )
}
