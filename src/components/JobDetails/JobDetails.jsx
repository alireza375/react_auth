import { useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactTostify.css';
import Banner from "../Banner/Banner";
import { saveJobApplication } from "../../utility/localstorage";
import { AiOutlineDollar } from "react-icons/ai";
import { MdLocationOn, MdOutlineLocalPhone, MdOutlineMail } from "react-icons/md";
import { PiSubtitlesBold } from "react-icons/pi";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    // console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        
        <div>
            <Banner />
            <div className="grid md:grid-cols-3 gap-4">
                <div className="p-2 md:col-span-2">
                    <div> 
                        <p><b>Job Description:</b>{job.job_description}</p>
                    </div>
                    <div className="mt-6"> 
                        <p><b>Job Responsibilities: </b>{job.job_responsibility}</p>
                        
                    </div>
                    <div className="mt-6"> 
                        <h2 className="font-bold">Job Education:</h2>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div className="mt-6"> 
                        <h2 className="font-bold">Job Experience</h2>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div className="bg-gray-900">
                    <div className="p-2 mt-2">
                        <h2 className="text-2xl">Job Details</h2>
                        <hr className="text-gray-300 mt-4 mb-4"></hr>
                        <div className="card-actions justify-start mt-4">
                            <div className="flex">
                                <AiOutlineDollar className="text-xl mr-1" />Salary: {job.salary} 
                                </div>
                                <div className="flex">
                                    <PiSubtitlesBold className="text-xl mr-1" />Job title: {job.job_title}
                                    </div>
                        </div>
                    </div>
                    <div className="p-2 mt-2">
                        <h2 className="text-2xl">Contact Information</h2>
                        <hr className="text-gray-300 mt-4 mb-4"></hr>
                        <div className="flex">
                            <MdOutlineLocalPhone className="text-xl mr-1" />Phone: {job.contact_information.phone} 
                            </div>
                            <div className="flex">
                                <MdOutlineMail className="text-xl mr-1" />Email: {job.contact_information.email}
                                </div>
                            <div className="flex">
                                <MdLocationOn className="text-xl mr-1" />Address: {job.contact_information.address}
                                </div>
                        </div>
                        
                        <button onClick={handleApplyJob} className="btn btm-praimary w-full mt-4">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;