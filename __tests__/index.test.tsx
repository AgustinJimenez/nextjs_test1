import { getPage } from 'next-page-tester'
import { screen } from '@testing-library/react'
import { within } from '@testing-library/dom'

describe('Home page', () => {
    it('renders home page', async () => {
        const { render } = await getPage({
            route: '/',
        })
        render()
        await screen.findByTestId('layout')
        const layout = await screen.findByTestId('layout')
        expect(layout).toBeInTheDocument()
        const pageTitle = await screen.findByTestId('home-title')
        const listPostItems = await screen.findAllByTestId('list-post-item')
        expect(pageTitle).toBeInTheDocument()
        expect(listPostItems.length).toBeGreaterThan(0)
        for (let listPostItem of listPostItems) {
            expect(listPostItem).toBeInTheDocument()
            const cardPostTitle = await within(listPostItem).findByTestId('card-post-title')
            const cardPostBody = await within(listPostItem).findByTestId('card-post-body')
            expect(cardPostTitle).toBeInTheDocument()
            expect(cardPostTitle).not.toBe('')
            expect(cardPostBody).toBeInTheDocument()
            expect(cardPostBody).not.toBe('')
        }
    })
})
