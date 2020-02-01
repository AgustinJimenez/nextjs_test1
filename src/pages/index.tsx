import Link from 'next/link'
import Router from 'next/router'
import {aboutRoute, productRouteProps} from '../routes'
import DashboardLayout from '../layouts/dashboard'
import { Grid } from '@material-ui/core'


const Index = () => {

  return (
      <DashboardLayout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link href={aboutRoute()}>
                <a className='btn btn-primary text-white'>About Page</a>
            </Link>
          </Grid> 
          <Grid item xs={12}>
            <Link  href='/products/[id]' as='/products/132'/* {...productRouteProps({id: 123})} */ >
              <a className='btn btn-primary text-white'>Product 1 page</a>
            </Link>
          </Grid>

        </Grid> 
      </DashboardLayout>
  )
}
export default Index