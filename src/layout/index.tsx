import Head from 'next/head'
import Document from 'next/document'
import Container from 'react-bootstrap/Container'

class LayoutBase extends Document {
    render() {
        return (
            <>
                <Head>
                    <title>Posts and comments</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
                        rel='stylesheet'
                    ></link>
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'></link>
                </Head>

                <Container data-testid='layout'>{this.props.children}</Container>
            </>
        )
    }
}

const Layout = (props: any) => <LayoutBase {...props} />

export default Layout
