import Link from 'next/link'
import { aboutRoute, postRouteProps } from '../routes'
import { Grid, Button } from '@material-ui/core'

const Index = () => {
    return (
        <>
            <Grid item xs={12}>
                <Link href={aboutRoute()}>
                    <Button variant='contained' color='primary'>
                        About Page
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link {...postRouteProps({ id: 1 })}>
                    <Button variant='contained' color='primary'>
                        Post 1 page
                    </Button>
                </Link>
            </Grid>
        </>
    )
}
export default Index
