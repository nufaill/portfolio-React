import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs.send(
      'service_iktofcb',  
      'template_tlhj1g5', 
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'S2oXjbmgfDG4nbVF0' 
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, (err) => {
      console.log('FAILED...', err);
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: 'Email',
      value: 'nufailtb77@gmail.com',
      link: 'mailto:nufailtb77@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: 'Phone',
      value: '+917902536866',
      link: 'tel:+917902536866'
    },
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: 'Location',
      value: 'Kochi,Kerala',
      link: '#'
    }
  ];

  return (
    <section id="contact" className={`py-24 ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Contact <span className="text-cyan-500">Me</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Have a project in mind or want to discuss potential opportunities? I'm always open to new ideas and collaborations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-700' : 'bg-white'} h-full`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Connect
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h4>
                      <a 
                        href={item.link} 
                        className={`hover:text-cyan-500 transition-colors duration-300 ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/nufaill" 
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-slate-800 text-gray-300 hover:text-cyan-400' 
                        : 'bg-gray-100 text-gray-600 hover:text-cyan-500'
                    } transition-colors duration-300`}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nufail-tb-758748320/" 
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-slate-800 text-gray-300 hover:text-cyan-400' 
                        : 'bg-gray-100 text-gray-600 hover:text-cyan-500'
                    } transition-colors duration-300`}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/_nxfxl.__/?next=%2F&hl=en" 
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-slate-800 text-gray-300 hover:text-cyan-400' 
                        : 'bg-gray-100 text-gray-600 hover:text-cyan-500'
                    } transition-colors duration-300`}
                    aria-label="Instagram "
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5c2.35 0 4.25 1.9 4.25 4.25v8.5c0 2.35-1.9 4.25-4.25 4.25h-8.5c-2.35 0-4.25-1.9-4.25-4.25v-8.5c0-2.35 1.9-4.25 4.25-4.25zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.25-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"/>
                    </svg>
                  </a>
                  <a 
                    href="tel:+917902536866" 
                    className={`p-3 rounded-full ${
                      darkMode 
                        ? 'bg-slate-800 text-gray-300 hover:text-cyan-400' 
                        : 'bg-gray-100 text-gray-600 hover:text-cyan-500'
                    } transition-colors duration-300`}
                    aria-label="Dribbble"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M16.002 2.002C8.276 2.002 2 8.278 2 16.004c0 2.822.738 5.443 2.021 7.73L2 30l6.445-2.011A13.957 13.957 0 0016.002 30c7.726 0 14.002-6.276 14.002-13.996 0-7.726-6.276-14.002-14.002-14.002zm0 25.594a11.58 11.58 0 01-5.892-1.609l-.422-.252-3.826 1.193 1.195-3.727-.275-.439a11.574 11.574 0 01-1.767-6.143c0-6.41 5.22-11.63 11.63-11.63 3.106 0 6.026 1.208 8.223 3.405 2.197 2.197 3.405 5.117 3.405 8.223 0 6.41-5.22 11.58-11.63 11.58zm6.41-8.7c-.35-.176-2.065-1.017-2.385-1.134-.32-.117-.552-.176-.783.176s-.897 1.134-1.101 1.37c-.203.235-.375.264-.725.088-.35-.176-1.479-.546-2.819-1.74-1.042-.93-1.745-2.08-1.95-2.43-.203-.352-.022-.541.153-.717.157-.156.35-.41.525-.615.176-.203.234-.352.352-.586.117-.234.059-.439-.03-.615-.088-.176-.782-1.89-1.072-2.593-.282-.678-.568-.586-.783-.596l-.666-.012c-.234 0-.615.088-.937.41-.32.323-1.224 1.196-1.224 2.914s1.252 3.381 1.427 3.616c.176.235 2.463 3.762 5.977 5.271.836.36 1.49.575 2 .734.84.266 1.605.229 2.212.139.674-.1 2.065-.844 2.36-1.66.293-.815.293-1.521.205-1.66-.088-.139-.32-.229-.674-.404z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-700' : 'bg-white'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Me a Message
              </h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                        darkMode 
                          ? 'bg-slate-800 text-white border border-slate-600 focus:border-cyan-500' 
                          : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-cyan-500'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                        darkMode 
                          ? 'bg-slate-800 text-white border border-slate-600 focus:border-cyan-500' 
                          : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-cyan-500'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                      darkMode 
                        ? 'bg-slate-800 text-white border border-slate-600 focus:border-cyan-500' 
                        : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-cyan-500'
                    }`}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none ${
                      darkMode 
                        ? 'bg-slate-800 text-white border border-slate-600 focus:border-cyan-500' 
                        : 'bg-gray-100 text-gray-900 border border-gray-300 focus:border-cyan-500'
                    }`}
                    placeholder="I'd like to discuss a project..."
                  ></textarea>
                  {submitStatus === 'success' && (
                        <p className="text-green-500 mt-4">Message sent successfully!</p>
                      )}
                      {submitStatus === 'error' && (
                        <p className="text-red-500 mt-4">Failed to send the message. Please try again!</p>
                      )}

                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send size={18} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;