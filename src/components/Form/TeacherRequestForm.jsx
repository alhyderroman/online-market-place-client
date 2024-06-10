import { categories } from '../Categories/CategoriesData'
import { DateRange } from 'react-date-range'
import { TbFidgetSpinner } from 'react-icons/tb'
import PropTypes from 'prop-types'
import useAuth from '../../hooks/useAuth'
import { Button } from '@headlessui/react'
const experience=['beginner','experienced','mid-level']

const TeacherRequestForm = ({
  
  dates,
  handleDates,
  handleSubmit,
  imagePreview,
  imageText,
  handleImage,
  loading,
}) => {

  const {user}=useAuth();
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-6 mx-auto'>
            <div>
              
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mb-4'>
                <img
                  className='object-cover w-full'
                  src={user.photoURL}
                  alt='header image'
                 
                />
                
              </div>
              <p className='text-center font-bold'>{user.email}</p>
            </div>
          </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
               Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='Name'
                required
              />
            </div>
            
        
          

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Experience
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {experience.map(exp => (
                  <option value={exp} key={exp}>
                    {exp}
                  </option>
                ))}
              </select>
            </div>

       
          </div>
        </div>

        <button
                    // disabled={!user}
                    onClick={() => setIsModalOpen(true)}
                    className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                  >
                    Host your home
                  </button>
      </form>
    </div>
  )
}

TeacherRequestForm.propTypes = {
  handleDates: PropTypes.func,
  handleSubmit: PropTypes.func,
  imagePreview:PropTypes.func,
  imageText:PropTypes.string,
  handleImage:PropTypes.func,
  loading:PropTypes.bool,
  dates:PropTypes.string,
  closeModal: PropTypes.func,
  refetch: PropTypes.func,
}



export default TeacherRequestForm;