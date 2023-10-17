import Link from 'next/link';
import React from 'react'
import { BsTwitter,BsFacebook,BsDiscord } from 'react-icons/bs'

const Page = () => {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-2">
      <h1 className="text-2xl font-bold mb-4 text-[#ff8913]">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border rounded text-black"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border rounded text-black"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="subject">Subject</label>
          <input
            className="w-full p-2 border rounded text-black"
            type="text"
            id="subject"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border rounded text-black"
            id="message"
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="mt-4 text-green-700"> {/* Display confirmation message here */}</div>
      <div className="flex items-center justify-center mt-8">
        <Link href="#" className="mx-2">
          <BsTwitter />
        </Link>
        <Link href="#" className="mx-2">
          <BsFacebook />
        </Link>
        <Link href="https://discord.gg/ydyMQvBZfj" className="mx-2">
          <BsDiscord />
        </Link>
      </div>
      <p className="mb-4">
        For inquiries, please email us at{' '}
        <a href="mailto:contact@yourapp.com">contact@yourapp.com</a>.
      </p>
    </div>
  );
};




export default Page