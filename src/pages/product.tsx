import Link from 'next/link'
import {homeRoute} from '../routes'

const Product = () => (
    <div>
        <p>This is the product page</p>
        <Link href={homeRoute}>
            <a>Go Home</a>
        </Link>
    </div>
)
export default Product