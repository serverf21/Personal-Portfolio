import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { toast } from 'react-toastify';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [details, setDetails] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!details.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (details.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }
    
    if (!details.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(details.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!details.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (details.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    return newErrors;
  }, [details]);

  const PostData = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      toast.error('Please fix the errors below', {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { name, email, message } = details;
      
      const res = await fetch("https://personal-portfolio-d8375-default-rtdb.firebaseio.com/sarvagyacontact.json", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          timestamp: new Date().toISOString(),
        })
      });

      if (res.ok) {
        toast.success(`Thank you for reaching out, ${name}! I'll be in touch shortly. 🌟`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        
        // Reset form
        setDetails({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again or email me directly.', {
        position: "top-center",
        autoClose: 5000,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [details, validateForm]);

  const handleInputChange = useCallback((field: keyof ContactForm, value: string) => {
    setDetails(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);
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
          pb-24 p-6 items-start sm:w-[70vw] lg:w-[40vw]">
            <div className="w-full">
              <input 
                className={`bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-accent transition-all ${
                  errors.name ? 'border-red-500' : ''
                }`}
                type="text"
                placeholder="Your name"
                value={details.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                aria-label="Your name"
                required
              />
              {errors.name && (
                <span className="text-red-400 text-sm mt-1 block">{errors.name}</span>
              )}
            </div>
            
            <div className="w-full">
              <input 
                className={`bg-transparent border-b py-3 outline-none w-full
                placeholder:text-white focus:border-accent transition-all ${
                  errors.email ? 'border-red-500' : ''
                }`}
                type="email"
                placeholder="Your email"
                value={details.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                aria-label="Your email"
                required
              />
              {errors.email && (
                <span className="text-red-400 text-sm mt-1 block">{errors.email}</span>
              )}
            </div>
            
            <div className="w-full">
              <textarea 
                className={`bg-transparent border-b py-12 outline-none w-full
                placeholder:text-white focus:border-accent transition-all resize-none mb-12 ${
                  errors.message ? 'border-red-500' : ''
                }`}
                placeholder='Your message'
                value={details.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                aria-label="Your message"
                required
              />
              {errors.message && (
                <span className="text-red-400 text-sm mt-1 block">{errors.message}</span>
              )}
            </div>

            <button 
              className='btn btn-lg hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
              transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
              onClick={PostData}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
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
