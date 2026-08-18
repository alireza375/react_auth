const Contact = () => {
    return (
        <div className="hero bg-base-200 min-h-screen py-12">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-5xl w-full">
                
                {/* Contact Info Side */}
                <div className="text-center lg:text-left flex-1">
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <p className="py-6">
                    We would love to hear from you. Send us a message and we will reply as soon as we can.
                </p>
                <div className="space-y-4 text-base-content/80">
                    <p className="flex items-center justify-center lg:justify-start gap-3">
                    <span>📍</span> 123 Street Name, City, Country
                    </p>
                    <p className="flex items-center justify-center lg:justify-start gap-3">
                    <span>📞</span> +1 (234) 567-890
                    </p>
                    <p className="flex items-center justify-center lg:justify-start gap-3">
                    <span>📧</span> support@example.com
                    </p>
                </div>
                </div>

                {/* Contact Form Card */}
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl flex-1">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email@example.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Your message..." required></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Send Message</button>
                    </div>
                </form>
                </div>

            </div>
        </div>

    );
};

export default Contact;