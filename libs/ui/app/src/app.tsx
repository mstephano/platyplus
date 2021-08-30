import { BrowserRouter } from 'react-router-dom'
import { createClient } from 'nhost-js-sdk'

import { HbpProvider } from '@platyplus/hbp'
import { RxDBHasuraProvider } from '@platyplus/react-rxdb-hasura'

import { LayoutWrapper } from './layout-wrapper'
import { AppConfig } from './types'
// import 'rsuite/lib/styles/index.less' // or 'rsuite/dist/styles/rsuite-default.css'
import 'rsuite/dist/styles/rsuite-dark.css'

const { auth, storage } = createClient({
  baseURL: process.env.NX_HBP_ENDPOINT,
  useCookies: false,
  // * Autorefresh interval in ms (defaults to Math.max(30 * 1000, JWTExpiresIn - 45000))
  // TODO use JWTExpiresIn
  refreshIntervalTime: 60000
})

export const App: React.ComponentType<AppConfig> = (config) => (
  <BrowserRouter>
    <HbpProvider auth={auth} storage={storage}>
      <RxDBHasuraProvider auth={auth}>
        <LayoutWrapper {...config} />
      </RxDBHasuraProvider>
    </HbpProvider>
  </BrowserRouter>
)
