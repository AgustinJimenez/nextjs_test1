import Link from 'next/link'
import Router from 'next/router'
import {aboutRoute, productRouteProps} from '../routes'
import DashboardLayout from '../layouts/dashboard'
import { Grid, Button } from '@material-ui/core'


const Index = () => {

  return (
      <DashboardLayout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link href={aboutRoute()}>
              <Button variant="contained" color="primary">
                About Page
              </Button>
            </Link>
          </Grid> 
          <Grid item xs={12}>
            <Link {...productRouteProps({id: 123})}  >
              <Button variant="contained" color="primary">
                Product 1 page
              </Button>  
            </Link>
          </Grid>

        </Grid> 
      </DashboardLayout>
  )
}
export default Index