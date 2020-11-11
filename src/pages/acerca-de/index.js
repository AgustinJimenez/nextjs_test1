import Link from 'next/link'
import { homePageRouteProps } from '../../routes'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Layout from '../../layouts/delasobera'

const AboutPage = () => (
    <Layout active_nav_item='about'>
        <Container className='my-5'>
            <h1 className='text-center text-white'> About Page</h1>
            <Link href={homePageRouteProps.href}>
                <Button color='primary'>Go Home</Button>
            </Link>
        </Container>
    </Layout>
)
export default AboutPage
