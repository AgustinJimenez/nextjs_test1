import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const LoginButton = (props: any) => {
    return (
        <Container disableGutters style={{ margin: '10px 0px' }}>
            <Button fullWidth variant='outlined' /* color='secondary' */ size='small'>
                Sign up
            </Button>
        </Container>
    )
}

export default LoginButton
