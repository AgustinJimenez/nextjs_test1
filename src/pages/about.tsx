import Link from 'next/link'
import {homeRoute} from '../routes'

const About = () => (
    <div>
        <h2>This is the about page</h2>
        <Link href={homeRoute()}>
            <a className="btn btn-primary">Go Home</a>
        </Link>
    </div>
)
export default About