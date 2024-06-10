import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import {  useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import axios from "axios";


const MyEnrollClassDetails = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()
    const axiosCommon=useAxiosSecure()
    const[file,setFile]=useState(); 
    //   Fetch Bookings Data
    const { data: booking = [],isLoading, refetch, } = useQuery({
      queryKey: ['booking', user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/booking/${id}`)
  
        return data
      },
    })

    const { data: assignments = []} = useQuery({
      queryKey: ['assignments',booking?.category],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/assignments/${booking?.category}`)
  
        return data
      },
    })
  
    console.log(assignments)

    const upload=()=>{
      const formData=new FormData()
      formData.append('file',file)
      axios.post('http://localhost:9000/upload',formData)
      .then(res=>{ console.log(res);})
      .catch(err=>console.log(err))
    }
 
    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <h2> Class Category:{booking.category}</h2>
            <div className="pt-28">
            <Helmet>
                <title> Lycium Academy|Assignments to submit </title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className="mx-auto text-center font-bold text-black text-xl">
                        <tr>

                            <th>Assignment Title</th>
                            <th colSpan={2}>Description</th>
                            <th>Deadline</th>
                            <th colSpan={2} className="pl-4">Upload Assignment File</th>
                        </tr>
                    </thead>
                    <tbody className="mx-auto text-center">
                        {/* row 1 */}
                        {
                            assignments.map(food => <tr key={food._id}>

                        
                                <td>
                                    {food.title}
                                </td>
                                <td colSpan={2} className=" text-center">{food.description}</td>
                                <td>{food.deadline}</td>

                                <div className=" flex flex-col text-xl items-center">
                                <input
                                    name="upload"
                                    onChange={(e)=>setFile(e.target.files[0])}
                                    type="file"
                                  />
                                  <button type='button' onClick={upload}>Upload</button>

                                </div>

                            </tr>)
                        }





                    </tbody>



                </table>
            </div>


        </div>
        </div>
    );
};

export default MyEnrollClassDetails;