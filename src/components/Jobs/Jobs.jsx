import { useLoaderData } from "react-router";
import Job from "../Job/Job";
import Banner from "../Banner/Banner";

const Jobs = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <Banner />
              <h3 className="text-center font-bold text-2xl">Feature Jobs</h3>
            <div className="grid grid-cols-2 gap-6 mt-4">
                {
                jobs.map(job => <Job key={job.id} job={job} />)
            }
            </div>
        </div>
    );
};

export default Jobs;