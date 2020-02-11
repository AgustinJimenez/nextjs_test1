import { useState, useEffect } from 'react'
import Link from 'next/link'
import { homeRoute } from '../../routes'
import { withRouter } from 'next/router'
import { Typography, Button, Grid, Card, CardContent, CardActions } from '@material-ui/core'
import { postRouteProps } from '../../routes'
import request from '../../utils/request'
import styles from './styles'

const fetchData = async ({ id, setPost }: any) => {
    let post = await request({ url: `https://jsonplaceholder.typicode.com/posts/${id}` })
    setPost(post)
    console.log('FETCH-DATA-POST ===> ', { post })
}

let Post = (props: any) => {
    const [post, setPost] = useState({
        userId: null,
        id: null,
        title: null,
        body: null,
    })
    let id = +props.router.query.id
    useEffect(() => {
        fetchData({ id, setPost })
    }, [id])
    console.log('Post ===> ', props)
    const classes = styles()

    return (
        <>
            <Grid item xs={8}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant='h5' component='h2'>
                            {post.title}
                        </Typography>
                        <Typography variant='body2' component='p'>
                            {post.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link {...postRouteProps({ id: id + 1 })}>
                            <Button variant='contained' color='primary' size='small'>
                                User Page
                            </Button>
                        </Link>
                        <Link {...postRouteProps({ id: id + 1 })}>
                            <Button variant='contained' color='primary' size='small'>
                                Go Post id {id + 1}
                            </Button>
                        </Link>
                        <Button variant='contained' color='primary' size='small' onClick={() => props.router.back()}>
                            Go Back
                        </Button>
                        <Link href={homeRoute()}>
                            <Button variant='contained' color='primary' size='small'>
                                Go Home
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default withRouter(Post)
