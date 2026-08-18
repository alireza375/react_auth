import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setdataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, []);

    return (
        <diV className="mt-4"> 
            <div className="text-center">
                <h3 className="text-5xl font-bold">Featured Jobs</h3>
                <p className="mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job = {job} />)
                }
            </div>
            <div className={`m-4 flex justify-center ${dataLength === jobs.length ? 'hidden' : ''}`}>
                <button 
                onClick={() => setdataLength(jobs.length)}
                className="btn btn-primary ">Show More</button>
            </div>
            
        </diV>
       
        
        
    );
};

export default FeaturedJob;