import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import "./_app.scss"
import Layout from '../layouts/renault'

const MyApp = ({ Component, pageProps }: any) => {
    return (
      <>
        <Head>
          <title>Renault Paraguay</title>
          <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="Hello World Here" />
            <meta name="author" content="AgusJim" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  MyApp.getInitialProps = async (appContext: any) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  
    return { ...appProps }
  }
  
  export default MyApp