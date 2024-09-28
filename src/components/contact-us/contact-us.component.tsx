import React from "react";

import "./contact-us.component.scss";

const ContactUs = () => {
  return (
    <div className="hero bg-base-200 min-h-screen contact-us">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Us!</h1>
          <p className="py-6">
            Get in Touch with Our Plumbing Experts! Whether you’re dealing with
            a plumbing emergency, need routine maintenance, or are planning a
            renovation, we're here to help. Contact us today for fast, reliable
            service and expert advice. Our team is available 24/7 to handle all
            your plumbing needs—no job is too big or small. Call, email, or fill
            out our contact form, and we'll get back to you as soon as possible!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="phone"
                placeholder="Phone Number..."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Enter Message..."
              ></textarea>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Call Us
                </a>
              </label> */}
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

export default ContactUs;
