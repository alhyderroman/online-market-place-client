import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import TeacherRequestForm from "../../../components/Form/TeacherRequestForm";

const TeacherRequest = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()

    
  
    const { mutateAsync } = useMutation({
      mutationFn: async teacherData => {
        const { data } = await axiosSecure.post(`/user`, teacherData)
        return data
      },
      onSuccess: () => {
        console.log('Request sent Successfully')
        toast.success('Request sent Successfully')
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
      const experience = form.title.value  
  
      const name= user?.displayName
      const image=user?.photoURL
       const email=  user?.email
      
  
      try {
        const teacherData = {
          category,
          title,
          experience,
          name,
          image,
          email
        }
        console.table(teacherData)
  
        //   Post request to server
        await mutateAsync(teacherData)
      } catch (err) {
        console.log(err)
        toast.error(err.message)
        setLoading(false)
      }
    }
  
 

  
    return (
      <>
        <Helmet>
          <title>Teacher Request | Dashboard</title>
        </Helmet>
  
        {/* Form */}
        <TeacherRequestForm
          handleSubmit={handleSubmit}
          
          loading={loading}
        />
      </>
    )
};

export default TeacherRequest;