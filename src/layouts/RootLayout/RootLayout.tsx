import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
