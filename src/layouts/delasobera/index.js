import './index.scss'
import NavBar from './NavBar'
import Footer from './Footer'
import Head from 'next/head'
import Document from 'next/document'

class Layout extends Document {
    state = {
        activeClass: '',
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let activeClass = ''
            if (window.scrollY > 100) {
                activeClass = 'navbar-red'
            }
            this.setState({ activeClass })
        })
    }

    render() {
        return (
            <>
                <Head>
                    <title>De la Sobera</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                    {/* <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap' rel='stylesheet' /> */}
                    <link
                        href='https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
                        rel='stylesheet'
                    ></link>
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'></link>
                </Head>
                <NavBar {...this.props} activeClass={this.state.activeClass} />
                <main>{this.props.children}</main>
                <Footer />
            </>
        )
    }
}

export default Layout
