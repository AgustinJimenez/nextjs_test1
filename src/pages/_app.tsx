import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const { AxiosProvider } = require('react-axios')

import './app.scss'
import { axiosInstance } from '../api'

export default function App({ Component, pageProps }: any) {
    const { store, persistor } = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AxiosProvider instance={axiosInstance}>
                    <Component {...pageProps} />
                </AxiosProvider>
            </PersistGate>
        </Provider>
    )
}
