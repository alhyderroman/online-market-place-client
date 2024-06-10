/* eslint-disable no-unused-vars */

import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import Button from "../../components/shared/Button/Button";
import { useState } from "react";
import BookingModal from "../../components/Modal/BookingModal";


const ClassDetails = () => {
  const { user } = useAuth();
  const { id } = useParams()
    const axiosCommon=useAxiosCommon();
    const [isOpen, setIsOpen] = useState(false)
   
  
    const closeModal = () => {
      setIsOpen(false)
    }
  
    const { data: cl = {}, isLoading, refetch,} = useQuery({
      queryKey: ['class', id],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/class/${id}`)
        return data
      },
    })
  
 
  const { category, title, price,  description,teacher } = cl || {};
 
    if (isLoading) return <LoadingSpinner/>
  return (
    <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
          <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
            {category}
          </span>
        </div>

        <div>
          <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
            {title}
          </h1>

          <p className='mt-2 text-lg text-gray-600 '>
            {description}
          </p>
          <p className='mt-6 text-sm font-bold text-gray-600 '>
            Teacher Details:
          </p>
          <div className='flex items-center gap-5'>
            <div>
              <p className='mt-2 text-sm  text-gray-600 '>Name:{teacher?.name} </p>
              <p className='mt-2 text-sm  text-gray-600 '>
                Email: {teacher?.email}
              </p>
            </div>
            <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img src={teacher?.image} alt='' />
            </div>
          </div>
          <p className='mt-6 text-lg font-bold text-gray-600 '>
            price: ${price}
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize text-center '>
          Pay For Enroll: ${price}
        </h2>
       <div className="flex justify-between">
       <div>
          <div> <p>Your Name:{user?.displayName}</p></div>
          <div><p>Your Email:{user?.email}</p></div>
        </div>
        <div>
            <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img src={user?.photoURL} alt='' />
            </div>
        </div>
       </div>
          

          <div className='flex justify-end mt-6'>
          <div className='p-4'>
        <Button
        
          onClick={() => setIsOpen(true)}
          label={'Pay'}
        />
            {/* Modal */}
      <BookingModal
        isOpen={isOpen}
        refetch={refetch}
        closeModal={closeModal}
        bookingInfo={{
          ...cl,
         
          student: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        }}
      />
      </div>
          </div>
       
      </section>
    </div>
  )
}

export default ClassDetails
