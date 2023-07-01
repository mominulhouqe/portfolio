import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineSend, AiOutlineHome, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hgig8s9', 'template_cgtnr22', form.current, 'wKVtU0oESIRidSasE')
      .then((result) => {
        console.log(result.text);
        form.current.reset(); // Reset the form after sending
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center'>
        <div>

          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                name="user_email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                name="message"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            />
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Fade triggerOnce={true} delay={200}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <AiOutlineHome className="inline-block mr-2" />
              <span className="font-semibold">Address:</span> Habiganj
            </p>
            <p className="text-gray-700 mb-2">
              <AiOutlinePhone className="inline-block mr-2" />
              <span className="font-semibold">Phone:</span> +8801937985805
            </p>
            <p className="text-gray-700 mb-2">
              <AiOutlineMail className="inline-block mr-2" />
              <span className="font-semibold">Email:</span> mominulhauqe14@gmail.com
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Working Hours:</span> 24/7 Days
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
