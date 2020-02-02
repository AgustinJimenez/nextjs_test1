import Link from 'next/link'
import {homeRoute} from '../../routes'
import DashboardLayout from '../../layouts/dashboard'
import { withRouter } from 'next/router'

let Product = (props: any) => {
    const { id } = props.router.query
    //console.log('PRODUCT ===> ', props)

    return (
        <DashboardLayout>
            <p>This is the product page {id}</p>
            <Link href={homeRoute()}>
                <a className='btn btn-primary'>Go Home</a>
            </Link>
        </DashboardLayout>
    )
}
export default withRouter(Product)