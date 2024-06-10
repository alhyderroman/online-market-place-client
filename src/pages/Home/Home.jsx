import { Helmet } from 'react-helmet-async'
import Carousel from '../../components/Carousel'
import Categories from '../../components/Categories/Categories'
import Classes from '../../components/Home/Classes'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Lycium Academy | Learn & Teach</title>
      </Helmet>
      {/* Categories section  */}

      <Carousel/>
     <Categories/>
    
   
    <Classes/>
   
    
    </div>
  )
}

export default Home