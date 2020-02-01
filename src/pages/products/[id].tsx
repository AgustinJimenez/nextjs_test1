import Link from 'next/link'
import {homeRoute} from '../../routes'
import DashboardLayout from '../../layouts/dashboard'

const Product = (props: any) => {
    var id = null
    console.log('PRODUCTS ID ===> ', {props})

return (
    <DashboardLayout>
        <p>This is the product page id={id}</p>
        <Link href={homeRoute()}>
            <a className='btn btn-primary'>Go Home</a>
        </Link>
    </DashboardLayout>
)
}
export default Product