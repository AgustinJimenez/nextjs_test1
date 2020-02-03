import App from 'next/app'
import DashboardLayout from '../layouts/dashboard'

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <DashboardLayout>
            <Component {...pageProps} />
        </DashboardLayout>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
/* 
MyApp.getInitialProps = async (appContext: any) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
}
 */
export default MyApp
