import Link from 'next/link'
import { homePageRouteProps } from '../../routes'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Layout from '../../layouts/delasobera'

const WorkWithUsPage = () => (
    <Layout active_nav_item='work_with_us'>
        <Container className='my-5'>
            <h1 className='text-center text-white'>WorkWithUsPage Page</h1>
            <Link href={homePageRouteProps}>
                <Button color='primary'>Go Home</Button>
            </Link>
        </Container>
    </Layout>
)
export default WorkWithUsPage
