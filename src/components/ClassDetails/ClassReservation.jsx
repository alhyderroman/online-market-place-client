import PropTypes from 'prop-types'
import Button from '../../../../../Lycium Academy/lycium-academy-client/src/components/Shared/Button/Button'
import { useState } from 'react'

import BookingModal from '../../../../../Lycium Academy/lycium-academy-client/src/components/Modal/BookingModal'
import useAuth from '../../hooks/useAuth'

const ClassReservation = ({ cl, refetch }) => {
 const {user}=useAuth();
  const [isOpen, setIsOpen] = useState(false)
 

  const closeModal = () => {
    setIsOpen(false)
  }

  // total days * price

  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'> You Need to Pay: $ {cl?.price}</div>
        
      </div>
      <hr />
     
      <hr />
      <div className='p-4'>
        <Button
        
          onClick={() => setIsOpen(true)}
          label={'Pay'}
        />
      </div>

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
  )
}

ClassReservation.propTypes = {
  cl: PropTypes.object,
  refetch: PropTypes.func,
}

export default ClassReservation;
