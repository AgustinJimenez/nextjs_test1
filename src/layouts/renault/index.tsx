import { Html, Head, Main, NextScript } from 'next/document'

export default (props: any) => (
    <Html>
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="" />
            <meta name="author" content="" />

            <title>Renault Paraguay</title>


            <link rel="preload" href="fonts/Read-Italic_V2000.eot" as="font"/>
            <link rel="preload" href="fonts/Read-Italic_V2000.woff2" as="font"/>
            <link rel="preload" href="fonts/Read-Italic_V2000.woff" as="font"/>
            <link rel="preload" href="fonts/Read-Regular_V2000.eot" as="font"/>
            <link rel="preload" href="fonts/Read-Regular_V2000.woff2" as="font"/>
            <link rel="preload" href="fonts/Read-Regular_V2000.woff" as="font"/>
            <link rel="preload" href="fonts/Read-Medium_V2000.eot" as="font"/>
            <link rel="preload" href="fonts/Read-Medium_V2000.woff2" as="font"/>
            <link rel="preload" href="fonts/Read-Medium_V2000.woff" as="font"/>
            <link rel="preload" href="fonts/Read-MediumItalic_V2000.eot" as="font"/>
            <link rel="preload" href="fonts/Read-MediumItalic_V2000.woff2" as="font"/>
            <link rel="preload" href="fonts/Read-MediumItalic_V2000.woff" as="font"/>
            <link rel="preload" href="fonts/Read-Bold_V2000.eot" as="font"/>
            <link rel="preload" href="fonts/Read-Bold_V2000.woff2" as="font"/>
            <link rel="preload" href="fonts/Read-Bold_V2000.woff" as="font"/>
            <link rel="preload" href="fonts/Read-BoldItalic_V2000.eot" as="font"/>
            <link rel="preload" href="fonts/Read-BoldItalic_V2000.woff2" as="font"/>
            <link rel="preload" href="fonts/Read-BoldItalic_V2000.woff" as="font"/>


            <link href="renault_icons/style.css" rel="stylesheet" />
            <link href="css/desyre.min.css" rel="stylesheet" />
            <link href="css/fontawesome.min.css" rel="stylesheet" />
            <link href="css/app.css" rel="stylesheet" />
            <link href="css/styles.css" rel="stylesheet" />
        </Head>

        <Main>
            <div id="preloader">
                <div className="cssload-container">
                    <div className="animate">
                        <img src="images/renault_loading.svg" alt="CARGANDO" />
                    </div>
                </div>
            </div>

            {/* @include('app.partials.nav') */}
            {props.children}
            {/* @include('app.partials.footer') */}
            <NextScript/>
            <script src="vendor/jquery/jquery-3.1.1.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript" src="js/main.js"></script>
        </Main>
    </Html>
)