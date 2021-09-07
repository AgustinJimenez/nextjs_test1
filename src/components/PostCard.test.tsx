import React from 'react'
import { render, screen } from '@testing-library/react'
import PostCard from './PostCard'

describe('PostCard', () => {
    it('renders a post', async () => {
        const id = 0
        const title = 'A title'
        const body = 'A body'
        render(<PostCard id={id} title={title} body={body} />)
        const postTitle = await screen.findByTestId('card-post-title')
        const postBody = await screen.findByTestId('card-post-body')

        expect(postTitle).toBeInTheDocument()
        expect(postTitle.textContent).toBe(title)
        expect(postBody).toBeInTheDocument()
        expect(postBody.textContent).toBe(body)
    })
})
