"use client"
import { useIsVisible } from '../src/app/hooks/useIsVisible';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { isVisible, elementRef } = useIsVisible({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
  });
  const { register, reset } = useForm<FormData>(); // Added reset for clearing the form

  const handleClearForm = () => {
    reset(); // Clears the form fields
  };

  return (
    <div
      className={`transition-opacity ease-in duration-[700ms] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      ref={elementRef}
    >
      <div className="flex items-center justify-center m-8">
        <div className="w-96">
          <form action="https://formspree.io/f/mwppavdj" method="POST">
            <div className="mb-5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-black"
                >
                  Full Name
                </label>
                <button
                  type="button"
                  onClick={handleClearForm}
                  className="text-sm text-cmu-maroon hover:underline"
                >
                  Clear Form
                </button>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register('name', { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-black"
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register('message', { required: true })}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full hover:shadow-form rounded-md bg-cmu-maroon py-3 px-6 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
