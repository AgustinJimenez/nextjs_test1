import React from 'react'
import Card from 'react-bootstrap/Card'
import { postPageRouteProps } from '../routes'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { datasetSelector } from '../redux/selectors'

interface PostCardProps {
    id: number;
}

const PostCard = ({ id }: PostCardProps) => {
    const post = useSelector((state: any) => datasetSelector(state, 'posts', { id }))
    return (
        <Link {...postPageRouteProps({ query: post, id: post?.id })}>
            <Card style={{ cursor: 'pointer' }} className='shadow border-0'>
                <Card.Header className='bg-primary'>
                    <Card.Title className='text-capitalize text-white'>{post?.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{post?.body}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PostCard
