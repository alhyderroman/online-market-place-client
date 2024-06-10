import { useState } from 'react'
import AddClassForm from '../../../components/Form/AddClassForm'
import useAuth from '../../../hooks/useAuth'
import { imageUpload } from '../../../api/utils'
import { Helmet } from 'react-helmet-async'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddClass = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')


  const { mutateAsync } = useMutation({
    mutationFn: async classData => {
      const { data } = await axiosSecure.post(`/class`, classData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('class Added Successfully!')
      navigate('/dashboard/my-listings')
      setLoading(false)
    },
  })

  //   Form handler
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const category = form.category.value
    const title = form.title.value
    const price = form.price.value
    const description = form.description.value
    const image = form.image.files[0]

    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }
    const total_enrollment=0;

    try {
      const image_url = await imageUpload(image)
      const classData = {
        location,
        category,
        title,
        price,
        host,
        description,
        image: image_url,
        total_enrollment
      }
      console.table(classData)

      //   Post request to server
      await mutateAsync(classData)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
  }

  //   handle image change
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }

  return (
    <>
      <Helmet>
        <title>Add class | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddClassForm
  
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
      />
    </>
  )
}

export default AddClass
