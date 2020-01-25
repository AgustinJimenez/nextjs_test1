import "./theme.scss"
import Link from 'next/link'
import Router from 'next/router'
import {aboutRoute, productRoute} from '../routes'

const Index = () => {
  return (
    <div className='container' >
      <div className="row">
        <h2 className='' >Hello {`${process.env.app_name}`}!!!</h2>
      </div>
      <div className="row py-3">
        <Link href={aboutRoute()}>
            <a className='btn btn-primary text-white'>About Page</a>
        </Link>
      </div>
      <div className="row py-3">
        <Link href={productRoute({id: 1})}>
          <a className='btn btn-primary text-white'>Product 1 page</a>
        </Link>
      </div>
    </div>
  )
}
  
  export default Index