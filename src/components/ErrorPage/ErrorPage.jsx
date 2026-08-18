import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                <div class="badge badge-error gap-2 font-semibold mb-4">
                    Error 404
                </div>
                
                <h1 class="text-5xl font-bold text-base-content mb-4">
                    Page Not Found
                </h1>
                
                <p class="text-base-content/70 mb-6">
                    Sorry, the page you are looking for doesn't exist or has been moved. 
                    Double check the URL or head back home.
                </p>
                
                <div class="flex justify-center gap-4">
                    <Link to ='/'>Go Back</Link>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;