import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../../components/shared/LoadingSpinner'
import Card from './Card'

const MyBookings = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  //   Fetch Bookings Data
  const { data: bookings = [],isLoading, refetch, } = useQuery({
    queryKey: ['my-bookings', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-bookings/${user?.email}`)

      return data
    },
  })

  console.log(bookings)
  if (isLoading) return <LoadingSpinner />
  return (
    <>
      <Helmet>
        <title>My Bookings</title>
      </Helmet>
      <h2>My Bookings</h2>

      <div className='container mx-auto px-4 sm:px-8 grid grid-cols-2 gap-8'>
      
               
                  {/* Table Row Data */}

                  {bookings.map(booking => (
                    <Card
                      key={booking._id}
                      booking={booking}
                      refetch={refetch}
                    />
                  ))}
                
              
        
      </div>
    </>
  )
}

export default MyBookings
