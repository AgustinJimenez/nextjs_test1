import Link from 'next/link'
import {homeRoute} from '../../routes'
import DashboardLayout from '../../layouts/dashboard'
import { withRouter } from 'next/router'
import { Typography, Button, Grid } from '@material-ui/core'

let Product = (props: any) => {
    const { id } = props.router.query
    //console.log('PRODUCT ===> ', props)

    return (
        <DashboardLayout>
            <Grid item xs={12}>
                <Typography component="h2" variant="h6">This is the product page {id}</Typography>
            </Grid>
            <Link href={homeRoute()}>
                <Button variant="contained" color="primary">
                    Go Home
                </Button>
            </Link>
        </DashboardLayout>
    )
}
export default withRouter(Product)