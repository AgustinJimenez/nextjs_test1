import Link from 'next/link'
import {homeRoute} from '../../routes'
import "../theme.scss"

const Product = (props: any) => {
    let {id} = props.url.query

    console.log('PRODUCTS ID ===> ', {id})

return (
    <div>
        <p>This is the product page</p>
        <Link href={homeRoute()}>
            <a className='btn btn-primary'>Go Home</a>
        </Link>
    </div>
)
}
export default Product