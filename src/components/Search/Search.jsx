import { useEffect, useState } from "react";

import Card from "../Home/Card";
import axios from "axios";
import { useSearchParams } from "react-router-dom";


const Search = () => {
  const [itemsPerPage,setItemsPerPage]=useState(4);
  const [currentPage,setCurrentPage]=useState(1);
  const [count,setCount]=useState(0);
  const [jobs,setJobs]=useState([]);
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  console.log(currentPage)
  useEffect(()=>{
    const getData=async()=>{
      const {data}=await axios(`${import.meta.env.VITE_API_URL}/classes?page=${currentPage}&size=${itemsPerPage}&category=${category}`)
      setJobs(data)
    }
    getData();
  },[currentPage,itemsPerPage,category])
  useEffect(()=>{
    const getCount=async()=>{
      const {data}=await axios(`${import.meta.env.VITE_API_URL}/classesCount?category=${category}`)
   
      setCount(data.count)
    }
    getCount();
  },[category])
  console.log(count);
  const numberOfPages=Math.ceil(count/itemsPerPage)
const pages = [...Array(numberOfPages).keys()].map(element=>element+1)
console.log(jobs);
//handle pagination button
const handlePaginationButton=(value)=>{
  console.log(value);
  setCurrentPage(value);
}


return (
  <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
    <div>
    
      <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {jobs.map(job => (
          <Card key={job._id} cl={job} />
        ))}
      </div>
    </div>

{/* pagination */}
    <div className='flex justify-center mt-12'>
      {/* previous button */}
      <button 
      disabled={currentPage===1}
      onClick={()=>handlePaginationButton(currentPage-1)}
      
      className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
        <div className='flex items-center -mx-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 mx-1 rtl:-scale-x-100'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            />
          </svg>

          <span className='mx-1'>previous</span>
        </div>
      </button>
{/* numbers */}
      {pages.map(btnNum => (
        <button
        onClick={()=>handlePaginationButton(btnNum)}
          key={btnNum}
          className={`hidden ${currentPage===btnNum?'bg-blue-500 text-white rounded-md ':''}px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
        >
          {btnNum}
        </button>
      ))}
{/* next button */}
      <button 
      disabled={currentPage===numberOfPages}
      onClick={()=>handlePaginationButton(currentPage+1)}
      
      className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
        <div className='flex items-center -mx-1'>
          <span className='mx-1'>Next</span>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 mx-1 rtl:-scale-x-100'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
)
};

export default Search;