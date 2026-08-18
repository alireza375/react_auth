import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, 
        remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card bg-base-100 shadow-sm py-3 border rounded border-[#7E90FE]">
            <figure>
                <img
                src={logo}
                alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {job_title}
                {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{company_name}</p>
                <div className="card-actions justify-start">
                    <div className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-gray-400">{remote_or_onsite}</div>
                    <div className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-gray-400">{job_type}</div>
                </div>
                <div className="card-actions justify-start mt-4">
                    <div className="flex"><MdLocationOn className="text-xl mr-1" />{location}</div>
                    <div className="flex"><AiOutlineDollar className="text-xl mr-1" />Salary: {salary}</div>
                </div>
                <div className="card-actions justify-start mt-4">
                    <Link to={`job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;