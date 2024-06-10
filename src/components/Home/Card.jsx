import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({cl}) => {
  return (
   
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={cl?.image}
            alt='class'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>Title:{cl?.title.slice(0,17)}</div>
        <div className='font-semibold text-neutral-500'>Total Enrolement:{cl?.total_enrollment}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>Price: ${cl?.price}</div>
          </div>
      <Link to={`/class/${cl?._id}`} className='col-span-1 cursor-pointer group'>
      <button className='btn btn-primary btn-block'>Enroll</button>
      </Link>
      </div>
    
  )
}

Card.propTypes = {
  cl: PropTypes.object,
}

export default Card
