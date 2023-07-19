import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// import ContactForm from './ContactForm';
// import Form from './Form';

const Contact = () => {
  return (
    <div className="py-12">
      <h1 className="text-[#eff0f5] text-2xl sm:text-4xl md:text-6xl text-center drop-shadow-[0_1px_1.3px_#cc00ff] font-[300] sm:py-12">
        CONTACT US
      </h1>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="item"> */}
      <div className="flex flex-col text-left sm:text-center px-2 sm:flex-row gap-8 text-[#ffffff95] my-6 sm:my-12 justify-start ">
        <div className="flex-1 sm:pl-4 sm:my-12 sm:mx-12 justify-start">
          <p>
            Duis suscipit egestas ullamcorper. Cras porta nulla et tristique
            pellentesque. Praesent finibus mauris eu sollicitudin interdum.
            Morbi et blandit quam. Donec vitae massa purus. Curabitur nunc
            mauris, iaculis a nibh at, ultricies sodales dolor.
          </p>
          <p>
            Curabitur pharetra velit eget dignissim varius. In vulputate elit at
            tortor pellentesque, non pulvinar neque consequat.
          </p>
        </div>

        <div className="flex-1 sm:mb-8">
          <h4 className="label mb-2">Phone</h4>
          <p className="text-xl sm:text-3xl text-white">
            <Link to="tel:+770221770505">+77 022 177 05 05</Link>
          </p>
          <h4 className="label mb-2 mt-4">Email</h4>
          <p className="text-xl sm:text-3xl   text-white">
            <Link to="mailto:frenifyteam@gmail.com">
              frenifyteam@gmail.com
            </Link>
          </p>
        </div>

        <div className="flex-1">
          <h4 className="label text-grey">OFFICE</h4>
          <p className="text-xl sm:text-3xl   text-white">124 S Main St, Scottville, MI</p>
          <p className=" text-xl sm:text-3xl    text-white">49454, United States</p>
        </div>
      </div>

      {/* <Form/> */}
      {/* <ContactForm/> */}
      <div className="fn_cs_contact_form">
        <form
          action="/"
          method="post"
          className="contact_form"
          id="contact_form"
          autoComplete="off"
        >
          <div className="sm:grid sm:grid-cols-2 gap-4 sm:px-12 sm:mx-12 py-6 sm:my-12 sm:py-12">
            <div>
              <input
                id="name"
                type="text"
                placeholder="Your Name *"
                className="w-[95%] px-4 py-6 my-2 border border-gray-300 rounded-lg bg-transparent"
                style={{ background: "none" }}
              />
            </div>
            <div>
              <input
                id="email"
                type="text"
                placeholder="Your Email *"
                className="w-[95%] px-4 py-6 my-2 border border-gray-300 rounded-lg bg-transparent"
                style={{ background: "none" }}
              />
            </div>
            <div>
              <input
                id="tel"
                type="text"
                placeholder="Your Phone (optional)"
                className="w-[95%] px-4 py-6 my-2  border border-gray-300 rounded-lg bg-transparent"
                style={{ background: "none" }}
              />
            </div>
            <div>
              <input
                id="subject"
                type="text"
                placeholder="Topic (optional)"
                className="w-[95%] px-4 py-6 my-2  border border-gray-300 rounded-lg bg-transparent"
                style={{ background: "none" }}
              />
            </div>
            <div className="col-span-2">
              <textarea
                id="message"
                placeholder="Your Message *"
                defaultValue={""}
                className="w-[97%] h-64 px-4 py-4 sm:px-12 sm:py-12 my-2 border border-gray-300 rounded-lg bg-transparent"
                style={{ background: "none" }}
              />
            </div>
            <div className="flex justify-start px-3">
              <div className="">
                <label className="fn__checkbox">
                  {/* <input type="checkbox" class="appearance-none border border-gray-300 rounded-sm checked:bg-transparent checked:border-indigo-600 checked:border-opacity-100w-5 h-5 md:w-6 md:h-6 checked:ring-2 checked:ring-indigo-600 checked:ring-opacity-50 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/> */}

                  <input
                    type="checkbox"
                    className="form-select px-4 py-3 rounded-full "
                  />
                </label>
              </div>
              <div className=" text-[#ffffff85] px-3 flex justify-start text-left">
                <p>
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:my-12 mx-4 sm:mx-12 flex justify-start">
            <Button
              onClick={() => console.log("Button clicked!")}
              className="mt-4"
            >
              Send Message
            </Button>
          </div>

          <div
            className="returnmessage"
            data-success="Your message has been received, We will contact you soon."
          />
          {/* <div className="empty_notice">
      <span>! Please Fill Required Fields !</span>
    </div> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
