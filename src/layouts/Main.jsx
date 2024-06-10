import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer/Footer'
import Navbar from '../components/shared/Navbar/Navbar'

const Main = () => {

  return (
    <div>
      <Navbar />
      <div className='pt-28 min-h-[calc(100vh-68px)]'>
      <Outlet />
      </div>
      
      <Footer/>
    </div>
  )
}

export default Main
