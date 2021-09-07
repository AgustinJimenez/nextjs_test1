import React from 'react'
import Card from 'react-bootstrap/Card'
import { postPageRouteProps } from '../routes'
import Link from 'next/link'

interface PostCardProps {
    id: number;
    title: string;
    body: string;
}

const PostCard = ({ id, title, body }: PostCardProps) => {
    return (
        <Link {...postPageRouteProps({ id })}>
            <Card style={{ cursor: 'pointer' }} className='shadow border-0' data-testid='list-post-item'>
                <Card.Header className='bg-primary'>
                    <Card.Title className='text-capitalize text-white' data-testid='card-post-title'>
                        {title}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text data-testid='card-post-body'>{body}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PostCard
