import renderer from 'react-test-renderer'
import HomePage from '../src/pages/index'

it('renders homepage unchanged', () => {
    const tree = renderer.create(HomePage).toJSON()
    expect(tree).toMatchSnapshot()
})
