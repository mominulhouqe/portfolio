import React, { useState } from 'react';
import { AiOutlineSend, AiOutlineHome, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Email sending failed.');
      }
    } catch (error) {
      console.error('Email sending failed.', error);
      setError('Failed to send the message. Please try again later.');
    }

    setIsSending(false);
  };

  const validateForm = () => {
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return false;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    setError('');
    return true;
  };

  const isValidEmail = (email) => {
    // Use a regular expression or a validation library to validate the email format
    // Return true if the email is valid, false otherwise
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="bg-[#FDF8F7] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Fade triggerOnce={true}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send me a message</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    <AiOutlineMail className="inline-block mr-2" />
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    <AiOutlineSend className="inline-block mr-2" />
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-full shadow-lg mr-4"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {error && <p className="text-red-600">{error}</p>}
                {isSent && <p className="text-green-600">Message sent successfully!</p>}
              </form>
            </Fade>
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
      <div className="w-full mt-8">
        <p className="text-center text-gray-500">Contact me for more information</p>
        <button className="block mx-auto mt-4 px-6 py-2 text-white font-bold bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
