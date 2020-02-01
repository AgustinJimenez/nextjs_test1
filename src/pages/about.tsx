import Link from 'next/link'
import {homeRoute} from '../routes'
import DashboardLayout from '../layouts/dashboard'
import { Typography, Grid } from '@material-ui/core'

const About = () => (
    <DashboardLayout>
        <Grid container spacing={3}>
            <Grid item xs={12}>

                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    This is the about page
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Hello {`${process.env.app_name}`}!!!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href={homeRoute()}>
                    <a className="btn btn-primary">Go Home</a>
                </Link>
            </Grid>
        </Grid> 
    </DashboardLayout>
)
export default About