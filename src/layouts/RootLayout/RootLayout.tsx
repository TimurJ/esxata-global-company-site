import { Outlet } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'

const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
