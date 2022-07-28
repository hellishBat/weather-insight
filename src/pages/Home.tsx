// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts/Layout'
import Dashboard from '@/components/Dashboard'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <Dashboard />
      </Layout>
    </ContextProviders>
  )
}

export default Home
