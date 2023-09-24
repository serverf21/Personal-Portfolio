import React, { useState } from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import { toast } from 'react-toastify';


const Contact = () => {

  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const PostData = async (e) => {
    e.preventDefault()

    const { name, email, message } = details;

    const res = await fetch("https://personal-portfolio-d8375-default-rtdb.firebaseio.com/sarvagyacontact.json",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,

        })
      });
    if (res.status === 200) {
      toast.success(`Thank you for reaching out, ${name}.
      We will be in touch shortly. 🌟`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }
  return (
    <section className='py-10 mt-20 lg:section bg-cyan-950' id="contact">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row align-middle items-center'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center align-middle'>
            <div>
              <h4 className="text-xl uppercase text-pink-300 font-medium mb-2
              tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>

            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start">
            <input className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all" type="text"
              placeholder="Your name"
              onChange={(e) =>
                setDetails({ ...details, name: e.target.value })
              }
            />
            <input className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all" type="email"
              placeholder="Your email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
              onChange={(e) =>
                setDetails({ ...details, message: e.target.value })
              }
            />

            <button className='btn btn-lg
            hover:text-blue-950 hover:shadow-[inset_15rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
            transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700'
              onClick={PostData}>
              Send Message
            </button>

          </motion.form>

        </div>
        <div className='mb-[25vh]'>
          <div className='text-pink-300 font-primary font-semibold text-lg'>
            <h1>Or</h1>
          </div>
          Email me: sarvagyasaxena.2102@gmail.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
