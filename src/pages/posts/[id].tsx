import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Layout from '../../layout'
import { commentsByPostIdSelector, datasetSelector } from '../../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { sagaAddNewCommentToPostAction, sagaFetchCommentsByPostIdAction, sagaFetchPostByIdAction } from '../../sagas/actions'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import PostCard from '../../components/PostCard'
import CommentInterface from '../../interfaces/CommentInterface'
import { setDatasetToReducer } from '../../redux/actions'

const PostPage = (props: any) => {
    const id = props?.id
    const post = useSelector((state: any) => datasetSelector(state, 'posts', { id }))
    const dispatch = useDispatch()
    const comments: CommentInterface[] = useSelector((state: any) => commentsByPostIdSelector(state, id))
    const new_comment: string = useSelector((state: any) => datasetSelector(state, 'new_comment'))
    const addNewComment = React.useCallback(() => {
        if (!!new_comment)
            dispatch(
                sagaAddNewCommentToPostAction({
                    postId: id,
                    message: new_comment,
                }),
            )
    }, [new_comment])
    const updateNewCommentText = React.useCallback((text: string) => {
        dispatch(setDatasetToReducer(text, 'new_comment'))
    }, [])
    const init = React.useCallback(() => {
        updateNewCommentText('')
        if (!!id) {
            dispatch(sagaFetchPostByIdAction({ id }))
            dispatch(sagaFetchCommentsByPostIdAction({ id }))
        }
    }, [id])
    React.useEffect(() => {
        init()
    }, [])
    return (
        <Layout>
            <Container className='my-5 pb-5'>
                <Row>
                    <Col xs={12} md={{ offset: 3, span: 6 }}>
                        <PostCard id={post.id} title={post.title} body={post.body} />
                        <Card className='mt-4 bg-light border-0' data-testid='list-comments'>
                            <Card.Header className='bg-primary text-white'>{comments?.length || 0} Comments</Card.Header>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Form>
                                        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                                            <Form.Control
                                                as='textarea'
                                                rows={3}
                                                placeholder='Write a comment...'
                                                value={new_comment}
                                                onChange={(event: any) => updateNewCommentText(event?.target?.value)}
                                                data-testid='comment-textbox'
                                            />
                                        </Form.Group>
                                        <Row>
                                            <Col xs={12} md={{ offset: 6, span: 3 }}>
                                                <Button variant='outline-primary' block onClick={() => updateNewCommentText('')} data-testid='cancel-button'>
                                                    Cancel
                                                </Button>
                                            </Col>
                                            <Col xs={12} md={3}>
                                                <Button variant='primary' block onClick={addNewComment} data-testid='post-button'>
                                                    Post
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </ListGroup.Item>
                                {comments.map((comment: CommentInterface, key: number) => (
                                    <ListGroup.Item key={key}>
                                        <div data-testid='list-comments-item'>
                                            <span data-testid='list-comments-item-body'>{comment.body}</span>
                                            <blockquote className='blockquote mb-0 mt-4 bg-white'>
                                                <span className='blockquote-footer text-right'>
                                                    <cite title='Source Title' data-testid='list-comments-item-email'>
                                                        {comment.email}
                                                    </cite>
                                                </span>
                                            </blockquote>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export async function getServerSideProps(context: any) {
    //const reduxStore = initializeStore()
    let { id } = context.query
    return { props: { id: +id } }
}

export default PostPage
