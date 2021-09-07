import React from 'react'
import Layout from '../layout'
import PostCard from '../components/PostCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import { datasetSelector } from '../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { sagaFetchPostsAction } from '../sagas/actions'
import { PaginatedList } from 'react-paginated-list'
import PostInterface from '../interfaces/PostInterface'

const HomePage = () => {
    const dispatch = useDispatch()
    const posts: PostInterface[] = useSelector((state: any) => datasetSelector(state, 'posts', { list_format: true }))
    const fetchPosts = React.useCallback(() => dispatch(sagaFetchPostsAction()), [])
    const init = React.useCallback(() => {
        fetchPosts()
    }, [])
    React.useEffect(() => {
        init()
    }, [init])

    return (
        <Layout>
            <Container fluid>
                <Navbar expand='lg' sticky='top'>
                    <Container className='bg-light rounded-bottom border shadow'>
                        <Navbar.Brand href='#'>
                            <p>
                                <b className='h2 text-light font-weight-bold font-italic text-ouline-primary' data-testid='home-title'>
                                    POSTS AND COMMENTS
                                </b>
                            </p>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Container fluid className='pt-2'>
                    <Row className='justify-content-md-center'></Row>
                </Container>
                <PaginatedList
                    list={posts}
                    controlClass='pb-5'
                    controlItemClass='bg-primary text-white border-top-0 border-bottom-0 border-end-1 shadow'
                    renderList={(posts: PostInterface[]) => (
                        <Row>
                            {posts.map(({ id, title, body }: PostInterface, key: number) => (
                                <Col xs='12' md={{ offset: 3, span: 6 }} key={key} className='my-3'>
                                    <PostCard id={id} title={title} body={body} />
                                </Col>
                            ))}
                        </Row>
                    )}
                />
            </Container>
        </Layout>
    )
}

export async function getStaticProps() {
    //let { data, erro  r, message } = await request({ url: url_list_all_by_letter, params: { s: '' } })
    //console.log('HOMEPAGE-response ===> ', { data, error, message })
    return { props: {} }
}
export default HomePage
