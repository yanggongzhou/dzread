import "nprogress/nprogress.css";
import 'animate.css'
import '@/styles/globals.scss'
import '@/styles/transition.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import HeadNormal from "@/components/layout/HeadNormal";
import store from '@/store'
import DLayout from "@/components/layout";

function App({ Component, pageProps, router }: AppProps) {

  return <Provider store={store}>
    <DLayout pageProps={pageProps} router={router}>
      <>
        <HeadNormal pageProps={pageProps}/>
        <Component {...pageProps} />
      </>
    </DLayout>
  </Provider>
}

export default App
