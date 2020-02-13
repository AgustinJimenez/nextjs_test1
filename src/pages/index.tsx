import Layout from '../layouts'
import request from '../utils/request'
import { list_photos_route } from '../api'

const HomePage = ({ photos = [] }) => {
    return <Layout photos={photos}></Layout>
}
HomePage.getInitialProps = async () => {
    const photos: any[] = []
    //(await request(list_photos_route)) || []
    console.log('HOMEPAGE-response ===> ', { photos })
    return { photos }
}
export default HomePage
