

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                alt="profile_image"
                src="../../../public/assets/images/user.png"
                className="max-w-xl rounded-lg shadow-2xl"
                />
                <div>
                <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                <p className="py-6">
                    Explore thousands of job opportunities with all the information you need. 
                    Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className="btn btn-primary">Get Started</button>
                <p>Name: </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;