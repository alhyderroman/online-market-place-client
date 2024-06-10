/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import placeholderImage from '../../../assets/images/404.jpg'


const Card = ({booking}) => {
    const {title,teacher,image,_id}=booking;
    console.log(_id,title);
    
	
    return (
        < div className="">
		<div className="max-w-sm mx-auto group transition border-2 
        hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 " src={image||placeholderImage} />
				<div className="p-6 space-y-2 text-black">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"> Posted By {teacher?.name}</h3>
					
				</div>
                <Link to={`/dashboard/my-enroll-class-details/${_id}`} >
                <button className="btn btn-secondary w-full">Continue</button>
                </Link>
                
			</div>
          
		
		</div>
            
    );
};

export default Card;