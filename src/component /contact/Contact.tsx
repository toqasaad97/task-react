import React, { useState, ChangeEvent, FormEvent } from 'react';
import Black from '../Line/Black';


// Define the type for the form state
interface FormState {
  name: string;
  age: string;
  email: string;
  password: string;
}

const Contact: React.FC = () => {
  // Initialize the form state
  const [form, setForm] = useState<FormState>({
    name: '',
    age: '',
    email: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  // Prevent the default form submission
  const formPrevent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here if needed
  };

  return (
    <>
      <div className='w-full max-w-lg text-center mx-auto p-4'>
        <h2 className='uppercase text-3xl font-bold text-[#2C3E50]'>Contact Section</h2>
        <Black />
      </div>
      <div className="grid grid-cols-1 place-items-center w-full">
        <div className="w-[100%] max-w-4xl">
          <form className="p-6 bg-white rounded" onSubmit={formPrevent}>
            <div className="relative z-0 w-full mb-7">
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="peer block w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#1ABC9C]"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 text-gray-400 duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:text-[#1ABC9C]"
              >
                User Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-7">
              <input
                type="number"
                name="age"
                id="age"
                value={form.age}
                onChange={handleChange}
                className="peer block w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#1ABC9C]"
                placeholder=" "
                required
              />
              <label
                htmlFor="age"
                className="absolute left-3 top-3 text-gray-400 duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:text-[#1ABC9C]"
              >
                User Age
              </label>
            </div>

            <div className="relative z-0 w-full mb-7">
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="peer block w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#1ABC9C]"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-400 duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:text-[#1ABC9C]"
              >
                User Email
              </label>
            </div>

            <div className="relative z-0 w-full mb-7">
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="peer block w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#1ABC9C]"
                placeholder=" "
                required
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-3 text-gray-400 duration-300 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-6 peer-focus:text-[#1ABC9C]"
              >
                User Password
              </label>
            </div>

            <button
              type="submit"
              className="px-4 py-2 mt-5 text-center text-white bg-[#1ABC9C] rounded focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
