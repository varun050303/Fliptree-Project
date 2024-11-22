import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './general/Router.jsx'
import { Loading } from './components/Loading.jsx'

export const PageWithHeader = ({ children }) => (
  <div className='flex h-full flex-col'>{children}</div>
)

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name='suspense' />
        </PageWithHeader>
      }
    >
      <div className='p-4 bg-slate-50 lg:px-24'>
        <Router />
      </div>
    </Suspense>
  </BrowserRouter>
)
